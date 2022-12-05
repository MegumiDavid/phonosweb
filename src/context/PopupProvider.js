import React, { createContext, useState } from 'react'

const PopupContext = createContext({})

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currPopup, setCurrPopup] = useState('')
    const [currPacienteToken, setCurrPacienteToken] = useState('')
    const [isChange, setIsChange] = useState(false)
    return (
        <PopupContext.Provider value={{ isOpen, setIsOpen, currPopup, setCurrPopup, currPacienteToken, setCurrPacienteToken, isChange, setIsChange }}>
            {children}
        </PopupContext.Provider>
    )
}

export default PopupContext