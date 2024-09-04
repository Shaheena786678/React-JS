import React from 'react'
export default function Comp3({data}) {
   
    return (
      <div>
         <figure>
            <img src={data.pic}  alt='' width='100px'/>
            <figcaption>{data.name}</figcaption>
            </figure>
       
      </div>
  )
}
