import CourseCard from "./CourseCard"
const CourseContainer = () => {
    return (
        <div className="course-container">
            <CourseCard
            className="course-card card1"
            category="NAUJAS"
            title="„Salesforce“ CRM – pradedančių"
            description="Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis."
            href="./#"
            imageSrc="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg"
            imageAl=""
            levelText="1 lygis" 
            moonText="Vakarais" />
                        <CourseCard
            className="course-card card2"
            category="Finansuojama UŽT"
            title="Front-end Serverless (223002583)"
            description="Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio."
            href="./#"
            imageSrc="https://codeacademy.lt/wp-content/uploads/2021/03/Fron-End_dark-1.svg"
            imageAl=""
            levelText="1 lygis" 
            moonText="Dienomis" />
                          <CourseCard
            className="course-card card3"
            category="Finansuojama UŽT"
            title="Web dizaino (UX/UI) studijos (223002408)"
            description="Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį."
            href="./#"
            imageSrc="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg"
            imageAl=""
            levelText="1 + 2 lygis" 
            moonText="Dienomis" />
                           <CourseCard
            className="course-card card4"
            category="Finansuojama UŽT"
            title="Web dizaino (UX/UI) studijos (223002408)"
            description="Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį."
            href="./#"
            imageSrc="https://codeacademy.lt/wp-content/uploads/2021/05/UI_dark.svg"
            imageAl=""
            levelText="1 + 2 lygis" 
            moonText="Dienomis" />
                    </div>
    )
}
export default CourseContainer