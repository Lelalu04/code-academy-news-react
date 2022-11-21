import LeftContainer from "../../Components/NewsContainer/Components/LeftContainer/LeftContainer"
import RightContainer from "../../Components/NewsContainer/Components/RightContainer/RightContainer"
import Wrapper from "../../Components/Wrapper"
const ContainerNews = () => {
    return (
        <Wrapper>
            <div className="container-news">
                <LeftContainer>
                </LeftContainer>
                <RightContainer></RightContainer>
            </div>
        </Wrapper>
    )
}
export default ContainerNews