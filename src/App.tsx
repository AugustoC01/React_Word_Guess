import { getResult } from "./services/getResult";
import { GameContextProvider } from "./Context/Context";
import AttemptContainer from "./components/AttemptContainer/AttemptContainer";
import Keyboard from "./components/Keyboard";
import Word from "./components/Word";
import useGameContext from "./Context/Context";
import { GameContextType } from "./Context/types";

function App() {
  const { setResult, setLetters } = useGameContext() as GameContextType;

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
    <GameContextProvider>
      <Word />
      <AttemptContainer checkValue={checkValue} />
      <Keyboard />
    </GameContextProvider>
  );
}

export default App;
