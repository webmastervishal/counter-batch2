//container component

import React from 'react';
import Counter from './Counter';

class CounterContainer extends React.Component {

    //first lifecycle method
    constructor() {
        super();

        this.state = {
            count: 0
        };

        console.log('Inside the constructor',this);
        this.incHandler = this.incHandler.bind(this);
    }

    //second lifecycle method
    componentWillMount() {
        console.log('Inside component will mount');
    }

    
    // incHandler = () => {
    //    this.setState({
    //         count: this.state.count + 1
    //     });
    // }

    incHandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decHandler = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    //is called only when component is re-rendered
    componentDidUpdate(prevProps,prevState) {
        console.log('component is updated',{prevProps,prevState});
    }

    //control the re-rendering of component, if true then component will be re-rendered if false it won't re-render
    shouldComponentUpdate() {
        return true;
    }

    // third life cycle method
    render() {
        console.log('inside the render');
        return (
            <Counter 
                countvalue = {this.state.count}
                incHandler = {this.incHandler}
                decHandler = {this.decHandler}
            />
        )
    }

    //fourth life cycle method
    componentDidMount() {
        console.log('Inside component did mount');
    }

    //called when component is destroyed or is about to unmount
    componentWillUnmount() {
        console.log('inside the component unmount');
    }
}

export default CounterContainer;

/*

    Difference between container/stateful & presentational/stateless component

    1. container will have class defination while presentational will have function
    2. Inside the container we will write the logic required for the component to work, whereas presentational component will just render the data 
    3. container will have all the lifecycle methods provided by React.Component class.
    4. container can have state which will hold the data required by the component, presentational will render the state data.
    5. container is called stateful because it holds the state data, presentational is called stateless because it doesn't have state

*/