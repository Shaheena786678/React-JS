import ReactDOM from 'react-dom/client'
let uid="react"
const year=2024
let students=['abc','def','ghi','jkl']
let person={fname:'abc', lastname:'def',age:25,place:'pvl',}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
  <h1> hello {uid}</h1>
  <h2>year is {year}</h2>
  <h3>{students}</h3>
  <h2>{students[2]}</h2>
  <h2>{person.place + " " + person.age}</h2>
  {/* <h2>{person.place} {person.age}</h2>*/}
  </>
)