import "./AttemptContainer.css";
import { useState } from "react";
import Attempt from "../Attempt/Attempt";

interface AttemptContainerState {
  values: string[];
  attempt: number;
}

interface AttemptContainerProps {
  checkValue: (value: string) => void;
  result: number[];
  // attempt: number;
}

const AttemptContainer = ({ checkValue, result }: AttemptContainerProps) => {
  const [values, setValues] = useState<AttemptContainerState["values"]>([]);
  const [attempt, setAttempt] = useState<AttemptContainerState["attempt"]>(-1);

  const handleNewValue = (value: string) => {
    checkValue(value);
    setAttempt((value) => value + 1);
    setValues([...values, value]);
  };

  const setResponse = (evt: React.FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    const values = Object.values(formValues).join("");
    console.log("values::: ", values);
    console.log("attempt::: ", attempt);
    if (attempt >= 0) {
      const res = values.slice(5 * (attempt + 1));
      console.log("res::: ", res);
      return res;
    }
    return values;
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = setResponse(evt);
    handleNewValue(data);
  };

  const inputs = new Array(6);

  return (
    <form onSubmit={handleSubmit}>
      {attempt}
      {[...inputs].map((value, index) => {
        return (
          <Attempt key={index} id={index} response={result} attempt={attempt} />
        );
      })}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AttemptContainer;
