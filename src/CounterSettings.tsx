import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CounterSettingsType } from './App';
import { Button } from './Button';
import { IcomingDate } from './IcomingDate';

type CounterPropsType = {
  maxValue: number;
  startValue: number;
  countSettings: CounterSettingsType;
  setCountSettings: Dispatch<SetStateAction<CounterSettingsType>>;
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CounterSettings: React.FC<CounterPropsType> = (props) => {
  return (
    <div className="counter">
      <IcomingDate
        maxValue={props.maxValue}
        startValue={props.startValue}
        onChangeMaxValue={props.onChangeMaxValue}
        onChangeStartValue={props.onChangeStartValue}
      />
      <div className="buttons">
        <Button
          name="SET"
          isDisabled={
            props.countSettings.maxValue === props.maxValue &&
            props.countSettings.startValue === props.startValue
              ? true
              : props.maxValue <= props.startValue
          }
          func={() =>
            props.setCountSettings({
              maxValue: props.maxValue,
              startValue: props.startValue,
            })
          }
        />
      </div>
    </div>
  );
};
