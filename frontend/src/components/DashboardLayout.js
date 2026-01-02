import React from 'react';
import Sidebar from './Sidebar';

function DashboardLayout({ children }) {
    return (
        <div style={styles.container}>
            {/* Left Side: Sidebar */}
            <Sidebar />

            {/* Right Side: Page Content */}
            <main style={styles.content}>
                {children}
            </main>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',
    },
    content: {
        marginLeft: '250px',
        padding: '30px',
        flex: 1,
        width: '100%',
    }
};

export default DashboardLayout;