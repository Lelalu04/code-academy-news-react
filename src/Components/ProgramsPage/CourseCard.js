const CourseCard = ({ className, category, title, description, href, imageSrc, imageAlt, levelText, moonText }) => {
    return (
        <div className={className}>
            <a href={href}>
                <span className="course-card-label">{category}</span>
                <div className="course-card-image">
                    <img src={imageSrc} className="attachment-full size-full wp-post-image" alt={imageAlt} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul className="course-card-features">
                    <li className="icon-cap">{levelText}</li>
                    <li className="icon-moon">{moonText}</li>
                </ul>
            </a>
        </div>
    )
} 
export default CourseCard