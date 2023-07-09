import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://64a964958b9afaf4844aa1e7.mockapi.io/data", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((value) => {
      value.json().then((response) => { setData(response); })
    });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>שם</th>
            <th>אימייל</th>
            <th>טלפון</th>
            <th>קורס</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
