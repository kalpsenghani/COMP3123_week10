import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        termsAgreed: false
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="data-entry-form">
                <h2>Data Entry Form</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address1" placeholder="1234 Main St" value={formData.address1} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Province</label>
                        <select name="province" value={formData.province} onChange={handleChange}>
                            <option>Choose...</option>
                            <option>Alberta</option>
                            <option>British Columbia</option>
                            <option>Manitoba</option>
                            <option>New Brunswick</option>
                            <option>Ontario</option>
                            <option>Prince Edward Island</option>
                            <option>Quebec</option>
                            <option>Saskatchewan</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group terms">
                    <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} />
                    <label>Agree Terms & Condition?</label>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <h4>Submitted Data:</h4>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Full Name:</strong> {submittedData.fullName}</p>
                    <p><strong>Address:</strong> {submittedData.address1}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                    <p><strong>Province:</strong> {submittedData.province}</p>
                    <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );
}

export default App;
