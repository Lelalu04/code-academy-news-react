import CourseBannerWrapper from "../../Components/ProgramsPage/CourseBannerWrapper";
import ArchiveCourseMain from "../../Components/ProgramsPage/ArchiveCourseMain";
import "./CSS/ProgramPage.css"
const ProgramsPage = () => {
    return (
        <div className="container">
            <div className="wrap">
                <h1 className="title">Programos</h1>
                <CourseBannerWrapper/>
                <ArchiveCourseMain/>
            </div>
        </div>
    )
}
export default ProgramsPage;