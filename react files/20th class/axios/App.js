import React, { useState} from 'react'
import axios  from 'axios'
 export default function App() {
 const [state, setstate] = useState([])
  function handler(){
   axios.get('https://randomuser.me/api/?results=50')
   .then((res)=>{
    setstate(res.data.results)
   })
  }
  return (
    <>
     {state.map((list)=><li>{list.name.first}</li>)}
     <button onClick={handler}>get data</button>
    </>
  )
}