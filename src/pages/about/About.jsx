
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import './About.scss';

const About = () => {
    return (
        <>

            <div className='main-container-about'>
                <Navbar />
                <div className="content-wrapper">
                    <div className='about-container'>
                        <h1 style={{ fontFamily: 'Kanit, sans-serif' }}>About Us</h1>
                        <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '100' }}>
                            Welcome to our About Us page. At Carol Solvay, we are passionate about helping individuals open up to their highest potential.
                            Our journey began with a simple idea: to empower people to achieve their goals, develop a positive mindset, and overcome challenges.
                            With years of experience and a team of dedicated mentors, we are here to support you on your personal development journey.
                            Join us and unlock your true potential, achieve your dreams, and lead a more fulfilling life.
                        </p>
                    </div>
                    <div className='mentor'>
                        <h1 style={{ fontFamily: 'Kanit, sans-serif' }}>Meet Our Mentor</h1>
                        <div className="mentor-container">
                            <img src="../assets/carol.jpeg" alt="" />
                            <p style={{ fontFamily: 'Kanit, sans-serif', fontWeight: '300' }}>
                                <span>Carol Solvay</span> Carol Solvay is your dedicated Mindset Mastery Mentor, passionate
                                about helping individuals unlock their highest potential. With years of experience and a deep
                                commitment to personal development, Carol is here to guide and support you on your journey towards
                                a more fulfilling life.

                                Her journey began with a simple yet powerful idea: to empower people to achieve their dreams, develop
                                a positive mindset, and overcome lifes challenges. Carol brings a wealth of knowledge and a team of
                                dedicated mentors to help you succeed.

                                Join us at Carol Solvay, where youll have the opportunity to unlock your true potential, achieve your
                                goals, and lead a life filled with purpose. Let Carol be your guide on the path to personal growth and transformation.
                            </p>
                        </div>
                    </div>

                    <div className='about-bottom'>
                        <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>Welcome to a brighter future with Carol Solvay, where
                            your success and happiness are our top priorities.</h2>
                    </div>

                </div>

            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default About;
