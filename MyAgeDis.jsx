import React from 'react';
import MyHobbyDis from './MyHobbyDIs';

const MyAgeDis = ({ myAge, myHobby }) => {
    console.log("This is MyAgeDis component", myHobby);

    return (
        <div>
            <p>My Age is {myAge}</p>
            <MyHobbyDis myHobby={myHobby} />
        </div>
    );
};

export default MyAgeDis;
