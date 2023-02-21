import { useState, useEffect } from "react";

interface AttemptState {
  inputValue: string;
  disabled: boolean;
  attempts: number;
}

interface AttemptProps {
  id: number;
  onNewValue: (value: string) => void;
  submitRef: React.LegacyRef<HTMLButtonElement>;
  result: number[];
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    gap: "1rem",
    margin: "1rem 0",
  },
  inputDiv: {
    display: "flex",
    gap: "0.5rem",
  },
  input: {
    width: "3rem",
    height: "3rem",
    fontSize: "3rem" as const,
    textAlign: "center" as const,
    textTransform: "capitalize" as const,
  },
};

const Attempt = ({ id, onNewValue, submitRef, result }: AttemptProps) => {
  const [value, setValue] = useState<AttemptState["inputValue"]>("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewValue(value);
    setValue("");
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue((value) => value + evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} id={JSON.stringify(id)}>
      {/* <input type="hidden" name="value" value={value} /> */}
      <p>{result}</p>
      <div style={styles.inputDiv}>
        <input
          type="text"
          name="letter-1"
          id="letter-1"
          maxLength={1}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="letter-2"
          id="letter-2"
          maxLength={1}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="letter-3"
          id="letter-3"
          maxLength={1}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="letter-4"
          id="letter-4"
          maxLength={1}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="letter-5"
          id="letter-5"
          maxLength={1}
          onChange={handleChange}
          style={styles.input}
        />
      </div>
      <button
        type="submit"
        ref={submitRef}
        style={{ display: "none" }}></button>
    </form>
  );
};

export default Attempt;
