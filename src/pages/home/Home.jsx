import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import "../../styles.scss";
import CourseCard from "../../components/coursecard/CourseCard";
import Footer from '../../components/footer/Footer';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CarouselSlider from 'react-carousel-slider';


const Home = () => {


    // let data = {
    //     "autoSliding": {
    //         "items": [
    //             {
    //                 imgSrc: "../../../public/assets/u4.jpeg",
    //                 des: "I have transformed my life thanks to their guidance! - Jane Doe",

    //             },
    //             {
    //                 imgSrc: "../../../public/assets/u1.jpeg",
    //                 des: "I have achieved great success with their support and mentorship. - Brinda",

    //             },
    //             {
    //                 imgSrc: "../../../public/assets/u22.jpeg",

    //                 des: "Their programs have had a profound impact on my personal and professional life. - John Doe",

    //             },
    //             {
    //                 imgSrc: "../../../public/assets/u3.jpeg",

    //                 des: "I can't thank them enough for helping me reach my full potential. - Alice",

    //             },
    //         ]
    //     }
    // }

    // let manner = {
    //     autoSliding: { interval: "3s" },
    //     duration: "2s"
    // };

    // let buttonSetting = {
    //     placeOn: "middle-inside",
    //     hoverEvent: true,
    //     style: {
    //         left: {
    //             height: "50px",
    //             width: "50px",
    //             color: "#929393",
    //             background: "rgba(225, 228, 232, 0.8)",
    //             borderRadius: "50%"
    //         },
    //         right: {
    //             height: "50px",
    //             width: "50px",
    //             color: "#929393",
    //             background: "rgba(225, 228, 232, 0.8)",
    //             borderRadius: "50%"
    //         }
    //     }
    // };


    const courses = [
        {
            image: '../../../public/assets/a2.jpeg',
            title: ' Unlock Your Full Potential',
            description: 'Discover the secrets to unlocking your full potential and achieving your dreams with the guidance of Carol Solvay.',
        },
        {
            image: '../../../public/assets/a4.jpeg',
            title: 'Positive Mindset Mastery',
            description: 'Learn how to master a positive mindset and overcome lifes challenges with Carol Solvays expert mentorship.',
        },
        {
            image: '../../../public/assets/a3.jpeg',
            title: 'Personal Growth and Success',
            description: 'Join our course on personal growth and success, where Carol Solvay will guide you towards a more fulfilling life.',
        },
        {
            image: '../../../public/assets/a5.jpeg',
            title: 'Purposeful Living',
            description: 'Explore the path to purposeful living and find your true calling with the mentorship of Carol Solvay.',
        },
    ];
    return (
        <>

            <div className='main-container'>
                <Navbar />
                <div className="hero-section">
                    <div className="img">
                        <img src="../assets/h3.jpg" alt="" />
                    </div>
                    <div className="text-content">
                        <div className="subtext" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                            OPENING UP TO YOUR
                        </div>

                        <div className="main-text">
                            HIGHEST <br />
                            POTENTIAL
                        </div>

                        <div className="book-btn">
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>

                <div className="widget-section">
                    <div className="wid">
                        <img src="../../../public/assets/t1.png" alt="" />
                        <p>Mentors have over two decades of industry experience </p>
                    </div>
                    <div className="wid">
                        <img src="../../../public/assets/t2.png" alt="" />
                        <p>Offline classes & Hands on Experience</p>
                    </div>
                    <div className="wid">
                        <img src="../../../public/assets/t3.png" alt="" />
                        <p>Supportive Community and Networking</p>
                    </div>
                    <div className="wid">
                        <img src="../../../public/assets/t4.png" alt="" />
                        <p>Over 2000 students taught by mentors</p>
                    </div>
                </div>

                <div className="intro-section">
                    <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>Welcome to Mindset Mastery</h2>
                    <p style={{ fontWeight: '600' }}>
                        We are dedicated to helping you unlock your full potential and achieve your goals.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                    </p>
                </div>


                <div className="service-section">
                    <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>Explore our courses</h2>
                    <div className="course-cards">
                        {courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                image={course.image}
                                title={course.title}
                                description={course.description}
                            />
                        ))}
                    </div>

                </div>

                <div className="testimonials-section">
                    <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>Testimonials</h2>

                    {/* <CarouselSlider
                        slideItems={data.autoSliding.items}
                        manner={manner}
                        buttonSetting={buttonSetting}
                    /> */}
                    <div className="matrix">
                        <div className="matrix-cell">
                            <img src="../../../public/assets/u4.jpeg" alt="User" />
                            <p style={{ fontWeight: '600' }}>I have transformed my life thanks to their guidance! <br /> - Jane Doe</p>
                        </div>
                        <div className="matrix-cell">
                            <img src="../../../public/assets/u1.jpeg" alt="User" />
                            <p style={{ fontWeight: '600' }}>I have achieved great success with their support and mentorship.  <br /> - Brinda</p>
                        </div>
                        <div className="matrix-cell">
                            <img src="../../../public/assets/u22.jpeg" alt="User" />
                            <p style={{ fontWeight: '600' }}>Their programs have had a profound impact on my personal and professional life.  <br /> - John Doe</p>
                        </div>
                        <div className="matrix-cell">
                            <img src="../../../public/assets/u3.jpeg" alt="User" />
                            <p style={{ fontWeight: '600' }}>I cant thank them enough for helping me reach my full potential.  <br /> - Alice</p>
                        </div>
                    </div>

                </div>



            </div>
            <Footer />
        </>
    );
}

export default Home;












