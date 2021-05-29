import React from 'react';

type DisplayPropsType = {
  count: number;
  maxValue: number;
};

export const Display: React.FC<DisplayPropsType> = (props) => {
  return (
    <div
      className="display"
      style={
        props.count === props.maxValue ? { color: 'red' } : { color: 'black' }
      }
    >
      {props.count}
    </div>
  );
};
