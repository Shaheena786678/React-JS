import  { useState } from 'react' 
import Data from './info.json'
function App(){

const [data,setData]=useState(Data)
 return(
    <>
    <table border="1px">
      <tr>
    {data.map((x)=><tr><td>{x.name}</td><td>{x.place}</td><td>{x.age}</td></tr>)}
    </tr>
    </table>
    </>
  )
}
export default App