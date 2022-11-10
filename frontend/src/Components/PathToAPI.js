export const pathToApi =
  process.env.NODE_ENV !== "development"
    ? "https://ravintola.herokuapp.com/"
    : "http://localhost:8080/";
