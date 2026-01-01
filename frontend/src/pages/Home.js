import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>   SAMPER CABS PARCEL TRACKER</h1>
            <h2>Welcome to SAMPER CABS PARCEL TRACKER</h2>
            <p>Track your packages easily.</p>
            <Link to="/login">
                <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Go to Login</button>
            </Link>
        </div>
    );
}

export default Home;