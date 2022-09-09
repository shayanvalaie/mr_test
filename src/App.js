import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContext } from "./DataContext";
import axios from "axios";

import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

function App() {
  // State Variables
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [q2, setQ2] = useState("");

  // Axios Api Call
  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  // Filtering/Searching function
  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  // Filtering/Searching Function Page 2
  function search2(rows) {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q2.toLowerCase()) > -1
      )
    );
  }

  return (
    <>
      <DataContext.Provider
        value={{
          q,
          setQ,
          q2,
          setQ2,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageOne data={search(data)} />} />
            <Route path="/pageTwo" element={<PageTwo data={search2(data)} />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
