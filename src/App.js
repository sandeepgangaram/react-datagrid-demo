import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import axios from "axios";

const countInState = function (state, arr) {
  let count = 0;
  arr.forEach((el) => {
    el.state === state && count++;
  });
  return count;
};
const App = () => {
  const [entries, setEntries] = useState([]);
  useEffect(async () => {
    const data = await axios.get("https://api.openbrewerydb.org/breweries");
    const dataArr = data.data.map((el, _, arr) => {
      const { id, name, city, phone, state } = el;
      return { id, name, city, phone, state, count: countInState(state, arr) };
    });

    setEntries(dataArr);
  }, []);
  return (
    <>
      <h1>Open Brewery Data</h1>
      <Table entries={entries} />
    </>
  );
};

export default App;
