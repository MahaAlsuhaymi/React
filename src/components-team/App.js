import React, { Component } from 'react';
import Header from './Header';
//import Text from './Text';
//import Social from './Social';
import Team_click from './Team_click';


class App extends Component{
    render(){
        return (
          <div className="container">
            <Header />
            <Team_click />
          </div>
        );
    }
}


export default App;
