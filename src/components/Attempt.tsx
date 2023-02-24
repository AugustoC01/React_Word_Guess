interface AttemptProps {
  result: number[];
  id: number;
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
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

const Attempt = ({ result, id }: AttemptProps) => {
  // const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   const data = setResponse(evt);
  //   onNewValue(data);
  // };

  // const setResponse = (evt: React.FormEvent<HTMLFormElement>) => {
  //   const form = evt.currentTarget;
  //   const formData = new FormData(form);
  //   const formValues = Object.fromEntries(formData.entries());
  //   return Object.values(formValues).join("");
  // };

  return (
    // <form onSubmit={handleSubmit} style={styles.form}>
    // <div style={styles.inputDiv} id={JSON.stringify(id)}>
    <>
      <p>{result}</p>
      <input
        type="text"
        name={`${id}-letter-1`}
        id={`${id}-letter-1`}
        maxLength={1}
        style={styles.input}
        value={id}
      />
      <input
        type="text"
        name={`${id}-letter-2`}
        id={`${id}-letter-2`}
        maxLength={1}
        style={styles.input}
        value={id}
      />
      <input
        type="text"
        name={`${id}-letter-3`}
        id={`${id}-letter-3`}
        maxLength={1}
        style={styles.input}
        value={id}
      />
      <input
        type="text"
        name={`${id}-letter-4`}
        id={`${id}-letter-4`}
        maxLength={1}
        style={styles.input}
        value={id}
      />
      <input
        type="text"
        name={`${id}-letter-5`}
        id={`${id}-letter-5`}
        maxLength={1}
        style={styles.input}
        value={id}
      />
    </>
  );
};

export default Attempt;
