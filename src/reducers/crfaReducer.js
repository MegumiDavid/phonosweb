// REDUCER
const crfaReducer = ( state={ currCrfa: '' }, action) => {
	switch(action.type) {
		case "crfaLogin":
			return { currCrfa: action.payload }
		case "logoutCrfa":
			return { currCrfa: '' }
		default:
			return state
	}
}

export default crfaReducer