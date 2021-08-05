import { SettingsValueActionType } from "./settings-reducer";

const counterInitialState = {
  countValue: 0,
  displayValue: "0"
};

type ActionsType =
  | IncValueActionType
  | ResetCounterValueActionType
  | SettingsValueActionType;

export type CounterInitialStateType = typeof counterInitialState;

export const counterReducer = (
  state: CounterInitialStateType = counterInitialState,
  action: ActionsType
): CounterInitialStateType => {
  switch (action.type) {
    case "INC-COUNTER-VALUE":
      return { ...state, countValue: state.countValue + 1 };
    case "RESET-COUNTER-VALUE":
      return { ...state, countValue: action.startValue };
    case "SET-SETTINGS-VALUES":
      return { ...state, countValue: action.startValue };
    default:
      return state;
  }
};

export const IncCounterValueAC = () => ({
  type: "INC-COUNTER-VALUE" as const
});

export type IncValueActionType = ReturnType<typeof IncCounterValueAC>;

export const ResetCounterValueAC = (startValue: number) => ({
  type: "RESET-COUNTER-VALUE" as const,
  startValue
});

export type ResetCounterValueActionType = ReturnType<
  typeof ResetCounterValueAC
>;
