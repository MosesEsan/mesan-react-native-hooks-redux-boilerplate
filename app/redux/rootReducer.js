// Description: Root Reducer

import { combineReducers } from 'redux';

import { reducer as dataReducer } from "../modules/home/"

// Combine all the reducers
const rootReducer = combineReducers({ dataReducer });

export default rootReducer;