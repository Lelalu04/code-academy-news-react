const FooterWidget = (props) => {
    const title = props.title && <h2>{props.title}</h2>

    return (
        <div className={props.className}>
            {title}
            <section className="widget">
                <div className="meniu-container">
                    <ul className="meniu">{props.children}</ul>
                </div>
            </section>
        </div>
    )
}
export default FooterWidget