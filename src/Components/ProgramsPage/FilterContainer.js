import FilterElement from "./FilterElement"
const FilterContainer = () => {
    return (
        <div className="filter-container">
            <div className="filter-container-wrapper">
                <h2>Rastos 31 programos</h2>
                <FilterElement
                    labetText="Tema"
                    selectName="theme">
                    <option value="" selected="selected">Visos</option>
                    <option value="testavimas">Testavimas</option>
                    <option value="programavimas">Programavimas</option>
                    <option value="dizainas">Dizainas</option>
                    <option value="duomenys">Duomenys</option>
                    <option value="rinkodara">Rinkodara</option>
                </FilterElement>
                <FilterElement
                    labetText="Vieta"
                    selectName="city">
                    <option value="" selected="selected">Visos</option>
                    <option value="online">Online</option>
                    <option value="vilnius">Vilnius</option>
                    <option value="kaunas">Kaunas</option>
                    <option value="klaipeda">Klaipėda</option>
                </FilterElement>
                <FilterElement
                    labetText="Tipas"
                    selectName="type">
                    <option value="" selected="selected">Visi</option>
                    <option value="pradedanciu-kursai">Pradedančių kursai</option>
                    <option value="pazengusiu-studijos">Pažengusių studijos</option>
                    <option value="1-2-lygis">1 + 2 lygis</option>
                    <option value="studijos-101">Studijos 101</option>
                    <option value="finansuojama-uzt">Finansuojama UŽT</option>
                    <option value="nemokamos-studijos">Nemokamos studijos</option>
                </FilterElement>
                <FilterElement
                    labetText="Laikas"
                    dayCheckboxText={true}
                    nightCheckboxText={true}
                >
                </FilterElement>
                <FilterElement
                    labetText="Laikas"
                    button={true}>
                </FilterElement>
            </div>
        </div>
    )
}
export default FilterContainer