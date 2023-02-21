import { ApiResponse } from "../types";

export const getResult = (value: string): Promise<ApiResponse> => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url = "http://localhost:8080";

  const word = value.toUpperCase();
  const raw = JSON.stringify({
    value: word,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(url, requestOptions).then((res) => res.json());
};
