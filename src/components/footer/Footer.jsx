
import './Footer.scss';

const Footer = () => {
    return (


        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="../../assets/logologopv.png" alt="" />
                    </div>
                    <p>Mindset Mastery is dedicated to helping individuals open up to their highest potential.</p>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <h3 style={{ fontFamily: 'Kanit, sans-serif' }}>Q-links</h3>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="footer-course">
                        <h3 style={{ fontFamily: 'Kanit, sans-serif' }}>Courses</h3>
                        <a href="#">Unlock Your Full Potential</a>
                        <a href="#">Positive Mindser Mastery</a>
                        <a href="#">Personal Growth and Success</a>
                        <a href="#">Purposeful Living</a>
                    </div>
                    <div className="footer-address">
                        <h3 style={{ fontFamily: 'Kanit, sans-serif' }}>Connect with Us</h3>
                        <p>Address: 123 Main Street, City</p>
                        <p>Phone: +1-123-456-7890</p>
                        <p>Email: contact@example.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                &copy; 2023 Your Website Name. All rights reserved.
            </div>
        </div>

    );
};

export default Footer;
