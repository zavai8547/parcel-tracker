import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookParcel() {
    const navigate = useNavigate();

    // State for the form
    const [formData, setFormData] = useState({
        senderName: '',
        senderPhone: '',
        receiverName: '',
        receiverPhone: '',
        destination: 'Nakuru', // Default
        description: '',
        amount: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Generate a random Tracking ID (e.g., SAM-8842)
        const trackingId = 'SAM-' + Math.floor(1000 + Math.random() * 9000);

        // 2. Mock saving to DB (We will connect Laravel later)
        const newParcel = { ...formData, trackingId, status: 'In Transit', date: new Date().toLocaleDateString() };
        console.log("Parcel Booked:", newParcel);

        // 3. Alert and eventually print receipt
        alert(`Parcel Booked Successfully!\nTracking ID: ${trackingId}\n\n(Receipt printing will open next)`);

        // 4. Redirect back to Dashboard or stay to print
        navigate('/dashboard');
    };

    return (
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

                    {/* Parcel Details */}
                    <h3>Parcel Info</h3>
                    <select name="destination" onChange={handleChange} style={styles.input}>
                        <option value="Nakuru">Nakuru</option>
                        <option value="Nairobi">Nairobi</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Kisumu">Kisumu</option>
                    </select>

                    <textarea name="description" placeholder="Parcel Description (e.g., Box of Shoes)" onChange={handleChange} required style={styles.textarea} />

                    <input name="amount" type="number" placeholder="Amount Paid (KES)" onChange={handleChange} required style={styles.input} />

                    <button type="submit" style={styles.button}>Book & Generate Receipt</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: { padding: '2rem', backgroundColor: '#f4f6f8', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' },
    card: { backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '600px' },
    form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    row: { display: 'flex', gap: '10px' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
    textarea: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '80px' },
    button: { padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }
};

export default BookParcel;