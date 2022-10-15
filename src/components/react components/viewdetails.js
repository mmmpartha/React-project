import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Viewsdetails(){
    const [state, setState] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${parseInt(id)}`)
            .then((response) => setState(response.data))
            .catch((err) => console.log(err))
    }, [])

    return(
        <>
        <img id="image" src={state.data?.avatar} alt="disable"/>
        <h1>{state.data?.id}</h1>
        <h1>{state.data?.email}</h1>
        <h1>{state.data?.first_name}</h1>
        <h1>{state.data?.last_name}</h1>
        </>
    )
}