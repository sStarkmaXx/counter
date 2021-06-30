import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Counter } from './Counter';
import { CounterSettings } from './CounterSettings';
import { AppStateType } from './bll/storage';
import { incCounterValueAC } from './bll/counter-reducer';

export type CounterSettingsType = {
  maxValue: number;
  startValue: number;
};

function App() {
  const countValueRedux = useSelector<AppStateType, number>(
    (state) => state.counter.countValue
  );
  const dispatch = useDispatch();
  const incRedux = () => {
    dispatch(incCounterValueAC());
  };

  const [maxValue, setMaxValue] = useState<number>(1);
  const [startValue, setStartValue] = useState<number>(0);
  const [count, setCount] = useState<number>(startValue);
  const [countSettings, setCountSettings] = useState<CounterSettingsType>({
    maxValue: maxValue,
    startValue: startValue,
  });

  function reset() {
    setCount(startValue);
  }

  function inc() {
    setCount(count + 1);
  }

  function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
    setMaxValue(parseInt(e.currentTarget.value));
  }

  function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
    setStartValue(parseInt(e.currentTarget.value));
  }

  function set() {
    setCount(startValue);
    setCountSettings({ maxValue: maxValue, startValue: startValue });
  }

  let countValue: string | number = count;

  if (
    countSettings.maxValue === maxValue &&
    countSettings.startValue === startValue
  ) {
    countValue = count;
  } else {
    if (startValue < 0 || maxValue <= startValue) {
      countValue = 'Incorrect value!';
    } else if (maxValue > startValue) {
      countValue = "enter values end press 'set'";
    }
  }

  return (
    <div className="App">
      <CounterSettings
        maxValue={maxValue}
        startValue={startValue}
        countSettings={countSettings}
        set={set}
        onChangeMaxValue={onChangeMaxValue}
        onChangeStartValue={onChangeStartValue}
      />
      <Counter
        maxValue={maxValue}
        startValue={startValue}
        countSettings={countSettings}
        count={countValue}
        reset={reset}
        inc={inc}
      />
    </div>
  );
}

export default App;
