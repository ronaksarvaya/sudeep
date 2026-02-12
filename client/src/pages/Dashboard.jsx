import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Dashboard = () => {
    const [applications, setApplications] = useState([]);

    // Stats
    const [stats, setStats] = useState({ applied: 0, interviewed: 0, accepted: 0, rejected: 0 });

    useEffect(() => {
        // Fetch mock applications for now until auth is real
        // const fetchApps = async () => {
        //    const res = await api.get('/applications/65caf8...');
        //    setApplications(res.data);
        //    // Calc stats...
        // };
        // fetchApps();

        // Mocking data for view demonstration since auth isn't fully wired
        setApplications([
            { _id: '1', status: 'Applied', internshipId: { title: 'Software Engineering Intern', company: 'Tech Corp' }, appliedAt: new Date().toISOString() },
            { _id: '2', status: 'Interview Scheduled', internshipId: { title: 'Product Intern', company: 'Startup Hub' }, appliedAt: new Date().toISOString() },
        ]);
        setStats({ applied: 1, interviewed: 1, accepted: 0, rejected: 0 });

    }, []);

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Application Dashboard</h1>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{stats.applied}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Applied</div>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--warning)' }}>{stats.interviewed}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Interviewing</div>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--success)' }}>{stats.accepted}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Accepted</div>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--danger)' }}>{stats.rejected}</div>
                    <div style={{ color: 'var(--text-secondary)' }}>Rejected</div>
                </div>
            </div>

            <h2>Recent Applications</h2>
            <div className="card" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '1rem' }}>Role</th>
                            <th style={{ padding: '1rem' }}>Company</th>
                            <th style={{ padding: '1rem' }}>Date Applied</th>
                            <th style={{ padding: '1rem' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map(app => (
                            <tr key={app._id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                <td style={{ padding: '1rem' }}>{app.internshipId.title}</td>
                                <td style={{ padding: '1rem' }}>{app.internshipId.company}</td>
                                <td style={{ padding: '1rem' }}>{new Date(app.appliedAt).toLocaleDateString()}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span className={`badge badge-${app.status === 'Applied' ? 'blue' :
                                            app.status === 'Accepted' ? 'green' :
                                                app.status === 'Rejected' ? 'red' : 'yellow'
                                        }`}>
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
