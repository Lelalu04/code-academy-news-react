const TitleDescripsion = ({titleText, descripsionText}) => {
    // function title(key) {
    //     switch (key) {
    //         case `h1`:
    //             <h1>Verslui</h1>
    //             break;
    //         case `h2`:
    //             <h2>Verslui</h2>
    //             break;
    //         default:
    //             break;
    //     }
    // }
    return (
        <>
            {/* {title(`h2`)} */}
            <h2>{titleText}</h2>
            <div className="description">
                <p>{descripsionText}</p>
            </div>
        </>
    )
}
export default TitleDescripsion