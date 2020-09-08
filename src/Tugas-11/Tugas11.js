import React from 'react'
class Tugas11 extends React.Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
    }

    currentTime() {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(() => this.currentTime(), 1000);
    }

    render() {
        return (
            <>
                <h1 >
                    Sekarang jam : {this.state.time.toLocaleTimeString()}
                </h1>
            </>
        )
    }

}

export default Tugas11