import Podcast from './Podcast';

const RightNews = () => {
    return (
        <div className="right-news">
            <Podcast
                className="right-new new1"
                duration="7:55"
                descripsion="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas"
                data="2021-09-02">
            </Podcast>
            <Podcast
                className="right-new new2"
                duration="7:54"
                descripsion="Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“"
                data="2021-08-25"></Podcast>
            <Podcast
                className="right-new new3"
                duration="9:22"
                descripsion="Kaip gyvensime 2031-aisiais? 10 esminių prognozių"
                data="2021-08-18"></Podcast>
            <Podcast
                className="right-new new4"
                duration="8:32"
                descripsion="Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“"
                data="2021-08-11"></Podcast>
        </div>
    )
}
export default RightNews 