import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllMyDoubts =  () => {
  const [doubtHistory, setDoubtHistory] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:8080/api/doubts/all-doubts', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWExMWQ5ZTgwZWFlN2UyZWYwY2RjMWYiLCJpYXQiOjE3MDUwNTg5MzYsImV4cCI6MTcwNTE0NTMzNn0.KmjjcYrkPp4bmgA2Za41srmJGpmCKhprTWVc9ohkW1c',
      },
    })
    .then((response) => {
      setDoubtHistory(response.data);
    })
    .catch((error) => {
      console.error("here is the error"+error);
    });
  }, []); 
  console.log(doubtHistory);
  return (
    <div>
      <header>
        <h1>Doubt History</h1>
      </header>
      <main>
        <h2>Your Doubt History</h2>
        <ul>
          {doubtHistory.map((doubt, index) => (
            <li key={index}>
              {doubt.doubt} - {doubt.student}
            </li>
          ))}
        </ul> 
      </main>
    </div>
  );
};

export default AllMyDoubts;
