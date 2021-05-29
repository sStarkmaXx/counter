import React from 'react';
import { CounterSettingsType } from './App';
import { Button } from './Button';
import { Display } from './Display';

type CounterPropsType = {
  maxValue: number;
  startValue: number;
  countSettings: CounterSettingsType;
  count: number | string;
  reset: () => void;
  inc: () => void;
};

export const Counter: React.FC<CounterPropsType> = (props) => {
  let countValue: string | number = 0;
  function setcountValue() {
    if (
      props.countSettings.maxValue === props.maxValue &&
      props.countSettings.startValue === props.startValue
    ) {
      countValue = props.count;
    } else {
      if (props.maxValue > props.startValue) {
        countValue = "enter values end press 'set'";
      } else {
        countValue = 'Incorrect value!';
      }
    }
  }
  setcountValue();
  return (
    <div className="counter">
      <Display count={countValue} maxValue={props.countSettings.maxValue} />
      <div className="buttons">
        <Button
          name="INC"
          isDisabled={props.count === props.countSettings.maxValue}
          func={props.inc}
        />
        <Button
          name="RESET"
          isDisabled={props.count === props.countSettings.startValue}
          func={props.reset}
        />
      </div>
    </div>
  );
};
