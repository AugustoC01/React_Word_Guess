import { useState } from "react";
import { AlphabetObject } from "./types";
import { getResult } from "./services/getResult";
import alphabet from "./Mock/alphabet.json";
import AttemptContainer from "./components/AttemptContainer/AttemptContainer";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";

function App() {
  const [result, setResult] = useState<[]>([]);
  // const [attempt, setAttempt] = useState<number>(0);
  const [letters, setLetters] = useState<AlphabetObject>(alphabet);

  const checkValue = async (value: string) => {
    try {
      const { result, letters } = await getResult(value);
      setResult(result);
      setLetters(letters);
      // setAttempt((value) => value + 1);
      // console.log("result::: ", result);
      // console.log("letters::: ", letters);
    } catch (e) {
      console.log("e::: ", e);
    }
  };

  return (
    <div>
      <Word />
      <AttemptContainer
        checkValue={checkValue}
        result={result}
        // attempt={attempt}
      />
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
