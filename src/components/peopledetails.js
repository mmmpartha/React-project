import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




export default function Viewsdetails() {
    const [datas, setDatas] = useState({});
    const name = useParams()
    console.log('name details ', name);
    const loadDetails = () => {
    axios.get(`https://swapi.dev/api/people/${name.id}`)
        .then((response) => setDatas(response.data))
        .catch((error) => console.log(error));
    }


    return (
        <>
            {
                datas.results?.filter((user) => user.name === name).map((usr, index)=>{
            <>
                <p >Name:{usr.name}</p><br />
                <p>Height:{usr.height}</p><br />
                <p>Mass:{usr.mass}</p><br />
                <p>Hair-Color:{usr.hair_color}</p><br />
                <p>Skin-Color:{usr.skin_color}</p><br />
                <p>Eye-color:{usr.eye_color}</p><br />
                <p>Birth_year:{usr.birth_year}</p><br />
                <p>Gender:{usr.gender}</p><br />
                <p>Homeworld:{usr.homeworld}</p><br />
                <p>Films:{usr.films}</p><br />
                <p>Species:{usr.species}</p><br />
                <p>Vehicles:{usr.vehicles}</p><br />
                <p>Starships:{usr.starships}</p><br />
                <p>Created:{usr.created}</p><br />
                <p>Edited:{usr.edited}</p><br />
                <p>URL:{usr.url}</p><br />
            </>
})}
        </>
    )
}

