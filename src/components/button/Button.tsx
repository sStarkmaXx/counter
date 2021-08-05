import React, { Dispatch, SetStateAction } from "react";
import { CounterSettingsType } from "../../App";

type ButtonPropsType = {
  name: string;
  isDisabled: boolean;
  func: () => void | Dispatch<SetStateAction<CounterSettingsType>>;
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  return (
    <div className="button">
      <button onClick={props.func} disabled={props.isDisabled}>
        {props.name}
      </button>
    </div>
  );
};
