import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Counter } from './Counter';

export type ButtonType = {
  id: string;
  btnName: string;
  isDisabled: boolean;
  func: () => void;
};

function App() {
  const [count, setCount] = useState<number>(0);
  let buttons: Array<ButtonType> = [
    {
      id: v1(),
      btnName: 'INC',
      isDisabled: false,
      func: function () {
        setCount(count + 1);
      },
    },
    {
      id: v1(),
      btnName: 'RESET',
      isDisabled: true,
      func: function () {
        setCount(0);
      },
    },
  ];

  return (
    <div className="App">
      <Counter count={count} buttons={buttons} />
    </div>
  );
}

export default App;
