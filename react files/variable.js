import ReactDOM from 'react-dom/client'
let uid="react"
const year=2024
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
  <h1> hello {uid}</h1>
  <h2>year is {year}</h2>
  </>
)