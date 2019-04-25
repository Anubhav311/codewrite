import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      vanillaQues: ['vanilla no. 1', 'vanilla no. 2', 'vanilla no. 3', 'vanilla no. 4', 'vanilla no. 5'],
      reactQues: ['react no. 1', 'react no. 2', 'react no. 3', 'react no. 4', 'react no. 5'],
      nodeQues: ['node no. 1', 'node no. 2', 'node no. 3', 'node no. 4', 'node no. 5'],
      csQues: ['cs no. 1', 'cs no. 2', 'cs no. 3', 'cs no. 4', 'cs no. 5'],
      
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
