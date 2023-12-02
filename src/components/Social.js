import React from 'react';

function Social(){
    return(
        <ul className="list-group">

            <li className="list-group-item">                
                <input type="checkbox" id="facebook" />
                <label for="facebook">Facebook</label>
            </li>

            <li className="list-group-item">
                <input type="checkbox" id="youtube" />
                <label for="youtube">Youtube</label>
            </li>

            <li className="list-group-item">
                <input type="checkbox" id="instagram" />
                <label for="instagram">Instagram</label>
            </li>
            
        </ul>
    );
}

export default Social;