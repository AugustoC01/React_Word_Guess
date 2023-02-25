import "./Attempt.css";
import { inputStyles } from "../../types";

interface AttemptProps {
  id: number;
  response: number[];
  attempt: number;
}

const Attempt = ({ id, response, attempt }: AttemptProps) => {
  const isBelowCurrent = () => {
    return id === attempt;
  };

  const isNotCurrent = () => {
    return id !== attempt;
  };

  const handleResult = (result: number[]) => {
    // console.log("result::: ", result);
    return result.map((value) => {
      if (value === 1) return "correct";
      if (value === 0) return "maybe";
      return "incorrect";
    });
  };

  const idStr = JSON.stringify(id);
  return (
    <div className="letters-container" id={idStr}>
      <input
        type="text"
        name={`${id}-letter-1`}
        id={`${id}-letter-1`}
        maxLength={1}
        className={`initial ${isBelowCurrent() && handleResult(response)[0]}`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-2`}
        id={`${id}-letter-2`}
        maxLength={1}
        className={`initial ${isBelowCurrent() && handleResult(response)[1]}`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-3`}
        id={`${id}-letter-3`}
        maxLength={1}
        className={`initial ${isBelowCurrent() && handleResult(response)[2]}`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-4`}
        id={`${id}-letter-4`}
        maxLength={1}
        className={`initial ${isBelowCurrent() && handleResult(response)[3]}`}
        readOnly={isNotCurrent()}
      />
      <input
        type="text"
        name={`${id}-letter-5`}
        id={`${id}-letter-5`}
        maxLength={1}
        className={`initial ${isBelowCurrent() && handleResult(response)[4]}`}
        readOnly={isNotCurrent()}
      />
    </div>
  );
};

export default Attempt;
