import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Die from './Components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());
  
  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      let newNumber = Math.ceil(Math.random() * 6);
      newDice[i] = {
        number: newNumber,
        isHeld: false,
        id: nanoid(),
      };
    }
    return newDice;
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => !die.isHeld ? {...die, id: nanoid(), number: Math.ceil(Math.random() * 6)} : die ))
  }

  function holdDice(id) {
    setDice(prevDice =>     
      prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld } : die)
    )
  }

  let dieElements = dice.map(die => <Die die={die} onClick={holdDice} key={die.id} />)

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
