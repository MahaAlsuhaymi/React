import React from 'react';

function TeamMember(props){
    return(
        <div className="col-md-4 col-sm-6">
            <div className="card">
               <div className="card-header">
                    <img style={{maxWidth: '100%'}} src={props.info.img} />
               </div>
               <div className="card-body" 
               style={{backgroundColor: props.info.website ? 'white': 'Grey'}}>
                    <h2>{props.info.name}</h2>
                    <h5>{props.info.position}</h5>
                    <div>{props.info.phone}</div>
                    <div>{props.info.email}</div>
                    <div>{props.info.website}</div>
                </div> 
            </div>
        </div>
    );
}

export default TeamMember