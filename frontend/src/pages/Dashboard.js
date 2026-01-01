import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [trackingId, setTrackingId] = useState('');

    const handleLogout = () => {
        // Later we will clear user tokens here
        navigate('/'); // Go back to Home
    };

    const handleTrack = (e) => {
        e.preventDefault();
        alert(`Tracking functionality for ID: ${trackingId} coming soon!`);
    };

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <header style={styles.header}>
                <h2>🚚 Samper Cabs Tracker</h2>
                <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
            </header>

            {/* Main Content */}
            <div style={styles.content}>
                <h3>Welcome back!</h3>

                {/* NEW: Button to go to the Booking Page */}
                <button
                    onClick={() => navigate('/book-parcel')}
                    style={styles.bookBtn}
                >
                    + New Parcel Booking
                </button>

                <p>Enter a tracking ID to find your package.</p>

                {/* Tracking Search Bar */}
                <form onSubmit={handleTrack} style={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Enter Tracking ID (e.g., SAM-123)"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        style={styles.input}
                    />
                    <button type="submit" style={styles.trackBtn}>Track Parcel</button>
                </form>

                {/* Mock Data for Recent Parcels */}
                <div style={styles.recentSection}>
                    <h4>Recent Shipments</h4>
                    <div style={styles.card}>📦 <b>SAM-8859</b> - <span style={{ color: 'orange' }}>In Transit</span></div>
                    <div style={styles.card}>📦 <b>SAM-1124</b> - <span style={{ color: 'green' }}>Delivered</span></div>
                </div>
            </div>
        </div>
    );
}

// Simple styles to make it look like a real app
const styles = {
    container: { fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' },
    header: { display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#282c34', color: 'white', alignItems: 'center' },
    logoutBtn: { padding: '8px 16px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
    content: { maxWidth: '600px', margin: '2rem auto', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },

    // NEW Style for the booking button
    bookBtn: { width: '100%', padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' },

    searchBox: { display: 'flex', gap: '10px', marginTop: '1rem', marginBottom: '2rem' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px' },
    trackBtn: { padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
    recentSection: { marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' },
    card: { padding: '10px', border: '1px solid #eee', marginBottom: '10px', borderRadius: '4px', backgroundColor: '#fafafa' }
};

export default Dashboard;