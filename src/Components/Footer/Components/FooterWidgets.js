import FooterWidget from "./FooterWidget"
import { ReactComponent as Instagram } from '../../../Image/instagram.svg';
import { ReactComponent as Facebook } from '../../../Image/facebook.svg';
import { ReactComponent as Linkedin } from '../../../Image/linkedin.svg';
const FooterWidgets = () => {
    return (
        <div className="footer-widgets">
            <FooterWidget className="footer-widget-left">
                <li className="Meniu-choice"><a href="./#">Jei galiu aš – gali ir tu!</a></li>
                <li className="Meniu-choice"><a href="./#">Studentams</a></li>
                <li className="Meniu-choice"><a href="./#">Verslui</a></li>
                <li className="Meniu-choice"><a href="./#">Programos</a></li>
                <li className="Meniu-choice"><a href="./#">Nemokamos Studijos</a></li>
                <li className="Meniu-choice"><a href="./#">UŽT kursai</a></li>
                <li className="Meniu-choice"><a href="./#">Programavimo kalbos</a></li>
                <li className="Meniu-choice"><a href="./#">Apie mus</a></li>
                <li className="Meniu-choice"><a href="./#">Naujienos</a></li>
                <li className="Meniu-choice"><a href="./#">ES parama</a></li>
                <li className="Meniu-choice"><a href="./#">Kontaktai</a></li>
            </FooterWidget>
            <FooterWidget className="footer-widget-center" title="vilnius">
                <li className="Meniu-choice"><a href="./#">Saulėtekio al. 15,
                    Vilnius</a></li>
                <li className="Meniu-choice"><a href="./#">Antakalnio g. 17,
                    Vilnius</a></li>
            </FooterWidget>
            <FooterWidget className="footer-widget-right">
                <li><a href="https://www.instagram.com/codeacademy.lt" className="instagram" title="Instagram">
                <Instagram/></a></li>
                <li>
                    <a href="https://www.facebook.com/codeacademy.lt" className="facebook" title="Facebook"><Facebook/></a>
                </li>
                <li><a href="https://www.linkedin.com/school/codeacademy.lt/" className="linkedin" title="Linkedin"><Linkedin/></a></li>
            </FooterWidget>
        </div>
    )
}
export default FooterWidgets