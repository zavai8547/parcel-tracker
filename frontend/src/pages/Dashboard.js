import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

function Dashboard() {
    const [trackingId, setTrackingId] = useState('');

    const handleTrack = (e) => {
        e.preventDefault();
        alert(`Tracking functionality for ID: ${trackingId} coming soon!`);
    };

    return (
        <DashboardLayout> {/* wrap to layout */}

            <h2>👋 Welcome Back, Attendant!</h2>
            <p>Here is the overview of recent activities.</p>

            {/* Stats Cards */}
            <div style={styles.statsGrid}>
                <div style={{ ...styles.statCard, backgroundColor: '#e3f2fd' }}>
                    <h3>📦 12</h3> <p>Parcels Today</p>
                </div>
                <div style={{ ...styles.statCard, backgroundColor: '#e8f5e9' }}>
                    <h3>🚚 5</h3> <p>In Transit</p>
                </div>
                <div style={{ ...styles.statCard, backgroundColor: '#fff3e0' }}>
                    <h3>📍 8</h3> <p>Arrived</p>
                </div>
            </div>

            {/* Tracking Section */}
            <div style={styles.section}>
                <h3>Quick Track</h3>
                <form onSubmit={handleTrack} style={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Enter Tracking ID..."
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.trackBtn}>Track</button>
                </form>
            </div>

        </DashboardLayout>
    );
}

const styles = {
    statsGrid: { display: 'flex', gap: '20px', marginBottom: '30px' },
    statCard: { flex: 1, padding: '20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    section: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    searchBox: { display: 'flex', gap: '10px', marginTop: '15px' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' },
    trackBtn: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Dashboard;