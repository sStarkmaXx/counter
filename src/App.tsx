import React from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { CounterSettings } from "./components/settings/CounterSettings";

export type CounterSettingsType = {
  newMaxValue: number;
  newStartValue: number;
};

function App() {
  return (
    <div className="App">
      <CounterSettings />
      <Counter />
    </div>
  );
}

export default App;
