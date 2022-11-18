import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: true}

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
