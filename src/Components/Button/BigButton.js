import { ReactComponent as Arrow } from '../../Image/arrow.svg';
import "./BigButton.css"
const BigButton = ({url,content}) => {
    return (
        <a href={url} className="button-big">
            {content}
            <Arrow/>
        </a>
    )
}
export default BigButton

