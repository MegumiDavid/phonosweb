import logerReducer from './logerReducer'

import { combineReducers } from 'redux'

const allReducer = combineReducers({
    logerReducer: logerReducer
})

export default allReducer