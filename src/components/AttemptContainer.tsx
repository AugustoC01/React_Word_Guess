import { useState, useRef } from "react";
import Attempt from "./Attempt";

interface AttemptContainerState {
  values: string[];
  attempt: number;
}

interface AttemptContainerProps {
  checkValue: (value: string) => void;
  result: [];
}

const styles = {
  div: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
};

const AttemptContainer = ({ checkValue, result }: AttemptContainerProps) => {
  const [values, setValues] = useState<AttemptContainerState["values"]>([]);
  const [attempt, setAttempt] = useState<AttemptContainerState["attempt"]>(0);
  // const submitRef = useRef<HTMLButtonElement>(null);

  const handleNewValue = (value: string): void => {
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

  const elements = [];
  for (let i = 0; i < 6; i++) {
    elements.push(<Attempt result={result} key={i} id={i} />);
  }

  return (
    // <div style={styles.div}>
    // {attempt}
    <form onSubmit={handleSubmit} style={styles.div}>
      {elements}
      <button type="submit">Enviar</button>
    </form>
    // <p>{values}</p>
    // </div>
  );
};

export default AttemptContainer;
