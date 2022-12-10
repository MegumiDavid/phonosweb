const getConsultas = async (action) => {
    const response = await fetch(`http://localhost:3000/agendamentos/${action}`)
    const data = await response.json()
    // setAllConsultas((prevState) => [...prevState, data])
    console.log(data)
    return data
  }

// REDUCER
const consultasReducer = async ( state={}, action) => {
	switch(action.type) {
		case "getConsultas":
			return await getConsultas(action.payload)
		default:
			return state
	}
}

export default consultasReducer