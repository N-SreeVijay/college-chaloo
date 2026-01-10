import React from 'react';

const ContactForm = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        onClose();
    };

    return (
        <div className="modal-overlay show" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>✕</button>

                {/* Left Side: Company Info */}
                <div className="contact-info-side">
                    <h2>Neuraltrix AI</h2>

                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div className="info-text">
                            <h4>Location</h4>
                            <p>VFSTR, N block, Guntur,<br />Andhra Pradesh, India</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">📧</div>
                        <div className="info-text">
                            <h4>Email Us</h4>
                            <p>info@neuraltrixai.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">📞</div>
                        <div className="info-text">
                            <h4>Call Us</h4>
                            <p>+91 8142438759</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form-side">
                    <h3>Reach Us</h3>
                    <p>Tell us how we can help you grow.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="input-group">
                            <label>What's on your mind?</label>
                            <textarea
                                placeholder="Write your message here..."
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" style={{ width: '100%', marginTop: '10px' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
