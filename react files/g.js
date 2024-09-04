import ReactDom from "react-dom/client"
let dollar=prompt("enter dollars here")
let rupees=prompt("enter rupees")
let result=dollar*83.4
let result2=rupees*0.014
 
const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
<>
<table border="2px " >
<tr>
<td >Dollar</td>
<td >Rupees</td>
<td>Rupees</td>
<td>dollar-rupees</td>
</tr>
<tr>
<td >{dollar}</td>
<td>{result}</td>
<td>{rupees}</td>
<td>{result2}</td>
</tr>
</table>
 
  </>
)