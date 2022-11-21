import New from "./New"
import "./LeftContainer.css"
import BigButton from "../../../Button/BigButton"
const LeftContainer = () => {
    return (
        <div className="left-container">
            <h1 className="text-h">Naujienos</h1>
            <div className="left-news">
                <New
                    spanClassName="category"
                    spanTextContent="Naujienos"
                    testContent="Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?"
                    src="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1024x994.jpg"
                    alt=""></New>

                <New
                    spanClassName="category"
                    spanTextContent="Naujienos"
                    testContent="„CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį"
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2021/11/120840956_3665630673483886_440856791753000379_n-1024x683.jpg">
                </New>
            </div>
            <div className="bottom-new">
                <New
                    spanClassName="category"
                    spanTextContent="Technologijų ritmu"
                    testContent="Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?"
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2021/09/pexels-tima-miroshnichenko-5428258-1024x692.jpg"></New>
                <New
                    spanClassName="category"
                    spanTextContent="Technologijų ritmu"
                    testContent="Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?"
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2021/09/mintosko-Ro0PNXcpCus-unsplash-1024x705.jpg"></New>
                <New
                    spanClassName="category"
                    spanTextContent="Technologijų ritmu"
                    testContent="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2021/09/image-1024x576.jpeg"></New>
                <New
                    spanClassName="category"
                    spanTextContent="Technologijų ritmu"
                    testContent="Kodėl technologijų milžinės skuba papildytosios realybės produktus diegti prekyboje?"
                    alt=""
                    src="https://codeacademy.lt/wp-content/uploads/2021/08/pexels-tima-miroshnichenko-6474485-1024x583.jpg"></New>
            </div>
            <BigButton url="https://codeacademy.lt/visos-naujienos/" content="Visos naujienos" />
        </div>
    )
}
export default LeftContainer