const Podcast = (props) => {
    return (
        <div className={props.className}>
            <div className="top-container">
                <div className="image">
                    <img src="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png"
                        alt="" loading="lazy"
                        srcSet="https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-260x260.png 260w, https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design-300x300.png 300w, https://codeacademy.lt/wp-content/uploads/2021/04/Untitled-design.png 400w"
                        sizes="(max-width: 260px) 100vw, 260px"></img>
                </div>
                <div className="audio-time"> Trukmė: <span className="duration">{props.duration}</span>
                </div>
                <button className="play-pause"> <img
                    src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt=""></img></button>
            </div>
            <div className="news-descripsion">
                <h3>{props.descripsion}</h3>
                <div className="news-date">{props.data}
                </div>
            </div>
        </div>
    )
}
export default Podcast