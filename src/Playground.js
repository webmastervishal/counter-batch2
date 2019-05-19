import React, {Component} from 'react';


class Playground extends Component {
    constructor() {
        super();

        this.state = {
            name: {
                firstname: 'vishal',
                lastname: 'shetty'
            },
            address: {
                city: 'bangalore',
                state: 'karnataka',
                locality: {
                    hno: 101,
                    street: 'hosur road'
                }
            },
            age: 28
        }

        this.changeData = this.changeData.bind(this);
    }

    changeData() {
        this.setState({
            ...this.state,
            name: {
                ...this.state.name
            },
            address: {
                ...this.state.address,
                locality: {
                    ...this.state.address.locality
                },
                city: 'mysore'
            }
        });
    }

    render() {
        return(
            <h1>Nested state</h1>
        )
    }
}

export default Playground;