import { useState } from "react";
import { AlphabetObject } from "./types";
import { getResult } from "./services/getResult";
import alphabet from "./Mock/alphabet.json";
import AttemptContainer from "./components/AttemptContainer";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";

function App() {
  const [result, setResult] = useState<[]>([]);
  const [letters, setLetters] = useState<AlphabetObject>(alphabet);

  const checkValue = async (value: string) => {
    try {
      const { result, letters } = await getResult(value);
      setResult(result);
      setLetters(letters);
      // console.log("result::: ", result);
      // console.log("letters::: ", letters);
    } catch (e) {
      console.log("e::: ", e);
    }
  };

  return (
    <div>
      <Word />
      <AttemptContainer checkValue={checkValue} result={result} />
      <Keyboard letters={letters} />
    </div>
  );
}

export default App;
