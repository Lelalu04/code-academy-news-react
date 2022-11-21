
const FilterElement = ({ children, labetText, selectName, dayCheckboxText,nightCheckboxText, button}) => {
    const label = labetText && <label>{labetText}</label>
    const selectElement = selectName && <select name={selectName}>
    {children}</select>
    const checkboxElement = dayCheckboxText && <div className="filter-element-checkbox">
    <span>Dienomis</span></div>
    const checkboxElement2 = nightCheckboxText && <div className="filter-element-checkbox">
    <span>Vakarais</span></div>
    const buttonElemenet = button && <button className="button-clear">Išvalyti</button>
    return (
        <div className="filter-element">
            {label}
            {selectElement}
            {checkboxElement}
            {checkboxElement2}
            {buttonElemenet}
            </div>
    )
}
export default FilterElement