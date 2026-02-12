import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import InternshipCard from '../components/InternshipCard';
import { Search } from 'lucide-react';

const Home = () => {
    const [internships, setInternships] = useState([]);
    const [filters, setFilters] = useState({ title: '', location: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInternships();
    }, []);

    const fetchInternships = async (params = {}) => {
        setLoading(true);
        try {
            const res = await api.get('/internships', { params });
            setInternships(res.data);
        } catch (error) {
            console.error('Error fetching internships:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchInternships(filters);
    };

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>

            {/* Search Bar */}
            <div className="card" style={{ marginBottom: '2rem' }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'gray' }} />
                        <input
                            type="text"
                            placeholder="Job title, skills..."
                            value={filters.title}
                            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '0.375rem', border: '1px solid var(--border-color)' }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <input
                            type="text"
                            placeholder="Location..."
                            value={filters.location}
                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid var(--border-color)' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Find Internships</button>
                </form>
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {internships.map(internship => (
                        <InternshipCard
                            key={internship._id}
                            internship={internship}
                            onApply={async (id) => {
                                // Track application
                                try {
                                    // Using dummy user ID for MVP
                                    await api.post('/applications', {
                                        userId: '65caf8...', // Dummy
                                        internshipId: id
                                    });
                                } catch (e) { console.log('Already applied or error'); }
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
