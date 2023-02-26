import "./Attempt.css";
import { inputStyles } from "../../types";
import { useState } from "react";

interface AttemptProps {
  id: number;
  response: number[];
  attempt: number;
}

interface AttemptStates {
  styles: inputStyles[];
}

const Attempt = ({ id, response, attempt }: AttemptProps) => {
  const [style, setStyle] = useState<AttemptStates["styles"]>([]);

  const isCurrent = () => {
    return id === attempt;
  };

  const isNotCurrent = () => {
    return id !== attempt + 1;
  };

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

  const idStr = JSON.stringify(id);
  return (
    <div className="letters-container" id={idStr}>
      <input
        type="text"
        name={`${id}-letter-1`}
        id={`${id}-letter-1`}
        maxLength={1}
        className={`initial`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-2`}
        id={`${id}-letter-2`}
        maxLength={1}
        className={`initial`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-3`}
        id={`${id}-letter-3`}
        maxLength={1}
        className={`initial`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-4`}
        id={`${id}-letter-4`}
        maxLength={1}
        className={`initial`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-5`}
        id={`${id}-letter-5`}
        maxLength={1}
        className={`initial`}
        readOnly={isNotCurrent()}
      />
    </div>
  );
};

export default Attempt;
