import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'August 31, 2017'
        }

    }

    changeDeadline() {
        this.setState({deadline: "November 24, 2017"});
    }

    render() {
        return (
            <div className="App">
                <div className='App-title'>Countdown to {this.state.deadline}</div>
                <div>
                    <div className='Clock-days'>14 Days</div>
                    <div className='Clock-hours'>31 Hours</div>
                    <div className='Clock-minutes'>45 Minutes</div>
                    <div className='Clock-seconds'>13 Seconds</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button onClick={() => this.changeDeadline() }>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;