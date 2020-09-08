/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Tugas11 from './Tugas-11';
import Timer from './Timer';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            countdown: 100
        };
    }

    componentDidMount() {
        this.counter = setInterval(() => {
            this.count();
        }, 1000);
    }

    count() {
        this.setState((prevState) => ({
            countdown: prevState.countdown - 1
        }));
        if (this.state.countdown === 0) {
            this.setState({
                display: false
            });
            clearInterval(this.counter);
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {this.state.display && <Clock />}
                {this.state.display && <Countdown countdown={this.state.countdown} />}
            </div>
        );
    }
}

export default LifeCycle;