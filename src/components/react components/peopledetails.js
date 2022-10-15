import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Viewsdetails() {

    const [datas, setDatas] = useState({});
    const id = useParams()
    
    const loadDetails = () => {
        axios.get(`https://swapi.dev/api/people/${parseInt(id.id)}`)
            .then((response) => setDatas(response.data))
            .catch((error) => console.log(error))
    }
    
    useEffect(() => loadDetails(), [])

    return (
        <>
            <p>Name:{datas.name}</p><br />
            <p>Height:{datas.height}</p><br />
            <p>Mass:{datas.mass}</p><br />
            <p>Hair-Color:{datas.hair_color}</p><br />
            <p>Skin-Color:{datas.skin_color}</p><br />
            <p>Eye-color:{datas.eye_color}</p><br />
            <p>Birth_year:{datas.birth_year}</p><br />
            <p>Gender:{datas.gender}</p><br />
            <p>Homeworld:<a href={`${datas.homeworld}`}>{datas.homeworld}</a></p><br />
            <p>Films:{datas.films}</p><br />
            <p>Species:{datas.species}</p><br />
            <p>Vehicles:{datas.vehicles}</p><br />
            <p>Starships:{datas.starships}</p><br />
            <p>Created:{datas.created}</p><br />
            <p>Edited:{datas.edited}</p><br />
            <p><a href={`${datas.url}`}>URL:{datas.url}</a></p><br />
        </>
    )
}