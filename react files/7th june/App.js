import React from 'react';
import { useState } from 'react';
export default function App(){

    const [person, setPerson] = useState({
        name: "shahin",
        place: 'hyd',
        age: 24
    });
 
    const handler = () => {
        setPerson({
           
            name: "sham",
            place: "pvl",
            age: 25
        });
    };
 
    return (
        <>
            <h3>click event</h3>
           
            <table border='2px'>
                <tr>
                    <td>name</td>
                    <td>place</td>
                    <td>age</td>
                </tr>
               <tr>
                <td>{person.name}</td>
                <td>{person.place}</td>
                <td>{person.age}</td>
               </tr>
            </table>
            <button onClick={handler}>Click me</button>
        </>
    );
}