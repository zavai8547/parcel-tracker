import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();

    return (
        <div style={styles.sidebar}>
            <h3 style={styles.logo}> Samper Cabs Limited</h3>

            <nav style={styles.nav}>
                <Link
                    to="/dashboard"
                    style={location.pathname === '/dashboard' ? styles.activeLink : styles.link}
                >
                    Dashboard
                </Link>

                <Link
                    to="/book-parcel"
                    style={location.pathname === '/book-parcel' ? styles.activeLink : styles.link}
                >
                    Book Parcel
                </Link>

                {/* Placeholder for all links */}
                <Link to="/profile" style={styles.link}> Profile</Link>
            </nav>

            <div style={styles.footer}>
                <Link to="/" style={styles.logout}> Logout</Link>
            </div>
        </div>
    );
}

const styles = {
    sidebar: {
        width: '250px',
        height: '100vh',
        backgroundColor: '#282c34',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
    },
    logo: {
        padding: '20px',
        textAlign: 'center',
        borderBottom: '1px solid #444',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '10px',
        flex: 1,
    },
    link: {
        color: '#bbb',
        textDecoration: 'none',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '16px',
        transition: '0.3s',
    },
    activeLink: {
        color: 'white',
        backgroundColor: '#007bff',
        textDecoration: 'none',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    footer: {
        padding: '20px',
        borderTop: '1px solid #444',
    },
    logout: {
        color: '#dc3545',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
    }
};

export default Sidebar;