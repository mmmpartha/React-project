import { useParams } from "react-router-dom"
import React from "react";
import {useState} from "react"

export default function Records() {
    // const names = useParams()
    const Data = [{
        name: 'partha',
        age: '22',
        place: 'tenkasi',
        college: 'svcet',

    },
    {
        name: 'kanish',
        age: '18',
        place: 'chennai',
        college: 'svcet',
    },
    {
        name: 'kumaran',
        age: '20',
        place: 'covai',
        college: 'anna university',
    },
    {
        name: 'Aakash',
        age: '20',
        place: 'Tirunelveli',
        college: 'PSN COLLEGE',
    }
    ]
    const[items,setItems]=useState(Data)

    function deleteItem(name){
        const newData = items.filter((el)=> el.name !== name)
        setItems(newData)
    }

    return (
        <>
            <table border={2}>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                    <th>college</th>
                    <th>Remove</th>
                </thead>

                {
                    // Data.filter((el) => el.name === names.name).map((el, index) =>
                    items.map((el,index)=>
                   <tbody key={index}>
                    <tr>
                    <td>{el.name}</td>
                    <td>{el.age}</td>
                    <td>{el.place}</td>
                    <td>{el.college}</td>
                    <td><button onClick={()=>deleteItem(el.name)}>Remove</button></td>
                    </tr>
                   </tbody>
                    )}
            </table>
        </>
    )
}