const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const fs = require('fs');

// Create a cloudscraper instance that maintains a cookie jar
const scraper = cloudscraper.defaults({ jar: true });

const rootUrl = 'https://internshala.com';
const internshipsUrl = 'https://internshala.com/internships/';

console.log(`Navigating to ${rootUrl} to establish session...`);

scraper.get(rootUrl).then(() => {
    console.log('Session established. Fetching internship list...');
    return scraper.get(internshipsUrl);
}).then((html) => {
    console.log('Internship list page fetched. Parsing HTML...');
    const $ = cheerio.load(html);

    const container = $('#internship_list_container_1');

    if (container.length > 0) {
        const content = container.html();
        if (content) {
            fs.writeFileSync('response.txt', content);
            console.log('Successfully extracted internship list and saved to response.txt');

            // Parse the content for JSON extraction
            const internships = [];
            $('.individual_internship').each((i, el) => {
                const id = $(el).attr('internshipid');
                const title = $(el).find('.job-internship-name a').text().trim();
                const company = $(el).find('.company-name').text().trim();
                const location = $(el).find('.locations').text().trim();
                const stipend = $(el).find('.stipend').text().trim();

                // Duration is a bit tricky, find the icon and get parent text
                const duration = $(el).find('.ic-16-calendar').next().text().trim() ||
                    $(el).find('.ic-16-calendar').parent().text().trim();

                const posted = $(el).find('.status-success, .status-inactive, .status-info').text().trim();

                const about_job = $(el).find('.about_job .text').text().trim();
                const skills = [];
                $(el).find('.job_skills .job_skill').each((j, skillEl) => {
                    skills.push($(skillEl).text().trim());
                });

                const link = $(el).find('#job_title').attr('href');
                const url = link ? (link.startsWith('http') ? link : rootUrl + link) : '';

                internships.push({
                    id,
                    title,
                    company,
                    location,
                    stipend,
                    duration: duration.replace(/\s+/g, ' ').trim(), // Clean up whitespace
                    posted,
                    about_job,
                    skills,
                    url
                });
            });

            fs.writeFileSync('response.json', JSON.stringify(internships, null, 2));
            console.log(`Successfully extracted ${internships.length} internships to response.json`);

        } else {
            console.log('Element #internship_list_container_1 found but content is empty.');
            fs.writeFileSync('response.txt', '');
        }

    } else {
        console.error('Element #internship_list_container_1 not found in the response.');
        // Still verify response by writing full html for debugging if needed, or just log error
        // For now, let's write a message to response.txt so the user knows it failed to find the element
        fs.writeFileSync('response.txt', 'Element #internship_list_container_1 not found.');
    }
}).catch((error) => {
    console.error('Error occurred:', error);
});
