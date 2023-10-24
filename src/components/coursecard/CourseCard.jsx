/* eslint-disable react/prop-types */

import './CourseCard.scss';

const CourseCard = ({ image, title, description }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default CourseCard;
