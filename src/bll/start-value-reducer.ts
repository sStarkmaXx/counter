const startValueInitialState = {
  countValue: 0,
};

type InitialStateType = typeof startValueInitialState;

export const startValueReducer = (
  state: InitialStateType = startValueInitialState,
  action: IncValueActionType
): InitialStateType => {
  return state;
};

export const incCounterValueAC = () =>
  ({
    type: 'INC-COUNTER-VALUE',
  } as const);

export type IncValueActionType = ReturnType<typeof incCounterValueAC>;
