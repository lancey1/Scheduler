import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    if (!replace) {
      setMode(newMode);
      return setHistory((history) => [...history, newMode]);
    }
    if (replace) {
      setMode(newMode);
    }
  }

  function back() {
    if (history.length > 1) {
      history.pop();
      return setMode(history[history.length - 1]);
    }
  }
  return {
    back,
    transition,
    mode,
  };
}
