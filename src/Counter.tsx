import React from 'react';
import { ButtonType } from './App';
import { Button } from './Button';

type CounterPropsType = {
  count: number;
  buttons: Array<ButtonType>;
};

export const Counter: React.FC<CounterPropsType> = (props) => {
  let buttons = props.buttons.map((btn) => {
    return (
      <Button
        key={btn.id}
        name={btn.btnName}
        isDisabled={btn.isDisabled}
        func={btn.func}
        count={props.count}
      />
    );
  });
  return (
    <div className="counter">
      <div
        className="display"
        style={props.count === 5 ? { color: 'red' } : { color: 'black' }}
      >
        {props.count}
      </div>
      <div className="buttons">{buttons}</div>
    </div>
  );
};
