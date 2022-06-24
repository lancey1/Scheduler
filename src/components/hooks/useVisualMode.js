import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (newMode, replace = false) {
    if (replace) {
      setMode(newMode)
      const replaceHistory = [...history];
      replaceHistory[replaceHistory.length - 1] = mode;
      setHistory(replaceHistory);
    } if (!replace) {
      setMode(newMode);
      const newHistory = [...history];
      newHistory.push(newMode);
      setHistory(newHistory);
    }
  };

  function back() {
    const newHistory = [...history];
    newHistory.pop(mode);
    setHistory(newHistory);
    if (history.length > 1) {
      setMode(newHistory[(newHistory.length - 1)]);
    }
  };

  return {
    back,
    transition,
    mode,
  };
}
