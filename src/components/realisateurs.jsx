import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Realisateurs() {
  const [realisateurs, setRealisateurs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/realisateurs/')
      .then(response => {
        setRealisateurs(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-white'>Liste des réalisateurs</h1>
      <ul>
        {realisateurs.map(realisateur => (
          <li className='text-danger' key={realisateur.id}>{realisateur.nom} {realisateur.prenom}</li>         
        ))}
      </ul>
      <button className="btn btn-primary">Valide</button>
    </div>
  );
}

export default Realisateurs;
