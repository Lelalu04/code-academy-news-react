import Section from "./Section"
import PortalBlock from "./PortalBlock"
import TitleDescripsion from "../../Components/TitleDescripsion"

const BlockMain = () => {
    return (
        <Section className="block-main">
                    <div className="main-content">
                        <h1>Programuok savo ateitį!®</h1>
                        <div className="description">
                            <p>CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link </p>
                        </div>
                    </div>
                    <div className="portal">
                        <PortalBlock
                            href="https://codeacademy.lt/studentams/"
                            textContent="Sužinok daugiau">
                            <TitleDescripsion
                                titleText="Studentams"
                                descripsionText="Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!
                                Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai"/>
                        </PortalBlock>
                        <PortalBlock
                            href="https://codeacademy.lt/verslui/"
                            textContent="Sužinok daugiau">
                            <TitleDescripsion
                                titleText="Verslui"
                                descripsionText="Esame geriausias kompanijų draugas Edutech erdvėje.
                                Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo
                                kursai"/>
                        </PortalBlock>
                    </div>
            </Section>
    )
}
export default BlockMain