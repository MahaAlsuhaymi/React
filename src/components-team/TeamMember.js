import React, { Component } from 'react';

class TeamMember extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-5">
                <div className="card" style={{backgroundColor: this.props.position == 'Programmer' ? 'lightblue': 'lavender'}}>
                   <div className="card-header">
                        <img style={{maxWidth: '100%'}} src={this.props.img} alt={this.props.name} />
                   </div>
                   <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                        <h6>Contact Info:</h6>
                        <div>{this.props.phone}</div>
                        <div>{this.props.email}</div>
                        <div>{this.props.website}</div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default TeamMember