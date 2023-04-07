import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import Die from './Components/Die';
import Header from './Components/Header';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    // Mitt försök:
    // let newDice = dice;
    // newDice = newDice.filter(die => die.isHeld === true);
    // let newDiceNumber = newDice[0];
    // newDice = newDice.filter(die => die.number === newDiceNumber.number);
    
    // if (newDice.length === 10) {
    //   setTenzies(true);
    //   console.log('Winner!')
    // }

    // Bob Zirolls försök:
    const allHeld = dice.every(die => die.isHeld);
    const firstNumber = dice[0].number;
    const allSameNumber = dice.every(die => die.number === firstNumber);

    if (allHeld && allSameNumber) {
      setTenzies(true);
    }
    
  }, [dice])

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

    if (tenzies) {
      setTenzies(prevTenzies => !prevTenzies);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice(prevDice =>     
      prevDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld } : die)
    )
  }

  let dieElements = dice.map(die => <Die die={die} onClick={holdDice} key={die.id} />)

  return (
    <div className="App">
      {tenzies && <Confetti />}
      <main>
        <Header />
        <section className='die-container'>
          {dieElements}
        </section>
        <button className='roll-btn' onClick={rollDice}>{tenzies ? 'New game' : 'Roll'}</button>
      </main>
    </div>
  )
}

export default App;
