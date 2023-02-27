import useGameContext from "../Context/Context";
import { LetterObject } from "../types";

const style = {
  disabledBtn: {
    backgroundColor: "red",
  },
};

const Keyboard = () => {
  const { letters } = useGameContext();

  let buttonList = letters.map((value: LetterObject, index: number) => {
    if (value.status === -1) {
      return (
        <button key={index} style={style.disabledBtn}>
          {value.letter}
        </button>
      );
    }
    return <button key={index}>{value.letter}</button>;
  });

  return <div>{buttonList}</div>;
};

export default Keyboard;
