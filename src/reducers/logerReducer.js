// REDUCER
const logerReducer = ( state={ loged: false, currCrfa: '' }, action) => {
	switch(action.type) {
		case "loginSetter":
			return { loged: true, currCrfa: action.payload }
		case "logoutSetter":
			return { loged: false, currCrfa: '' }
		default:
			return state
	}
}

export default logerReducer