import Wrapper from "../Wrapper"
import FooterLogo from "./Components/FooterLogo"
import FooterWidgets from "./Components/FooterWidgets"
import FooterInfo from "./Components/FooterInfo"
import FooterCertificates from "./Components/FooterCertificates"

const Footer = () => {
    return (
        <footer className="footer-container">
            <Wrapper>
                <FooterLogo></FooterLogo>
                <FooterWidgets></FooterWidgets>
                <FooterInfo></FooterInfo>
                <FooterCertificates></FooterCertificates>
            </Wrapper>
            <div className="footer-decoration footer-container-wrapper">
                <img 
                alt=""
                src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/footer.svg">
                </img>
            </div>
        </footer>
    )
}
export default Footer