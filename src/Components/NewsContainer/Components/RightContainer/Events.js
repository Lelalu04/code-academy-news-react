import EventWrapper from "./EventWrapper"
import BigButton from "../../../Button/BigButton"
const Events = () => {
    return (
        <div className="events">
            <h2>Renginiai</h2>
            <EventWrapper></EventWrapper>
            <BigButton url="https://codeacademy.lt/event/" content="Daugiau" />
        </div>
    )
} 
export default Events