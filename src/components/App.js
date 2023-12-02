import React, { Component } from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            number: 0
        }
    }

    eventHandler(){

    }

    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.eventHandler}>Click me!</button>
            </div>
        )
    }
}

export default App