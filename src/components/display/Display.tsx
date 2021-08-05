import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";

export const Display = () => {
  const displayValue = useSelector<AppStateType, string>(
    (state) => state.counter.displayValue
  );
  const maxValue = useSelector<AppStateType, number>(
    (state) => state.settings.maxValue
  );
  return (
    <div
      className="display"
      style={
        Number(displayValue) === maxValue || displayValue === "Incorrect value!"
          ? { color: "red" }
          : { color: "black" }
      }
    >
      {displayValue}
    </div>
  );
};
