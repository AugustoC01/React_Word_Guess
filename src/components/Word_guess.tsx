import { useEffect, useState } from "react";
// import { fetchWord } from "../services/getWord";

export const WordGuess = () => {
  const [word, setWord] = useState();

  useEffect(() => {
    const fetchData = () => {
      // const url = "http://localhost:8080/";
      const url = "https://word-guess.onrender.com/";
      // const res = fetch(url).then((res) => res.json());
      // return res;
      const res = fetch(url, {
        method: "get",
        headers: new Headers({
          origin: "http://localhost:3000",
        }),
      });
      return res;
    };
    fetchData().then((res) => console.log(res));
    // setWord(newWord);
    // console.log("newWord::: ", newWord);
  }, []);

  return <p> {word} </p>;
};
