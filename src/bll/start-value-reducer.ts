const startValueInitialState = {
  countValue: 0
}

type InitialStateType = typeof startValueInitialState

export const startValueReducer = (state: InitialStateType = startValueInitialState, action):InitialStateType => {
  return state;
}