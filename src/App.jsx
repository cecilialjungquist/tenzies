
import './App.css'
import Die from './Components/Die'

function App() {

  return (
    <div className="App">
      <main>
        <section className='die-container'>
          <Die number={1} />
          <Die number={2} />
          <Die number={3} />
          <Die number={4} />
          <Die number={5} />
          <Die number={6} />
          <Die number={1} />
          <Die number={2} />
          <Die number={3} />
          <Die number={4} />
        </section>
      </main>
    </div>
  )
}

export default App
