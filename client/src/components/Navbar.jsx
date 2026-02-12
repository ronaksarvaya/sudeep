import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Briefcase, Bookmark } from 'lucide-react'; // Example icons

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'white', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', textDecoration: 'none', color: 'var(--primary)' }}>
                    InternshipHub
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)' }}>
                        <Briefcase size={18} /> Internships
                    </Link>
                    <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)' }}>
                        <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link to="/bookmarks" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-main)' }}>
                        <Bookmark size={18} /> Saved
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
