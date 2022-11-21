
const New = ({ alt, src, testContent,spanClassName, spanTextContent }) => {
    const testContentBoolen = testContent && <h2>{testContent}</h2>
    return (
        <div className="newsArticle">
            <a
                href="https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/">
                <div className="news-image">
                    <img
                        alt={alt}
                        srcSet={src}>
                    </img>
                </div>
                <div className="news-descripsion">
                    <div className="news-text">{}
                        <span className={spanClassName}>{spanTextContent.toUpperCase()}</span>
                        {testContentBoolen}
                        <div className="news-date">2022-03-23
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default New