import automataLogo from '../../assets/automata.png'
import "./Header.css"

function Header() {
    return (
      <>
        <header className='header'>
          <div className='header-icon'>
            <a href="https://automata.tech/" target="_blank" rel="noreferrer">
              <img src={String(automataLogo)} className="logo automata" alt="Automata logo"/>
            </a>
          </div>
          <h1>Frontend Exercise</h1>
          <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
        </header>
      </>
    )
  }
  
  export default Header