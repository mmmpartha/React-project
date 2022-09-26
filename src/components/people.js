import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Viewsdetails from "./peopledetails";
import { useNavigate } from "react-router-dom";

export default function People() {
    const navigate = useNavigate()
    
    
    function navigateDetails(name,id) {
        navigate(`/viewsdetails/${name}/${id}`)

    }
    const [datas, setDatas] = useState({});

    const loadDetails = () => {
        axios.get("https://swapi.dev/api/people")
            .then((response) => setDatas(response.data))
            .catch((error) => console.log(error));
    }
    const Nextbutton = () => {
        axios.get(datas.next)
            .then((response) => setDatas(response.data))
            .catch((error) => setDatas(error))
    }
    const Previousbutton = () => {
        axios.get(datas.previous)
            .then((response) => setDatas(response.data))
            .catch((error) => setDatas(error))
    }

    useEffect(() => loadDetails(), []);

    return (
        <>
            <h1>User Detail</h1>
            <h4>User Count:{datas.count}</h4>
            {
                datas.previous == null ?
                    <>
                    </> :
                    <>
                        <button onClick={Previousbutton}>Previous</button>
                    </>}
            {
                datas.next == null ? <>
                </> : <>
                    <button onClick={Nextbutton}>Next</button>
                </>}
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair-Color</th>
                        <th>Skin-color</th>
                        <th>Eye-color</th>
                        <th>Birth-year</th>
                        <th>Gender</th>
                        <th>Homeworld</th>
                        <th>Films</th>
                        <th>Species</th>
                        <th>Vehicles</th>
                        <th>Starships</th>
                        <th>Created</th>
                        <th>Edited</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody >
                    {datas.results?.map((user, index) => (
                        <tr key={index}>
                            <td onClick={() => navigateDetails(user.name,index+1)}>{user.name}</td>
                            <td>{user.height}</td>
                            <td>{user.mass}</td>
                            <td>{user.Hair_color}</td>
                            <td>{user.skin_color}</td>
                            <td>{user.eye_color}</td>
                            <td>{user.birth_year}</td>
                            <td>{user.gender}</td>
                            <td><a href={`${user.homeworld}`}>{user.homeworld}</a></td>
                            {/* <td><Link to={user.homeworld} >{user.homeworld}</Link></td> */}
                            <td>{user.films.map((el) =>  
                                <>
                                <a href={`${el}`}><p>{el}</p></a>
                                </>)}</td>
                            <td><a href={`${user.species}`}>{user.species}</a></td>
                            <td>{user.vehicles.map((el) =>  
                                <>
                                <a href={`${el}`}><p>{el}</p></a>
                                </>)}</td>
                                <td>{user.starships.map((el) =>  
                                <>
                                <a href={`${el}`}><p>{el}</p></a>
                                </>)}</td>
                            <td>{user.created}</td>
                            <td>{user.edited}</td>
                            <td><a href={`{${user.url}}`}>{user.url}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )

}
