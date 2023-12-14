import { createContext, useState } from 'react'

// este es el que consumimos
export const FiltersContext = createContext() // solo se crea una vez como un singleton

// este es el que da el acceso al constexto

// eslint-disable-next-line react/prop-types
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}