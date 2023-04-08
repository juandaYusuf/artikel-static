import React, { createContext, useState } from 'react'

const UserContext = createContext()

export const UserContextProvider = (props) => {
    const [artikelID, setArtikelID] = useState(0)

    return (
        <UserContext.Provider value={{
            artikelID,
            setArtikelID,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext