import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IncCounterValueAC,
  ResetCounterValueAC
} from "../../bll/counter-reducer";
import { InitialStateType } from "../../bll/settings-reducer";
import { AppStateType } from "../../bll/store";
import { Button } from "../button/Button";
import { Display } from "../display/Display";

export const Counter = () => {
  const countValue = useSelector<AppStateType, number>(
    (state) => state.counter.countValue
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

  let displayValue: number | string = countValue;

  return (
    <div className="counter">
      <Display count={displayValue} maxValue={settingsValues.maxValue} />
      <div className="buttons">
        <Button
          name="INC"
          isDisabled={
            countValue === settingsValues.maxValue ||
            typeof displayValue === "string" ||
            settingsValues.startValue < 0
          }
          func={inc}
        />
        <Button
          name="RESET"
          isDisabled={
            displayValue === settingsValues.startValue ||
            typeof displayValue === "string"
          }
          func={reset}
        />
      </div>
    </div>
  );
};
