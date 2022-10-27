import React, { createContext, useState } from 'react'

const PopupContext = createContext({})

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <PopupContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </PopupContext.Provider>
    )
}

export default PopupContext