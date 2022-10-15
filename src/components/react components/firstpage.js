import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Firstpage() {
    const [state, setState] = useState({})

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((response) => setState(response.data))
            .catch((err) => console.log(err))
    }, [])
    
    return (
        <>
            <ul>
                {state.data?.map((el, index) => {
                    return (
                        <ul key={index}>
                            <Link to={`/viewdetails/${el.id}`}><li><img id="image" src={el.avatar} alt="disable"/></li></Link>
                            <Link to={`/viewdetails/${el.id}`}><li>{el.first_name}</li></Link>                         
                        </ul>
                    )
                })
                }
            </ul>
        </>
    )
}