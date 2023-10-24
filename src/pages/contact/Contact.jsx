import ContactForm from '../../components/contactform/ContactForm';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './Contact.scss';

const Contact = () => {
    return (
        <>

            <div className='main-container-contact'>
                <Navbar />
                <div className="content-contact">
                    <h1 style={{ fontFamily: 'Kanit, sans-serif' }}>Contact Us</h1>
                    <div className="contact-content">
                        <div className="left-content">
                            <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>
                                If you have any questions or need further information, please do not hesitate to contact us. <br /> We are here to help you open up to your highest potential.
                            </p>
                            <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>
                                You can reach out to us through the following channels:
                            </p>
                            <div className="contact-info">
                                <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>Email: contact@example.com</p>
                                <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>Phone: +1-123-456-7890</p>
                                <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>Address: 123 Main Street, City</p>
                            </div>
                            <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>
                                Whether you have inquiries about our services, want to schedule a consultation, or need any assistance, we are here to support you on your journey to personal growth and success.
                            </p>
                        </div>
                        <div className="right-content">
                            <div className="contact-form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
            <Footer />
            </div>
            
        </>
    );
}

export default Contact;



