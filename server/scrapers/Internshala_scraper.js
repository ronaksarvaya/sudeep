const BaseScraper = require('./BaseScraper');

class IntershalaScraper extends BaseScraper {
    constructor() {
        super('Internshala');
    }

    async scrape() {
        await this.initialize();
        const url = 'https://internshala.com/internships/';
        console.log(`Navigating to ${url}...`);

        try {
            await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

            // Wait for the internship listing container to load
            await this.page.waitForSelector('#internship_list_container_1, .individual_internship', { timeout: 15000 }).catch(() => {
                console.log('Internship container selector not found within timeout, attempting to parse available content.');
            });

            // Extract internship data from the DOM
            let internships = await this.page.evaluate(() => {
                const rootUrl = 'https://internshala.com';
                const data = [];

                const cards = document.querySelectorAll('.individual_internship, .individual_internship_header');
                cards.forEach(card => {
                    const titleEl = card.querySelector('.job-internship-name a, #job_title');
                    const companyEl = card.querySelector('.company-name, .company_name');
                    const locationEl = card.querySelector('.locations, .location_link');
                    const stipendEl = card.querySelector('.stipend, .ic-16-money + span');
                    const durationEl = card.querySelector('.ic-16-calendar + span');
                    const descriptionEl = card.querySelector('.about_job .text, .internship_other_details_container');

                    const title = titleEl ? titleEl.innerText.trim() : '';
                    const company = companyEl ? companyEl.innerText.trim() : '';
                    const location = locationEl ? locationEl.innerText.trim() : '';
                    const stipend = stipendEl ? stipendEl.innerText.trim() : '';
                    const duration = durationEl ? durationEl.innerText.trim() : '';
                    const description = descriptionEl ? descriptionEl.innerText.trim() : '';

                    // Build apply URL from the link
                    const linkEl = card.querySelector('.job-internship-name a, #job_title');
                    let applyUrl = '';
                    if (linkEl && linkEl.getAttribute('href')) {
                        const href = linkEl.getAttribute('href');
                        applyUrl = href.startsWith('http') ? href : rootUrl + href;
                    }

                    if (title && company && applyUrl) {
                        data.push({
                            title,
                            company,
                            location: location || 'Not specified',
                            stipend: stipend || 'Not disclosed',
                            duration: duration || 'Not specified',
                            description: description || `${title} internship at ${company}`,
                            applyUrl,
                            source: 'Internshala',
                            postedAt: new Date()
                        });
                    }
                });

                return data;
            });

            if (internships.length === 0) {
                console.log('No listings found via scraping. Using fallback data.');
                internships = [
                    {
                        title: 'Software Development Intern (Fallback)',
                        company: 'Internshala Listing',
                        location: 'Remote',
                        stipend: '₹10,000/month',
                        duration: '3 months',
                        description: 'This is a fallback listing because scraping returned 0 results from Internshala.',
                        applyUrl: 'https://internshala.com/internships/',
                        source: 'Internshala',
                        postedAt: new Date()
                    }
                ];
            }

            console.log(`Found ${internships.length} listings from Internshala.`);
            return internships;

        } catch (error) {
            console.error('Error scraping Internshala:', error);
            return [
                {
                    title: 'Software Development Intern (Error)',
                    company: 'Internshala Listing',
                    location: 'Remote',
                    stipend: '₹10,000/month',
                    duration: '3 months',
                    description: 'This is a fallback listing because Internshala scraping failed completely.',
                    applyUrl: 'https://internshala.com/internships/',
                    source: 'Internshala',
                    postedAt: new Date()
                }
            ];
        }
    }
}

module.exports = IntershalaScraper;
