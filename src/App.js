import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vanillaQues: ['vanilla no. 1', 'vanilla no. 2', 'vanilla no. 3', 'vanilla no. 4', 'vanilla no. 5', 'vanilla no. 6', 'vanilla no. 7', 'vanilla no. 8', 'vanilla no. 9', 'vanilla no. 10', 'vanilla no. 11', 'vanilla no. 12', 'vanilla no. 13', 'vanilla no. 14', 'vanilla no. 15', 'vanilla no. 16', 'vanilla no. 17'],
      reactQues: ['react no. 1', 'react no. 2', 'react no. 3', 'react no. 4', 'react no. 5', 'react no. 6', 'react no. 7', 'react no. 8', 'react no. 9', 'react no. 10', 'react no. 11', 'react no. 12', 'react no. 13', 'react no. 14', 'react no. 15', 'react no. 16', 'react no. 17', 'react no. 18', 'react no. 19', 'react no. 20', 'react no. 21'],
      nodeQues: ['node no. 1', 'node no. 2', 'node no. 3', 'node no. 4', 'node no. 5', 'node no. 6', 'node no. 7', 'node no. 8', 'node no. 9', 'node no. 10', 'node no. 11', 'node no. 12', 'node no. 13', 'node no. 14', 'node no. 15', 'node no. 16', 'node no. 17', 'node no. 18', 'node no. 19', 'node no. 20', 'node no. 21', 'node no. 22', 'node no. 23', 'node no. 24', 'node no. 25'],
      csQues: ['cs no. 1', 'cs no. 2', 'cs no. 3', 'cs no. 4', 'cs no. 5', 'cs no. 6', 'cs no. 7', 'cs no. 8', 'cs no. 9', 'cs no. 10', 'cs no. 11', 'cs no. 12', 'cs no. 13', 'cs no. 14', 'cs no. 15', 'cs no. 16', 'cs no. 17', 'cs no. 18', 'cs no. 19', 'cs no. 20', 'cs no. 21', 'cs no. 22', 'cs no. 23', 'cs no. 24', 'cs no. 25', 'cs no. 26', 'cs no. 27', 'cs no. 28', 'cs no. 29'],
      
      topicSelected: '',
      topic: '',
      
      timerSeconds: 0,
      timerMinutes: 0,
      timerHour: 0,
      timerStopped: true,
      timeSelected: 0,
      stopWatch: 0,
    }
  
  }

  setTopic = (e) => {
    e.preventDefault();

    if(e.target.id == 1) {
      const randomNumber = Math.floor(Math.random() * (this.state.vanillaQues.length - 1))
      this.setState({
        topic: this.state.vanillaQues[randomNumber]
      })
    } else if (e.target.id == 2) {
      const randomNumber = Math.floor(Math.random() * (this.state.reactQues.length - 1))
      this.setState({
        topic: this.state.reactQues[randomNumber]
      })
    } else if (e.target.id == 3) {
      const randomNumber = Math.floor(Math.random() * (this.state.nodeQues.length - 1))
      this.setState({
        topic: this.state.nodeQues[randomNumber]
      })
    } else if (e.target.id == 4) {
      const randomNumber = Math.floor(Math.random() * (this.state.csQues.length - 1))
      this.setState({
        topic: this.state.csQues[randomNumber]
      })
    }
  }

  startTimer = (timeSelected) => {
    // e.preventDefault()
    this.setState({
      stopWatch: timeSelected
    })

    if(this.state.timerStopped) {
      this.timer = setInterval(() => {
        this.setState({
          timerStopped: false
        })
        this.setState({
          timerSeconds: this.state.timerSeconds + 1
        })
        if(this.state.timerSeconds >= 60) {
          this.setState({
            timerSeconds: 0,
            timerMinutes: this.state.timerMinutes + 1
          })
        }
        if(this.state.timerMinutes >= 60) {
          this.setState({
            timerMinutes: 0,
            timerHour: this.state.timerHour + 1
          })
        }
      }, 1000)
    }
  }

  componentDidUpdate() {
    if(this.state.timerStopped == false && this.state.timerSeconds == this.state.stopWatch) {
      clearInterval(this.timer)
      this.setState({
        timerStarted: false,
        timerStopped: true,
        timerSeconds: 0,
        timerMinutes: 0,
        timerHour: 0
      })
    }
  }

  stopTimer =() => {
    if(this.state.timerStopped == false) {
      clearInterval(this.timer)
      this.setState({
        timerStarted: false,
        timerStopped: true,
        timerSeconds: 0,
        timerMinutes: 0,
        timerHour: 0
      })
    }
  }

  selectTime =(e) => {
    e.preventDefault()

    this.setState({
      timeSelected: e.target.id * 5
    })
  }

  start = (e) => {
    e.preventDefault()
    this.setState({
      topicSelected: this.state.topic,
      // topic: ''
    })
    this.startTimer(this.state.timeSelected)
  }

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.setTopic} id={1}>Vanilla JS</button>
          <button onClick={this.setTopic} id={2}>React</button>
          <button onClick={this.setTopic} id={3}>Node</button>
          <button onClick={this.setTopic} id={4}>CS</button>
        </div>
        <div>
          <button onClick={this.selectTime} id={1}>5 min</button>
          <button onClick={this.selectTime} id={2}>10 min</button>
          <button onClick={this.selectTime} id={3}>15 min</button>
          <button onClick={this.selectTime} id={4}>20 min</button>
          <button onClick={this.selectTime} id={5}>25 min</button>
        </div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <h1>{this.state.topicSelected}</h1>
        <h2>{this.state.timerHour + " : " + this.state.timerMinutes + " : " + this.state.timerSeconds}</h2>
        <input
          name="input"
        />
      </div>
    );
  }
}

export default App;
