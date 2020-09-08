import React, { Component } from 'react';

class Coba extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                { id: '1', age: 42 },
                { id: '2', age: 33 },
                { id: '3', age: 68 },
            ],
        };
    }

    onRemoveItem = id => {
        this.setState(state => {
            const list = state.list.filter(item => item.id !== id);

            return {
                list,
            };
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item.id}>
                            The person is {item.age} years old.
                            <button type="button" onClick={() => this.onRemoveItem(item.id)}>
                                Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Coba