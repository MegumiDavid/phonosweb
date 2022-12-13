export const loginSetter = (accessToken) => {
    return {
        type: 'loginSetter',
        payload: accessToken
    }
}

export const crfaLogin = (currCrfa) => {
    return {
        type: 'crfaLogin',
        payload: currCrfa
    }
}

export const logoutSetter = () => {
    return {
        type: 'logoutSetter'
    }
}

/* export const tokenSetter = () => {
    return {
        type: 'tokenSetter'
    }
} */