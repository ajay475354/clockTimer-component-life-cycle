import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('call constructor')
  }

  componentDidMount() {
    console.log('call did mount')
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('call unmount')
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    console.log('call render')
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
