import React from 'react';

type ButtonPropsType = {
  name: string;
  isDisabled: boolean;
  func: () => void;
  count: number;
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  let isDisabled = props.isDisabled;
  if (props.count === 5) {
    isDisabled = !props.isDisabled;
  }
  return (
    <div className="button">
      <button onClick={props.func} disabled={isDisabled}>
        {props.name}
      </button>
    </div>
  );
};
