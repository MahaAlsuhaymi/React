import React from 'react';
import TeamMember from './TeamMember';;

function Team(){
    const info = [
    {id:3, img: 'https://picsum.photos/200', name: 'Maha Alsuhaymi', position: 'Programmer', phone: '+49 12345678', email: 'maha@team.com',/*website: 'mahaAlsuhaymi.com'*/},
            {id:6, img: 'https://picsum.photos/201', name: 'Sara Ali', position: 'Designer', phone: '+49 34597278', email: 'sara@team.com', website: 'saraAli.com'},
            {id:9, img: 'https://picsum.photos/203', name: 'Alaa Salem', position: 'Designer', phone: '+49 47435678', email: 'Alaa@team.com', /*website: 'AlaaSalem.com'*/},
            {id:4, img: 'https://picsum.photos/204', name: 'Dana Ahmed', position: 'Programmer', phone: '+49 34594478', email: 'DanaA@team.com', website: 'DanaAhm.com'}
    ]

    const members = info.map((member) => <TeamMember 
                                key={member.id}
                                img={member.img}
                                name={member.name}
                                position={member.position}
                                phone={member.phone}
                                email={member.email}
                                website={member.website}
                            /> );

    return(
        <div className="row">
            {members}
        </div>
    );
}

export default Team