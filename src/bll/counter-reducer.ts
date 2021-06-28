const counterInitialState = {
  countValue: 0
}

type InitialStateType = typeof counterInitialState

export const counterReducer = (state:InitialStateType = counterInitialState, action: IncValueActionType):InitialStateType => {
  switch (action.type) {
    case 'INC-COUNTER-VALUE':
      return {...state, countValue: state.countValue+1}
    default:
      return state
  }
}

export const incCounterValueAC = () =>({
  type: 'INC-COUNTER-VALUE'
}as const)

export type IncValueActionType = ReturnType<typeof incCounterValueAC>