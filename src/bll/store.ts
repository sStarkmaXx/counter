import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
import { settingsReducer } from "./settings-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
