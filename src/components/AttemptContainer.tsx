import { useState, useRef } from "react";
import Attempt from "./Attempt";

interface AttemptContainerState {
  values: string[];
  activeInput: string;
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

  const submitRef = useRef<HTMLButtonElement>(null);

  const handleNewValue = (value: string): void => {
    checkValue(value);
    setValues([...values, value]);
  };

  const handleSubmit = () => {
    if (submitRef.current) {
      submitRef.current.click();
    }
  };

  return (
    <div style={styles.div}>
      <Attempt
        onNewValue={handleNewValue}
        submitRef={submitRef}
        result={result}
        id={0}
        key={0}
      />
      <button onClick={handleSubmit}>Enviar</button>
      <p>{values}</p>
    </div>
  );
};

export default AttemptContainer;
