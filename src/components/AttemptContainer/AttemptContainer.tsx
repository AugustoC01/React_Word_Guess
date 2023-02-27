import "./AttemptContainer.css";
import useGameContext from "../../Context/Context";
import Attempt from "../Attempt/Attempt";

interface AttemptContainerProps {
  checkValue: (value: string) => void;
}

const AttemptContainer = ({ checkValue }: AttemptContainerProps) => {
  const { setAttempt, setValues, values, attempt } = useGameContext();

  const handleNewValue = (value: string) => {
    checkValue(value);
    setAttempt((attempt: number) => attempt + 1);
    setValues([...values, value]);
  };

  const setResponse = (evt: React.FormEvent<HTMLFormElement>) => {
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log("formValues::: ", formValues);
    const values = Object.values(formValues).join("");
    console.log("values::: ", values);
    console.log("attempt::: ", attempt);
    // if (attempt >= 0) {
    const res = values.slice(5 * (attempt + 1));
    console.log("res::: ", res);
    return res;
    // }
    // return values;
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = setResponse(evt);
    handleNewValue(data);
  };

  const rows = new Array(6);

  return (
    <form onSubmit={handleSubmit}>
      {attempt}
      {[...rows].map((value, index) => {
        return <Attempt id={index} />;
      })}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AttemptContainer;
