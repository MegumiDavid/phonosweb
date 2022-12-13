import logerReducer from './logerReducer'
import crfaReducer from './crfaReducer'

import { combineReducers } from 'redux'

const allReducer = combineReducers({
    logerReducer: logerReducer,
    crfaReducer: crfaReducer
})

export default allReducer