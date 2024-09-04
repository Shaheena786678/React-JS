import  { useState } from 'react' 
import Data from './info.json'
function App(){

const [state,setData]=useState(Data)
 return(
    
    <>
    {state.map((x)=>
      <>

    <img src={x.pic} alt="" style={x}/>
    <h4>{x.name}</h4> 
    
    </>
    )}
    
    </>
  )
}
export default App