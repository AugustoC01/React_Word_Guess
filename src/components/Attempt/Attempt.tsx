import "./Attempt.css";
import { inputStyles } from "../../types";
import { Letter } from "../Letter/Letter";
import useGameContext from "../../Context/Context";

interface AttemptProps {
  id: number;
}

const Attempt = ({ id }: AttemptProps) => {
  // const [style, setStyle] = useState<AttemptStates["styles"]>([]);
  // const isCurrent = () => {
  //   return id === attempt;
  // };
  // const isNotCurrent = () => {
  //   return id !== attempt + 1;
  // };

  const { result, attempt } = useGameContext();

  const handleResult = (result: number[]): inputStyles[] => {
    // console.log("result::: ", result);
    let inputStyle = result.map((value) => {
      if (value === 1) return "correct";
      if (value === 0) return "maybe";
      return "incorrect";
    });
    // setStyle(inputStyle);
    return inputStyle;
  };

  const letters = new Array(5);
  return (
    <div className="letters-container">
      {[...letters].map((value, index) => {
        return (
          <Letter
            key={index}
            row={id}
            id={index}
            status={handleResult(result)[index]}
            attempt={attempt}
          />
        );
      })}
    </div>
  );
};

export default Attempt;
