export const pathToApi =
  process.env.NODE_ENV !== "development"
    ? "https://ravintola.toadres.pl/api/"
    : "http://localhost:8080/api/";
