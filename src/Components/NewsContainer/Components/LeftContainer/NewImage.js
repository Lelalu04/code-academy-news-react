const NewImage = ({src,alt}) => {
    return (
        <div className="news-image">
            <img
                alt={alt}
                srcSet={src}>
            </img>
        </div>
    )
}
export default NewImage