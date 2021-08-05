import React from "react";

type DisplayPropsType = {
  count: number | string;
  maxValue: number;
};

export const Display: React.FC<DisplayPropsType> = (props) => {
  return (
    <div
      className="display"
      style={
        props.count === props.maxValue || props.count === "Incorrect value!"
          ? { color: "red" }
          : { color: "black" }
      }
    >
      {props.count}
    </div>
  );
};
