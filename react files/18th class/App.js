import React from "react"
import './style.css'
import { BrowserRouter,Routes,Route, Link } from "react-router-dom"
import Service from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
import Other from './Components/Other'
export default function App(){

  return(
<>
<h1 style={{color:'yellow',backgroundColor:'black'}}>main page</h1>
<BrowserRouter>
<Link to='/'className="a">  Home  </Link><br/>
<Link to='/About'className="b">  About  </Link><br/>
<Link to='/Contact'className="c">  Contect  </Link><br/>
<Link to='/Services'className="d">  Services  </Link><br/>
<Link to='/Other'className="e">  Otherr  </Link>
<Routes>
<Route path='/' element={<h1>Home</h1>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/services' element={<Service/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/Other' element={<Other/>}></Route>
</Routes>
</BrowserRouter>
</>
  )
}