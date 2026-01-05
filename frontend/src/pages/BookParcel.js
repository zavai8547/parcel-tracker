import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { jsPDF } from "jspdf";

function BookParcel() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        senderName: '',
        senderPhone: '',
        receiverName: '',
        receiverPhone: '',
        origin: 'Nairobi',
        destination: 'Nakuru',
        description: '',
        amount: '',
        additionalDetails: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const generateReceipt = (data, trackingId) => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("SAMPER CABS LOGISTICS", 20, 20);

        doc.setFontSize(12);
        doc.text("Official Payment Receipt", 20, 30);
        doc.line(20, 35, 190, 35);


        doc.setFontSize(16);
        doc.setTextColor(0, 123, 255);
        doc.text(`Tracking ID: ${trackingId}`, 20, 50);


        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);


        const startY = 70;
        const gap = 10;

        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, startY);
        doc.text(`From: ${data.origin}`, 20, startY + gap);
        doc.text(`To: ${data.destination}`, 20, startY + gap * 2);

        doc.text(`Sender: ${data.senderName} (${data.senderPhone})`, 20, startY + gap * 4);
        doc.text(`Receiver: ${data.receiverName} (${data.receiverPhone})`, 20, startY + gap * 5);

        doc.text(`Description: ${data.description}`, 20, startY + gap * 7);

        // Payment Box
        doc.setDrawColor(0);
        doc.setFillColor(230, 230, 230);
        doc.rect(120, 45, 70, 25, 'F');
        doc.setFontSize(14);
        doc.text("AMOUNT PAID", 125, 55);
        doc.setFontSize(18);
        doc.text(`KES ${data.amount}/=`, 125, 65);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("Thank you for shipping with Samper Cabs.", 20, 280);
        doc.text("Track your parcel at www.sampercabs.com", 20, 285);


        doc.save(`Receipt_${trackingId}.pdf`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const trackingId = 'SAM-' + Math.floor(1000 + Math.random() * 9000);


        generateReceipt(formData, trackingId);

        // 3. Alert and Redirect
        alert(`Parcel Booked! Receipt for ${trackingId} is downloading.`);
        navigate('/dashboard');
    };

    return (
        <DashboardLayout>
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
                        <div style={styles.row}>
                            <div style={{ flex: 1 }}>
                                <label style={styles.label}>Origin</label>
                                <select name="origin" onChange={handleChange} style={styles.input} value={formData.origin}>
                                    <option value="Nairobi">Nairobi</option>
                                    <option value="Nakuru">Nakuru</option>
                                    <option value="Mombasa">Mombasa</option>
                                </select>
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={styles.label}>Destination</label>
                                <select name="destination" onChange={handleChange} style={styles.input} value={formData.destination}>
                                    <option value="Nakuru">Nakuru</option>
                                    <option value="Nairobi">Nairobi</option>
                                    <option value="Mombasa">Mombasa</option>
                                </select>
                            </div>
                        </div>

                        {/* Details */}
                        <h3>Parcel Details</h3>
                        <textarea name="description" placeholder="Box of Shoes..." onChange={handleChange} required style={styles.textarea} />

                        <div style={styles.paymentRow}>
                            <input name="amount" type="number" placeholder="Amount (KES)" onChange={handleChange} required style={styles.input} />
                            <button type="submit" style={styles.button}>Book & Download Receipt 🖨️</button>
                        </div>

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
    paymentRow: { display: 'flex', gap: '10px', marginTop: '20px', alignItems: 'center' },
    label: { display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: '#555' },
    input: { flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' },
    textarea: { padding: '10px', borderRadius: '4px', border: '1px solid #ccc', height: '80px', fontFamily: 'inherit' },
    button: { flex: 1, padding: '12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }
};

export default BookParcel;