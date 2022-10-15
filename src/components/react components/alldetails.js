import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Alldetails() {

    const [state, setState] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${parseInt(id)}`)
            .then((response) =>  setState(response.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
        <h3>{state.name}</h3> 
        <h3>{state.phone}</h3>
        <h3>{state.username}</h3>
        <h3>{state.website}</h3>
        <h3>{state.email}</h3>
        </>
    )
}