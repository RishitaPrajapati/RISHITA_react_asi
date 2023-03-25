import  { useState } from 'react'

function Booleanstate() {

    const[myName,setMyName] = useState([
        "risi",
        "rishi",
        "rishita",
        "rishu"
    ])
  return (
    <div className='card'>
        <div className="card-header">
            <h1>My Nick names are:</h1>
        </div>
        <div className="card-body">
           {myName.map((item,index,array)=>{
                return <h2>{item}</h2>
           })}
        </div>
    </div>
  )
}

export default Booleanstate