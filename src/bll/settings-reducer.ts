const startValueInitialState = {
  startValue: 0,
  maxValue: 1
};

export type InitialStateType = typeof startValueInitialState;

export const settingsReducer = (
  state: InitialStateType = startValueInitialState,
  action: SettingsValueActionType
): InitialStateType => {
  switch (action.type) {
    case "SET-SETTINGS-VALUES":
      return {
        ...state,
        startValue: action.startValue,
        maxValue: action.maxValue
      };
    default:
      return state;
  }
};

export const SettingsValueAC = (startValue: number, maxValue: number) =>
  ({
    type: "SET-SETTINGS-VALUES",
    startValue,
    maxValue
  } as const);

export type SettingsValueActionType = ReturnType<typeof SettingsValueAC>;
