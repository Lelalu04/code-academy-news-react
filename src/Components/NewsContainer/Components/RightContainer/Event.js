const Event = () => {
    return (
        <div className="event">
            <a href="./#">
                <div className="image-wrapper">
                    <img 
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png"></img>
                </div>
                <div className="content-wrapper">
                    <div className="data">
                        <div className="day">10</div>
                        <div className="month">Lap</div>
                    </div>
                    <span className="event-place">Online</span>
                    <h3 className="event-title">CodeAcademy Talents</h3>
                </div>
            </a>
        </div>
    )
}
export default Event