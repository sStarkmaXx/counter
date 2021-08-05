import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterInitialStateType } from "../../bll/counter-reducer";
import { InitialStateType, SettingsValueAC } from "../../bll/settings-reducer";
import { AppStateType } from "../../bll/store";
import { Button } from "../button/Button";

export const CounterSettings = () => {
  const settingsValues = useSelector<AppStateType, InitialStateType>(
    (state) => state.settings
  );

  const counter = useSelector<AppStateType, CounterInitialStateType>(
    (state) => state.counter
  );

  const dispatch = useDispatch();

  const [newMaxValue, setNewMaxValue] = useState<number>(
    settingsValues.maxValue
  );
  const [newStartValue, setNewStartValue] = useState<number>(
    settingsValues.startValue
  );

  function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    setNewMaxValue(Number(e.currentTarget.value));
  }

  function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
    setNewStartValue(Number(e.currentTarget.value));
  }
  function set() {
    dispatch(SettingsValueAC(newStartValue, newMaxValue));
  }

  let style: {} = { backgroundColor: "coral", border: "2px solid red" };
  newStartValue < 0 || newMaxValue <= newStartValue || (style = {});

  if (
    settingsValues.maxValue === newMaxValue &&
    settingsValues.startValue === newStartValue
  ) {
    counter.displayValue = String(counter.countValue);
  } else {
    if (newStartValue < 0 || newMaxValue <= newStartValue) {
      counter.displayValue = "Incorrect value!";
    } else if (newMaxValue > newStartValue) {
      counter.displayValue = "Please press 'SET'!";
    }
  }

  return (
    <div className="counter">
      <div className="inputs">
        <span>max value</span>
        <span>start value</span>
        <input
          type="number"
          onChange={onChangeMaxValue}
          value={newMaxValue}
          style={style}
        />

        <input
          type="number"
          onChange={onChangeStartValue}
          value={newStartValue}
          style={style}
        />
      </div>
      <div className="buttons">
        <Button
          name="SET"
          isDisabled={
            (settingsValues.maxValue === newMaxValue &&
              settingsValues.startValue === newStartValue) ||
            newStartValue < 0 ||
            newMaxValue <= newStartValue
          }
          func={set}
        />
      </div>
    </div>
  );
};
