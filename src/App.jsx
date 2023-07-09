import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([]);

  const deleteHandler = (e) => {
    fetch(`https://64a964958b9afaf4844aa1e7.mockapi.io/data/${e.target.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    }).then(() => { fetchData() })
  }

  const fetchData = () => {
    fetch("https://64a964958b9afaf4844aa1e7.mockapi.io/data", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((value) => {
      value.json().then((response) => {
        setData(response);
      });
    });
  };

  useEffect(() => {
    
    fetchData();
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
            <tr id={client.id} key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.course}</td>
              <td>
                <button id={client.id} onClick={deleteHandler}>
                  מחק
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
