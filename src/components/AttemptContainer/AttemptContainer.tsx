import "./AttemptContainer.css";
import { useState } from "react";
import Attempt from "../Attempt/Attempt";
import { inputStyles } from "../../types";

interface AttemptContainerState {
  values: string[];
  attempt: number;
  inputStyle: inputStyles[];
}

interface AttemptContainerProps {
  checkValue: (value: string) => void;
  result: number[];
  // attempt: number;
}

const AttemptContainer = ({
  checkValue,
  result,
}: // attempt,
AttemptContainerProps) => {
  const [values, setValues] = useState<AttemptContainerState["values"]>([]);
  const [attempt, setAttempt] = useState<AttemptContainerState["attempt"]>(0);
  const [inputStyle, setInputStyle] = useState<
    AttemptContainerState["inputStyle"]
  >([]);

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
    const res = values.slice(5 * attempt, 5 * attempt + 5);
    console.log("res::: ", res);
    return res;
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = setResponse(evt);
    handleNewValue(data);
  };

  const handleResult = (result: number[]) => {
    let inputResult: inputStyles[];
    // console.log("result::: ", result);
    inputResult = result.map((value) => {
      if (value === 1) return "correct";
      else if (value === 0) return "maybe";
      else return "incorrect";
    });
    console.log("inputResult::: ", inputResult);
    return inputResult;
    // console.log("inputResult::: ", inputResult);
    // setInputStyle(inputResult);
  };

  const allStyles = [[], [], [], [], [], []];

  const inputs = new Array(6);

  return (
    <form onSubmit={handleSubmit}>
      {attempt}
      {/* {elements} */}
      {[...inputs].map((value, index) => {
        if (index === attempt - 1) {
          return (
            <Attempt key={index} id={index} style={handleResult(result)} />
          );
        } else {
          return <Attempt key={index} id={index} style={inputStyle} />;
        }
      })}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AttemptContainer;
