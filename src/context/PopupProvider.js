import React, { createContext, useState } from 'react'

const PopupContext = createContext({})

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currPopup, setCurrPopup] = useState('')
    return (
        <PopupContext.Provider value={{ isOpen, setIsOpen, currPopup, setCurrPopup }}>
            {children}
        </PopupContext.Provider>
    )
}

export default PopupContext