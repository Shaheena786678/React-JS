import React, {useContext} from 'react'
import { context } from './App'
export default function Comp3() {
   let x=useContext(context)
    return (
     
      <div>
      <h1>welcome to {x}</h1>
      </div>
  )
}
