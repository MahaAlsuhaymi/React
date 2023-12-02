import Header from './Header';
//import Text from './Text';
//import Social from './Social';
import Team from './Team_click';
import React, { Component } from 'react';

class App extends Component{
    render(){
        return (
          <div className="container">
            <Header />
            <Team />
          </div>
        );
    }
}


export default App;
