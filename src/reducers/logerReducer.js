// REDUCER
const logerReducer = ( state={ loged: false, accessToken: '' }, action) => {
	switch(action.type) {
		case "loginSetter":
			return { 
				loged: true, 
				accessToken: action.payload,	
			 }
		case "logoutSetter":
			return { loged: false, currCrfa: '' }
		default:
			return state
	}
}

export default logerReducer