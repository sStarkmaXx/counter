import React from 'react';
import { CounterSettingsType } from './App';
import { Button } from './Button';
import { Display } from './Display';

type CounterPropsType = {
  countSettings: CounterSettingsType;
  count: number;
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
