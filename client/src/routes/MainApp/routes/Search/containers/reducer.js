// import { combineReducers } from 'redux'
import Immutable from 'immutable'

import { CENTERS } from 'SRC/constants/action_const'

const initialState = Immutable.fromJS({
  centersList: [{
    location: { lat: 40.809322, lng: -73.9612294 },
    description: 'Center1'
  }]
})

/* eslint-disable arrow-body-style, no-unused-vars*/
const reducerMap = {
  [CENTERS.LOAD_NEIGH_CENTERS]: (state, action) => {
    return state.set('centersList', Immutable.fromJS(action.result.centersList))
  }
}

function search(state = initialState, action) {
  if (reducerMap[action.type]) {
    return reducerMap[action.type](state, action)
  }
  return state
}

export default search
