export const fetchWord = async () => {
  // const url = "https://word-guess.onrender.com/";
  const url = "http://localhost:8080/";
  const res = await fetch(url);
  return await res.json();
};
