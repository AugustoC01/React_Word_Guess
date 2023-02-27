export type GameContextType = {
  result: number[];
  setResult: (value: number[]) => void;
  letters: AlphabetObject;
  setLetters: (value: AlphabetObject) => void;
  attempt: number;
  setAttempt: (value: any) => void;
  values: string[];
  setValues: (value: string[]) => void;
};
