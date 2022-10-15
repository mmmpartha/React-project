import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SivaTask() {
    const [state, setState] = useState({ name: '', age: '', address: '' })
    const[newdata,setNewdata]=useState()

    function submit(e) {
        e.preventDefault()
        setNewdata(true)
    }

    return (
        <>
            <form>
                <input type='text' name='name' onChange={(e) => (setState({ ...state, [e.target.name]: e.target.value }))} />
                <input type='text' name='age' onChange={(e) => (setState({ ...state, [e.target.name]: e.target.value }))} />
                <input type='text' name='address' onChange={(e) => (setState({ ...state, [e.target.name]: e.target.value }))} />
                <button ><Link to={`/records/${state.name}`}>Submit</Link></button>
            </form>
            {
                newdata?<>
                <h1>{state.name}</h1>
                <h1>{state.age}</h1>
                <h1>{state.address}</h1>
                </>:<></>
            }
        </>

    )
} 
