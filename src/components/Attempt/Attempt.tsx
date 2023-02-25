import "./Attempt.css";
import { inputStyles } from "../../types";

interface AttemptProps {
  style: inputStyles[];
  id: number;
}

const Attempt = ({ id, style }: AttemptProps) => {
  const idStr = JSON.stringify(id);
  return (
    <div className="letters-container" id={idStr}>
      <input
        type="text"
        name={`${id}-letter-1`}
        id={`${id}-letter-1`}
        maxLength={1}
        className={`initial ${style[0]}`}
      />
      <input
        type="text"
        name={`${id}-letter-2`}
        id={`${id}-letter-2`}
        maxLength={1}
        className={`initial ${style[1]}`}
      />
      <input
        type="text"
        name={`${id}-letter-3`}
        id={`${id}-letter-3`}
        maxLength={1}
        className={`initial ${style[2]}`}
      />
      <input
        type="text"
        name={`${id}-letter-4`}
        id={`${id}-letter-4`}
        maxLength={1}
        className={`initial ${style[3]}`}
      />
      <input
        type="text"
        name={`${id}-letter-5`}
        id={`${id}-letter-5`}
        maxLength={1}
        className={`initial ${style[4]}`}
      />
    </div>
  );
};

export default Attempt;
