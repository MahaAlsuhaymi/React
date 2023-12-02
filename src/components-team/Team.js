
import React, { Component } from 'react';
import memberInfo from './memberInfo';
import TeamMember from './TeamMember';

class Team extends Component{

    constructor(){
        super()
        this.state = { memberInfo : memberInfo }
    }

    clickEvent(){
        
    }

    mapping(x){
       const members = x.map( member => <TeamMember 
                        key={member.id}
                        img={member.img}
                        name={member.name}
                        position={member.position}
                        phone={member.phone}
                        email={member.email}
                        website={member.website}
                    /> );
    return members
    }

    render(){        
        return(
            <div className="row">
                <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>Click me!</button>
                {this.mapping(this.state.memberInfo)}
            </div>
        );
    }
}

export default Team