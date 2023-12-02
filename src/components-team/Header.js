import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="navbar bg-light rounded text-black">
                <h1>Our Team</h1>
            </div>
        )
    }

   /*
    const client = "Designer";
    const title = {
        designer: "Design ",
        programmer: "Programming "
    }

    const info = {
        name: "Maha",
        last: "Alsuhaymi"
    }

    return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.last}`}
            <h2>
            {client == "Designer" ? title.designer : title.programmer} 
             is my life
            </h2>
        </div>
    );
    */
}

export default Header;