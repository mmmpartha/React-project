import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Exercise() {

    const [state, setState] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setState(response.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state?.map((el, index) => {
                            return (
                                <tr key={index}>
                                    <td><button><Link to={`alldetails/${el.id}`}>{el.id}</Link></button></td>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.phone}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    )
}