import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';
//import { startValueReducer } from './start-value-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  //startValue: startValueReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

type AppStoreType = typeof store;
