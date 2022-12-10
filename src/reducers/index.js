import logerReducer from './logerReducer'
import consultasReducer from './consultasReducer'

import { combineReducers } from 'redux'

const allReducer = combineReducers({
    logerReducer: logerReducer,
    consultasReducer: consultasReducer
})

export default allReducer