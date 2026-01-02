import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

function BookParcel() {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        senderName: '',
        senderPhone: '',
        receiverName: '',
        receiverPhone: '',
        origin: 'Nairobi',
        destination: 'Kisumu',
        description: '',
        amount: '',
        additionalDetails: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const trackingId = 'SAM-' + Math.floor(1000 + Math.random() * 9000);

        const newParcel = {
            ...formData,
            trackingId,
            status: 'In Transit',
            date: new Date().toLocaleDateString()
        };

        console.log("Parcel Booked:", newParcel);

        alert(`Parcel Booked Successfully!\nTracking ID: ${trackingId}\n\n(Receipt printing will open next)`);

        navigate('/dashboard');
    };

    return (
        <DashboardLayout> {/* 2. Wrapping to Layout */}

            <div style={styles.container}>
                <h2>📝 Book New Parcel</h2>
                <div style={styles.card}>
                    <form onSubmit={handleSubmit} style={styles.form}>

                        {/* Sender Details */}
                        <h3>Sender Details</h3>
                        <div style={styles.row}>
                            <input name="senderName" placeholder="Sender Name" onChange={handleChange} required style={styles.input} />
                            <input name="senderPhone" placeholder="Sender Phone" onChange={handleChange} required style={styles.input} />
                        </div>

                        {/* Receiver Details */}
                        <h3>Receiver Details</h3>
                        <div style={styles.row}>
                            <input name="receiverName" placeholder="Receiver Name" onChange={handleChange} required style={styles.input} />
                            <input name="receiverPhone" placeholder="Receiver Phone" onChange={handleChange} required style={styles.input} />
                        </div>

                        {/* Parcel Route */}
                        <h3>Parcel Route</h3>

                        <h4>Parcel Sent From</h4>
                        {/* 3. origin of parcel' */}
                        <select name="origin" onChange={handleChange} style={styles.input} value={formData.origin}>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Kisumu">Kisumu</option>
                        </select>

                        <h4>Parcel Sent To</h4>
                        <select name="destination" onChange={handleChange} style={styles.input} value={formData.destination}>
                            <option value="Nakuru">Nakuru</option>
                            <option value="Nairobi">Nairobi</option>
                            <option value="Mombasa">Mombasa</option>
                            <option value="Kisumu">Kisumu</option>
                        </select>

                        {/* Description */}
                        <h3>Parcel Details</h3>
                        <p style={{ marginBottom: '5px' }}>Enter the description of the parcel</p>
                        <textarea name="description" placeholder="Example: Box of Shoes" onChange={handleChange} required style={styles.textarea} />

                        {/* Payment & Extras */}
                        <h3>Payment Details</h3>
                        <input name="amount" type="number" placeholder="Amount Paid (KES)" onChange={handleChange} required style={styles.input} />

                        <h3>Additional Notes</h3>
                        <input name="additionalDetails" placeholder="Fragile, Handle with care, etc." onChange={handleChange} style={styles.input} />

                        <button type="submit" style={styles.button}>Book & Generate Receipt</button>
                    </form>
                </div>
            </div>

        </DashboardLayout>
    );
}

const styles = {

    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' },
    card: { backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '700px' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    row: { display: 'flex', gap: '10px' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
    textarea: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '80px', fontFamily: 'inherit' },
    button: { padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }
};

export default BookParcel;