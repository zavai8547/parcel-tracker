import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={styles.pageContainer}>

            {/* 1. Navbar: Simple Brand Anchor */}
            <nav style={styles.nav}>
                <div style={styles.brand}>🚚 Samper Cabs</div>
                <Link to="/login" style={styles.navLink}>Admin Access</Link>
            </nav>

            {/* 2. Hero Section */}
            <div style={styles.heroWrapper}>
                <div style={styles.heroContent}>

                    {/* LEFT COLUMN: The Pitch */}
                    <div style={styles.leftColumn}>
                        <h1 style={styles.headline}>
                            Track your parcels in real time—<br />
                            <span style={{ color: '#007bff' }}>without calling anyone.</span>
                        </h1>

                        <p style={styles.subtext}>
                            Samper Cabs Parcel Tracker lets customers and staff monitor parcel status,
                            delivery progress, and confirmations from one simple dashboard.
                        </p>

                        {/* Feature Bullets */}
                        <div style={styles.featureList}>
                            <div style={styles.featureItem}> Real-time parcel status updates</div>
                            <div style={styles.featureItem}> Driver & route tracking</div>
                            <div style={styles.featureItem}> Instant delivery confirmations</div>
                        </div>

                        {/* CTA Button */}
                        <div style={styles.ctaGroup}>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <button style={styles.primaryBtn}>Login to Track Parcel &rarr;</button>
                            </Link>
                            <p style={styles.trustText}>🔒 Secure access used by Samper Cabs Team</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Visual (CSS-only Tracking Card) */}
                    <div style={styles.rightColumn}>
                        <div style={styles.visualCard}>
                            {/* Mock UI: Header */}
                            <div style={styles.cardHeader}>
                                <div style={styles.iconBox}>📦</div>
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#333' }}>Tracking #SAM-8842</div>
                                    <div style={{ color: '#28a745', fontSize: '13px', fontWeight: '600' }}>● In Transit</div>
                                </div>
                            </div>

                            {/* Mock UI: Timeline */}
                            <div style={styles.timeline}>
                                <div style={styles.timelineItem}>
                                    <div style={styles.dot}></div>
                                    <div style={styles.timeText}>Package Received at Nairobi</div>
                                </div>
                                <div style={styles.timelineItem}>
                                    <div style={styles.dot}></div>
                                    <div style={styles.timeText}>Departed for Nakuru</div>
                                </div>
                                <div style={styles.timelineItem}>
                                    <div style={{ ...styles.dot, backgroundColor: '#e9ecef', borderColor: '#ccc' }}></div>
                                    <div style={{ ...styles.timeText, color: '#aaa' }}>Arriving at Destination</div>
                                </div>
                            </div>

                            <div style={styles.cardFooter}>
                                Estimated Arrival: <strong>Today, 4:00 PM</strong>
                            </div>
                        </div>
                        {/* Background blob for depth */}
                        <div style={styles.blob}></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// --- STYLES ---
const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#fff',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        overflowX: 'hidden',
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    brand: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
    navLink: {
        color: '#666',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: '500',
    },
    heroWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh', // Takes up most of the screen
        padding: '20px',
    },
    heroContent: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
    },
    leftColumn: {
        flex: '1',
        minWidth: '300px',
    },
    headline: {
        fontSize: '42px',
        lineHeight: '1.2',
        color: '#1a1a1a',
        marginBottom: '20px',
        fontWeight: '800',
    },
    subtext: {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '30px',
        maxWidth: '480px',
    },
    featureList: {
        marginBottom: '30px',
    },
    featureItem: {
        fontSize: '16px',
        color: '#444',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    primaryBtn: {
        padding: '15px 32px',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,123,255,0.2)',
        transition: 'transform 0.2s',
    },
    ctaGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        alignItems: 'flex-start',
    },
    trustText: {
        fontSize: '13px',
        color: '#888',
        marginTop: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    // Visual Right Side Styles
    rightColumn: {
        flex: '1',
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
    },
    visualCard: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '380px',
        position: 'relative',
        zIndex: '2',
        border: '1px solid #f0f0f0',
    },
    cardHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '25px',
        paddingBottom: '20px',
        borderBottom: '1px solid #f0f0f0',
    },
    iconBox: {
        width: '50px',
        height: '50px',
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
    },
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    timelineItem: {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
    },
    dot: {
        width: '12px',
        height: '12px',
        backgroundColor: '#007bff',
        borderRadius: '50%',
        border: '2px solid white',
        boxShadow: '0 0 0 2px #007bff',
    },
    timeText: {
        fontSize: '14px',
        color: '#444',
    },
    cardFooter: {
        marginTop: '25px',
        paddingTop: '20px',
        borderTop: '1px solid #f0f0f0',
        fontSize: '14px',
        color: '#666',
        textAlign: 'center',
    },
    blob: {
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '300px',
        height: '300px',
        backgroundColor: '#e3f2fd',
        borderRadius: '50%',
        zIndex: '1',
        opacity: '0.6',
        filter: 'blur(40px)',
    }
};

export default Home;