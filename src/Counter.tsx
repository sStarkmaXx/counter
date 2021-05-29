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
  return (
    <div className="counter">
      <Display count={props.count} maxValue={props.countSettings.maxValue} />
      <div className="buttons">
        <Button
          name="INC"
          isDisabled={
            props.count === props.countSettings.maxValue ||
            typeof props.count === 'string' ||
            props.startValue < 0
          }
          func={props.inc}
        />
        <Button
          name="RESET"
          isDisabled={
            props.count === props.countSettings.startValue ||
            typeof props.count === 'string'
          }
          func={props.reset}
        />
      </div>
    </div>
  );
};
