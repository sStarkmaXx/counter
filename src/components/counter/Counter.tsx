import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterInitialStateType,
  IncCounterValueAC,
  ResetCounterValueAC
} from "../../bll/counter-reducer";
import { InitialStateType } from "../../bll/settings-reducer";
import { AppStateType } from "../../bll/store";
import { Button } from "../button/Button";
import { Display } from "../display/Display";

export const Counter = () => {
  const counter = useSelector<AppStateType, CounterInitialStateType>(
    (state) => state.counter
  );
  const settingsValues = useSelector<AppStateType, InitialStateType>(
    (state) => state.settings
  );
  const dispatch = useDispatch();

  function reset() {
    dispatch(ResetCounterValueAC(settingsValues.startValue));
  }

  function inc() {
    dispatch(IncCounterValueAC());
  }

  return (
    <div className="counter">
      <Display
        count={counter.displayValue}
        maxValue={settingsValues.maxValue}
      />
      <div className="buttons">
        <Button
          name="INC"
          isDisabled={
            counter.countValue === settingsValues.maxValue ||
            counter.displayValue === "Incorrect value!" ||
            counter.displayValue === "enter values end press 'set'" ||
            settingsValues.startValue < 0
          }
          func={inc}
        />
        <Button
          name="RESET"
          isDisabled={
            counter.countValue === settingsValues.startValue ||
            counter.displayValue === "Incorrect value!" ||
            counter.displayValue === "enter values end press 'set'"
          }
          func={reset}
        />
      </div>
    </div>
  );
};
