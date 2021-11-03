import { enableES5 } from 'immer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import list from '../Features/List/listSlice';

enableES5();

const rootReducer = combineReducers({
  list,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
