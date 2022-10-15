import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Example() {

    const [state, setState] = useState({})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos/1')
            .then((response) => setState(response.data))
            .catch((err) => console.loig(err))

    }, [])
    console.log(typeof (state))
    return (
        <>
            {
                <>
                    <h1>{state.id}</h1>
                    <h1>{state.albumId}</h1>
                    {/* <img src={`${state.url}`}/> */}
                    <Link to={`/${state.thumbnailUrl}`}><img src={`${state.thumbnailUrl}`} alt="issue" /></Link>
                </>
            }
        </>
    )
}