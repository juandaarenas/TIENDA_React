import { Filters } from './Filters.jsx'

// eslint-disable-next-line react/prop-types
export function Header ({changeFilters}) {
    return (
        <header>
            <h1>Store Shop</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}