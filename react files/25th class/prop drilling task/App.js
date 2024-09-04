import React from 'react'
import Comp1 from './Comp1'

export default function App() {
    let person={
        name:'Shahin',
        pic:'https://th.bing.com/th/id/OIP.0-KIptBohQtxzXbKAKqUFAAAAA?rs=1&pid=ImgDetMain'
    }
  return (
    <div>
       
    <Comp1 data={person}/>
    </div>
   
  )
}
