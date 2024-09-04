import React from 'react' 
function App(){
const person =[
  {
    name:'shahin',
    place:'hyd'
  },
  {
    name:'sham',
    place:'pvl'
  },
  {
    name:'sunia',
    place:'bjp'
  }
]

 return(
    <>
    {person.map((x)=><li>{x.name},{x.place}</li>)}
    </>
  )
}
export default App