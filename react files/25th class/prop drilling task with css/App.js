import React from 'react'
import Comp1 from './Comp1'
import { useState } from 'react'

export default function App() {
    const array=["apple","orange","banana","mango"]
    const [state,setState]=useState(array)
        return (
        <>
        <Comp1 data={state}/>
        </>
   
  )
}
