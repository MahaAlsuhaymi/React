import React, { Component } from 'react';
import TeamMember from './TeamMember';;
import memberInfo from './memberInfo'

class Team extends Component{

    constructor(){
        super()
        this.state = { memberInfo : memberInfo }
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
                {this.mapping(this.state.memberInfo)}
            </div>
        );
    }
}

export default Team