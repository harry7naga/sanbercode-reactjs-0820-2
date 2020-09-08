import React, { Component } from 'react';

class Timer extends Component {
    componentWillUnmount() {
        console.log('Bye Countdown');
    }

    render() {
        return (
            <h1 style={{ textAlign: 'right' }}>
                {`Hitung Mundur : ${this.props.countdown}`}
            </h1>
        );
    }
}

export default Timer;