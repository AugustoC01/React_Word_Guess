import { AlphabetObject } from "../types";

const style = {
  disabledBtn: {
    backgroundColor: "red",
  },
};

// interface KeyboardState {
//   lettersList: AlphabetObject;
// }

interface KeyboardProps {
  letters: AlphabetObject;
}

const Keyboard = ({ letters }: KeyboardProps) => {
  // const [letters, setLetters] = useState([]);

  // let alphabeth: {}[] = [];
  // const lettersValue = Object.values(letters);
  // lettersValue.forEach((obj) => {
  //   alphabeth.push(obj);
  // });
  let buttonList = letters.map((value, index) => {
    if (value.status == -1) {
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
