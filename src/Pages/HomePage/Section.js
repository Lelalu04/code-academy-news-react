import Wrapper from "../../Components/Wrapper"
const Section = ({className, children}) => {
    return (

        <section className={className}>
        <Wrapper>
            {children}
        </Wrapper>
    </section>
    )
}
export default Section