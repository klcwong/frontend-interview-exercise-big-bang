import automataLogo from '../assets/automata.png'
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <div className='header-icon'>
          <a href="https://automata.tech/" target="_blank">
            <img src={String(automataLogo)} className="logo automata" alt="Automata logo"/>
          </a>
        </div>
        <h1>Frontend Exercise</h1>
        <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
      </header>
      <div className='test'>

      </div>
    </>
  )
}

export default App
