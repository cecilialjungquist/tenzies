
import { useState } from 'react';
import './App.css'
import Die from './Components/Die'

function App() {
  const [dice, setDice] = useState(allNewDice());
  
  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      let newNumber = Math.ceil(Math.random() * 6);
      newDice[i] = newNumber;
    }
    return newDice;
  }

  function rollDice() {
    setDice(prevDice => allNewDice());
  }

  let dieElements = dice.map((number, i) => <Die number={number} key={i} />)

  return (
    <div className="App">
      <main>
        <section className='die-container'>
          {dieElements}
        </section>
        <button className='roll-btn' onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}

export default App
