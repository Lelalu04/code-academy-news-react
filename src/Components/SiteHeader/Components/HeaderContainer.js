import MainLogo from "./MainLogo/MainLogo";
import NavPrimary from "./NavPrimary/NavPrimary";
import HeaderCall from "./HeaderCall/HeaderCall";

const HeaderContainer = () => {
    
    return (
        <div className="header-container">
            <MainLogo></MainLogo>
            <NavPrimary></NavPrimary>
            <HeaderCall></HeaderCall>
        </div>
    )
}
export default HeaderContainer