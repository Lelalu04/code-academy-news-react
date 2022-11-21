import Section from "./Section"
import TitleDescripsion from "../../Components/TitleDescripsion"

const MainLive = () => {
    return (
        <Section className="main-live">
            <TitleDescripsion
                titleText="CodeAcademy pulsas"
                descripsionText="Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌
                                Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝"/>
            <ul className="numbers">
                <li>
                    <div className="number countable">398</div>
                    <div className="description">Šiuo metu mokosi studentų</div>
                </li>
                <li>
                    <div className="number with-space">1359</div>
                    <div className="description">2021 m. baigė studentų</div>
                </li>
                <li>
                    <div className="number">80%</div>
                    <div className="description">Baigę Pažengusių studijas įsidarbino</div>
                </li>
                <li>
                    <div className="number small">Front-End</div>
                    <div className="description">Populiariausia programa</div>
                </li>
            </ul>
        </Section>
    )
}
export default MainLive