import React, { ChangeEvent, useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Counter } from './Counter';
import { CounterSettings } from './CounterSettings';

export type CounterSettingsType = {
  maxValue: number;
  startValue: number;
};

function App() {
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
        count={count}
        reset={reset}
        inc={inc}
      />
    </div>
  );
}

export default App;
