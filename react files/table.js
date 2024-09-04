import ReactDOM from 'react-dom/client'
let name1=prompt("enter ur name")
let plac1=prompt("enter place")
let email1=prompt("enter email")
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>
  <table border='2px' width='500px' height='200px'>
    <tr>
      <td>Name</td>
      <td>Place</td>
      <td>Email</td>
    </tr>
    <tr>
      <td>{name1}</td>
      <td>{plac1}</td>
      <td>{email1}</td>
    </tr>
  </table>
  </>
)