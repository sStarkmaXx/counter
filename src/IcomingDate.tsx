import React, { ChangeEvent } from 'react';

export type IcomingDateType = {
  maxValue: number;
  startValue: number;
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const IcomingDate: React.FC<IcomingDateType> = (props) => {
  return (
    <div className="inputs">
      <span>max value</span>
      <span>start value</span>
      <input
        type="number"
        onChange={props.onChangeMaxValue}
        value={props.maxValue}
      />

      <input
        type="number"
        onChange={props.onChangeStartValue}
        value={props.startValue}
      />
    </div>
  );
};
