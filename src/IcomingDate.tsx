import React, { ChangeEvent } from 'react';

export type IcomingDateType = {
  maxValue: number;
  startValue: number;
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const IcomingDate: React.FC<IcomingDateType> = (props) => {
  let style: {} = { backgroundColor: 'coral', border: '2px solid red' };
  props.startValue < 0 || props.maxValue <= props.startValue || (style = {});
  return (
    <div className="inputs">
      <span>max value</span>
      <span>start value</span>
      <input
        type="number"
        onChange={props.onChangeMaxValue}
        value={props.maxValue}
        style={style}
      />

      <input
        type="number"
        onChange={props.onChangeStartValue}
        value={props.startValue}
        style={style}
      />
    </div>
  );
};
