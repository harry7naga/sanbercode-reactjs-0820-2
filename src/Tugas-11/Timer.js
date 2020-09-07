import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 1000
        }
    }

    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ time: this.props.start })
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }


    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>
                    Hitung mundur: {this.state.time}
                </h1>
            </>
        )
    }
}

export default Timer;