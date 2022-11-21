import "./CSS/ProgramPage.css"
const ProgramsPage = () => {
    return (
        <div className="container">
        <div className="container-wrapper">
            <h1 className="title">Programos</h1>
            <div className="course-banner-wrapper">
                <a href="/#"><img src="https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-scaled.jpg" className="course-banner-large" alt="" loading="lazy" srcSet="https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-scaled.jpg 2400w, https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-300x21.jpg 300w, https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-1024x70.jpg 1024w, https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-768x53.jpg 768w, https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-1536x105.jpg 1536w, https://codeacademy.lt/wp-content/uploads/2021/05/Desktop_banner-2048x140.jpg 2048w" sizes="(max-width: 2400px) 100vw, 2400px"/></a>
            </div>
            <div className="archive-course-main">
                <div className="filter-container">
                <div className="filter-container-wrapper">
                    <h2>Rastos 31 programos</h2>
                    <div className="filter-element">
                        <label>Tema</label>
                        
                        <select name="theme">
                            <option value="" selected="selected">Visos</option>
                            <option value="testavimas">Testavimas</option>
                            <option value="programavimas">Programavimas</option>
                            <option value="dizainas">Dizainas</option>
                            <option value="duomenys">Duomenys</option>
                            <option value="rinkodara">Rinkodara</option>
                        </select>
                    </div>
                    <div className="filter-element">
                        <label>Vieta</label>
                        
                        <select name="city">
                            <option value="" selected="selected">Visos</option>
                                                        <option value="online">Online</option>
                                                        <option value="vilnius">Vilnius</option>
                                                        <option value="kaunas">Kaunas</option>
                                                        <option value="klaipeda">Klaipėda</option>
                                                    </select>
                    </div>
                    <div className="filter-element">
                        <label>Tipas</label>
                        <select name="type">
                            <option value="" selected="selected">Visi</option>
                                                        <option value="pradedanciu-kursai">Pradedančių kursai</option>
                                                        <option value="pazengusiu-studijos">Pažengusių studijos</option>
                                                        <option value="1-2-lygis">1 + 2 lygis</option>
                                                        <option value="studijos-101">Studijos 101</option>
                                                        <option value="finansuojama-uzt">Finansuojama UŽT</option>
                                                        <option value="nemokamos-studijos">Nemokamos studijos</option>
                                                    </select>
                    </div>
                    <div className="filter-element">
                        <label>Laikas</label>

                        <div className="filter-element-checkbox">
                            <span>
                                Dienomis
                            </span>
                        </div>
                        <div className="filter-element-checkbox">
                            <span>
                                Vakarais
                            </span>
                        </div>
                    </div>
                    <div className="filter-element">
                        <button className="button-clear">Išvalyti</button>
                    </div>
                </div>
                </div>
                <div className="course-container">
                    <div className="course-card card1">
                        <a href="/#">
                            <span className="course-card-label">NAUJAS</span>
                            <div className="course-card-image"><img src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" className="attachment-full size-full wp-post-image" alt=""/></div>
                            <h2>„Salesforce“ CRM – pradedančių</h2>
                            <p>„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
                            <ul className="course-card-features">
                                <li className="icon-cap">
                                1 lygis            </li>
                                <li className="icon-moon">Vakarais</li>        </ul>
                        </a>
                    </div>
                    <div className="course-card card2">
                        <a href="/#"> <span className="course-card-label">Finansuojama UŽT</span>        <div className="course-card-image"><img src="https://codeacademy.lt/wp-content/uploads/2021/03/Fron-End_dark-1.svg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" srcSet="https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg 260w, https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg 300w, https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg 1024w, https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg 626w" sizes="(max-width: 626px) 100vw, 626px"/></div>
                            <h2>Front-end Serverless (223002583)</h2>
                                    <p>Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.</p>
                                    <ul className="course-card-features">
                                <li className="icon-cap">
                                1 lygis            </li>
                                <li className="icon-sun">Dienomis</li>        </ul>
                        </a>
                    </div>
                    <div className="course-card card3">
                        <a href="/#"><span className="course-card-label">Finansuojama UŽT</span>        <div className="course-card-image"><img width="626" height="626" src="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" srcSet="https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 260w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 300w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 1024w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 626w" sizes="(max-width: 626px) 100vw, 626px"/></div>
                            <h2>Web dizaino (UX/UI) studijos (223002408)</h2>
                                    <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.</p>
                                    <ul className="course-card-features">
                                <li className="icon-cap"> <img src="icon.svg.svg" alt=""/>
                                1 + 2 lygis            </li>
                                <li className="icon-sun">Dienomis</li>        </ul></a>
                    </div>
                    <div className="course-card card4">
                        <a href="/#">  <span className="course-card-label">Finansuojama UŽT</span>        <div className="course-card-image"><img width="626" height="626" src="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg" className="attachment-full size-full wp-post-image" alt="" loading="lazy" srcSet="https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 260w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 300w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 1024w, https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg 626w" sizes="(max-width: 626px) 100vw, 626px"/></div>
                            <h2>Web dizaino (UX/UI) studijos (223002408)</h2>
                                    <p>Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.</p>
                                    <ul className="course-card-features">
                                <li className="icon-cap">
                                1 + 2 lygis            </li>
                                <li className="icon-sun">Dienomis</li>        </ul></a>
                    </div>
                    <div className="course-card card5"></div>
                    <div className="course-card card6"></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProgramsPage;