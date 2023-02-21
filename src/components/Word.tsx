import { useEffect, useState } from "react";
import { fetchWord } from "../services/getWord";

const Word = () => {
  const [word, setWord] = useState();

  useEffect(() => {
    fetchWord().then((res) => setWord(res));
  }, []);

  return <p> {word} </p>;
};

export default Word;
