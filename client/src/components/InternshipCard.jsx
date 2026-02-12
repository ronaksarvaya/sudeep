import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, ExternalLink, Bookmark } from 'lucide-react';
import api from '../utils/api';

const InternshipCard = ({ internship, onApply }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            // Assume userId is static or from context (using dummy for MVP)
            const userId = '65caf8...'; // TODO: Replace with actual auth
            // alert('Bookmark functionality requires auth context'); 
            setIsBookmarked(!isBookmarked);
        } catch (error) {
            console.error('Error bookmarking:', error);
        }
    };

    return (
        <div
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>{internship.title}</h3>
                    <h4 style={{ margin: 0, color: 'var(--text-secondary)', fontWeight: 'normal' }}>{internship.company}</h4>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={handleBookmark}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: isBookmarked ? 'var(--warning)' : 'var(--text-secondary)' }}
                    >
                        <Bookmark fill={isBookmarked ? 'currentColor' : 'none'} size={20} />
                    </button>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={16} /> {internship.duration}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <DollarSign size={16} /> {internship.stipend}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={16} /> {internship.location}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <span className="badge" style={{ backgroundColor: '#f3f4f6', color: '#374151' }}>{internship.source}</span>
            </div>

            {isHovered && (
                <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f8fafc',
                    borderRadius: '0.375rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}>
                    {internship.description.substring(0, 150)}...
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <a
                    href={internship.applyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    onClick={() => onApply && onApply(internship._id)}
                >
                    Apply Now <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default InternshipCard;
