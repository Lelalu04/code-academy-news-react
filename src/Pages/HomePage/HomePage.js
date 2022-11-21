import "./CSS/HomePage.css"
import BlockMain from "./BlockMain"
import MainLive from "./MainLive"

const HomePage = () => {
    return (
        <div className="main-container">
            <BlockMain></BlockMain>
            <MainLive></MainLive>
        </div>
    )
}
export default HomePage