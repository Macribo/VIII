import { combineReducers } from 'redux';
import reducer1 from './reducer1';
import itemsReducer from './itemsReducer';

export default combineReducers({
  reducer1: reducer1,
  itemsReducer: itemsReducer
});
