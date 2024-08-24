import { useState } from 'react'
import FriendsIcon from './components/FriendsIcon'
import GamepadIcon from './components/GamepadIcon'
import HomeIcon from './components/HomeIcon'
import PriseIcon from './components/PriseIcon'
import WalletIcon from './components/WalletIcon'


function App() {

  const [section, setSection] = useState('home')
  const [vibrator, setVibrator] = useState(false)

  const handleButtonClick = (newSection) => {
    window.Telegram.WebApp.HapticFeedback.selectionChanged()
    setSection(newSection)
  }

  return <>
    <div className="wrapper">
      <main className='content'>
        <h1>{vibrator ? setVibrator : null}</h1>
      </main>
      <header className='header container'>
        <nav className='navbar'>
          <ul className='navbar__list'>
            <li className='navbar__list-item'>
              <button
                className={section === 'home' ? 'active' : ''}
                onClick={() => handleButtonClick('home')}
              >
                <HomeIcon />
              </button>
              <span className={section === 'home' ? 'active' : ''}>PlayCoin</span>
            </li>
            <li className='navbar__list-item'>
              <button
                className={section === 'games' ? 'active' : ''}
                onClick={() => handleButtonClick('games')}
              >
                <GamepadIcon />
              </button>
              <span className={section === 'games' ? 'active' : ''}>Games</span>
            </li>
            <li className='navbar__list-item'>
              <button
                className={section === 'tasks' ? 'active' : ''}
                onClick={() => handleButtonClick('tasks')}
              >
                <div className="prise"></div>
                <PriseIcon />
              </button>
              <span className={section === 'tasks' ? 'active' : ''}>Tasks</span>
            </li>
            <li className='navbar__list-item'>
              <button
                className={section === 'wallet' ? 'active' : ''}
                onClick={() => handleButtonClick('wallet')}
              >
                <WalletIcon />
              </button>
              <span className={section === 'wallet' ? 'active' : ''}>Wallet</span>
            </li>
            <li className='navbar__list-item'>
              <button
                className={section === 'friends' ? 'active' : ''}
                onClick={() => handleButtonClick('friends')}
              >
                <FriendsIcon />
              </button>
              <span className={section === 'friends' ? 'active' : ''}>Friends</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </>
}


export default App