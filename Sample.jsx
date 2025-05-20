import React from 'react'
import MyAgeDis from './MyAgeDis'

const Sample = ({ myName, myAge, myHobby }) => {
  return (
    <div>
      <p>Welcome {myName}</p>
      <MyAgeDis myAge={myAge} myHobby={myHobby} />
      {/* <p>My hobby is {myHobby}</p> */}
    </div>
  )
}

export default Sample;
