import {createStore,combineReducers} from "redux";
import {counterReducer} from "./counter-reducer.ts";
import {startValueReducer} from "./start-value-reducer.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  startValue: startValueReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

type AppStoreType = typeof store;