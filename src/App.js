import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Options from './Options';
import './App.css';

const URL = "http://www.boredapi.com/api"

function App() {
  const [random, setRandom] = useState("")
  const [amount, setAmount] = useState(1)

  const handleClick = () => {

    const criteria = "activity?participants="
    const address = URL + "/" + criteria + amount

    axios.get(address)
      .then((response) => {
        if (response.data.activity) {
          setRandom(response.data.activity)
        } else {
          setRandom("Aktiviteettiä ei löytynyt")
        }
      }).catch(error => {
        alert(error)
      })
  }


  useEffect(() => {
    handleClick()
  }, [])

  return (
    <>
      <h2>Hae satunnainen aktiviteetti</h2>
      <p>henkilömäärä:</p>
      <select value={amount} onChange={e => setAmount(e.target.value)}>
        <Options />
      </select>
      <button onClick={handleClick}>Hae</button>
      <output>{random}</output>
    </>
  );
}

export default App;




