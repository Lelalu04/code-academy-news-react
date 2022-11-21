import RightNews from "./RightNews"
import Events from "./Events"
const RightContainer = () => {
    return (
        <div className="right-container">
            <h2 className="text-h">
                Podcastai ir radijo laidos
            </h2>
                <RightNews></RightNews>
                <Events></Events>
        </div>
    )
}
export default RightContainer