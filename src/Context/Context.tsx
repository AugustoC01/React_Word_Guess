import { useState, createContext, useContext } from "react";
import { AlphabetObject } from "../types";
import alphabet from "../Mock/alphabet.json";
import { GameContextType } from "./types";

interface GameContextProps {
  children: JSX.Element[];
}

interface GameContextState {
  result: number[];
  attempt: number;
  values: string[];
}

const GameContext = createContext<GameContextType>({} as GameContextType);
const useGameContext = () => useContext(GameContext);

export const GameContextProvider = ({ children }: GameContextProps) => {
  const [result, setResult] = useState<GameContextState["result"]>([]);
  const [letters, setLetters] = useState<AlphabetObject>(alphabet);
  const [attempt, setAttempt] = useState<GameContextState["attempt"]>(-1);
  const [values, setValues] = useState<GameContextState["values"]>([]);

  const value = {
    result,
    setResult,
    letters,
    setLetters,
    attempt,
    setAttempt,
    values,
    setValues,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default useGameContext;
