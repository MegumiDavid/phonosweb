export const loginSetter = (currCrfa) => {
    return {
        type: 'loginSetter',
        payload: currCrfa
    }
}

export const getConsultas = (currCrfa) => {
    return {
        type: 'getConsultas',
        payload: currCrfa
    }
}

export const logoutSetter = () => {
    return {
        type: 'logoutSetter'
    }
}