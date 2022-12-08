export const loginSetter = (currCrfa) => {
    return {
        type: 'loginSetter',
        payload: currCrfa
    }
}

export const logoutSetter = () => {
    return {
        type: 'logoutSetter'
    }
}