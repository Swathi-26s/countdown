import React, { useState } from 'react';

const MyHobbyDIs = ({ myHobby }) => { 
    console.log("This is MyHobbyDIs Component", myHobby); 
    const [data, setData] = useState(""); 
    
    return ( 
        <div> 
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} /> 
            <p>My Hobby is {myHobby}</p> 
        </div> 
    ); 
}; 

export default MyHobbyDIs;
