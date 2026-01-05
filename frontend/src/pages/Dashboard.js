import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';

function Dashboard() {
    const [trackingId, setTrackingId] = useState('');
    const [userName, setUserName] = useState('User');

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserName(user.name);
        }

        const timerId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);


        return () => clearInterval(timerId);
    }, []);

    const handleTrack = (e) => {
        e.preventDefault();
        alert(`Tracking functionality for ID: ${trackingId} coming soon!`);
    };


    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', { hour12: false }); // 24-hour format
    };

    return (
        <DashboardLayout>

            {/* HEADER SECTION WITH CLOCK */}
            <div style={styles.headerRow}>
                <div>
                    <h2 style={{ margin: 0 }}>👋 Welcome Back, {userName}!</h2>
                    <p style={{ color: '#666', marginTop: '5px' }}>Here is the overview of recent activities.</p>
                </div>

                {/* 3. THE CLOCK UI */}
                <div style={styles.clockCard}>
                    <div style={styles.timeText}>{formatTime(currentDate)}</div>
                    <div style={styles.dateText}>{formatDate(currentDate)}</div>
                </div>
            </div>

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

    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        flexWrap: 'wrap',
        gap: '20px'
    },
    // Clock Styles
    clockCard: {
        backgroundColor: '#282c34',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        minWidth: '200px',
    },
    timeText: {
        fontSize: '28px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        fontFamily: 'monospace',
        color: '#4caf50',
    },
    dateText: {
        fontSize: '14px',
        opacity: '0.8',
        marginTop: '5px',
    },

    statsGrid: { display: 'flex', gap: '20px', marginBottom: '30px' },
    statCard: { flex: 1, padding: '20px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    section: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
    searchBox: { display: 'flex', gap: '10px', marginTop: '15px' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' },
    trackBtn: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default Dashboard;