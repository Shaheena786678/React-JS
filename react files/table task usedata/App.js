import  { useState } from 'react' 
function App(){
const person =[
  {
    name:'NAME',
    place:'PLACE',
    age:'AGE'
  },
  {
    name:'shahin',
    place:'hyd',
    age:24
  },
  {
    name:'sham',
    place:'pvl',
    age:26
  },
  {
    name:'sunia',
    place:'bjp',
    age:28
  },
  {
    name:'athiq',
    place:'pvl',
    age:9
  },
  {
    name:'Apsia',
    place:'pvl',
    age:7
  }
]
const [data,setData]=useState(person)
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