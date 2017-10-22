import { combineReducers } from 'redux'
import CollectionReducer from './reducer-collection'
import SketchReducer from './reducer-sketch'

const rootReducer = combineReducers({
  collections: CollectionReducer,
  sketches: SketchReducer
})

export default rootReducer
