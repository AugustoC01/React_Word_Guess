export type LetterObject = { letter: string; status: number };
export type AlphabetObject = LetterObject[];

export type ApiResponse = { result: []; letters: AlphabetObject };

export type inputStyles = "initial" | "correct" | "maybe" | "incorrect";
