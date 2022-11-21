const PortalBlock = ({children, href, textContent}) => {
    return (

        <div className="portal-block">
            <div className="portal-block-inner">
            {children}
                <a href={href} className="button">{textContent}</a>
            </div>
        </div>
    )
}
export default PortalBlock