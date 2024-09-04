import React from 'react'
 
export default function Comp2() {
  return ( <>
<div className='container'>
  <div className="a">
<h1 style={{color:'white' ,paddingTop:'20px'}}>LEARN COMPLETE</h1>
<h1 style={{color:'yellow' ,paddingTop:'20px'}}>WEB DEVELOPMENT</h1>
<h1  style={{color:'white' ,paddingTop:'20px'}}>COURSE</h1>
<p style={{color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
Natus, soluta nemo omnis,<br/> praesentium quis atque est eum eveniet fuga quas quasi nisi 
quod ducimus<br/>  reprehenderit maxime.Nisi iste modi numquam.
</p>
<button  style={{borderRadius:'25px'}}>know more</button>
</div>
 
<div className="b">
<form>
<table>
<tr>
<td> <br/><button className='aa'   style={{width: '180px', borderRadius:'25px'}}>Login Now</button></td></tr>
<tr>
<td> <input type="text" placeholder="Enter Email or UserName"/></td><br/><br/></tr>
<tr>
<td> <input type="password" placeholder="password"/></td><br/><br/></tr>
<tr><td> <button style={{width: '160px', borderRadius:'25px'}}>LOGIN</button></td></tr>
<tr> <td>
<h4 style={{color: 'rgb(255, 0, 140)'}}>Don't have account?<br/><span style={{color:'aqua'}}>create new account</span> </h4>
</td></tr>
 
</table>
 
</form>
</div>
</div>
     </>
 
  );
}