


// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/animals')
      .then(res => {
        setAnimals(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = animals.filter(animal => {
    return animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           animal.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
           animal.age.toString().includes(searchTerm);
  });

  return (
    <div className="App">
      <h1>Animal Adoption Website</h1>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search for an animal" />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        filteredAnimals.map(animal => {
          return (
            <div key={animal._id}>
              <h2>{animal.name}</h2>
              <p>{animal.breed}</p>
              <p>{animal.age} years old</p>
              <p>{animal.description}</p>
              <button onClick={() => axios.post(`http://localhost:5000/api/adopt/${animal._id}`)}>Adopt</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;