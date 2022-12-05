import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        loged: false,
        crfa: ''
    })

    return (
        <AuthContext.Provider value={[ auth, setAuth ]}>
            {props.children}
        </AuthContext.Provider>
    )
}

// export default AuthContext