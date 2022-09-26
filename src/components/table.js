import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table() {
    const navigate = useNavigate()
    function navigateDetails(name) {
        navigate(`/Viewsdetails/${name}`)

    }
    const details = [{ name: 'parthipan', age: '24', place: 'tenkasi' },
    { name: 'kanish', age: '20', place: 'kerala' },
    { name: 'ajay', age: '18', place: 'kottayam' },
    { name: 'sanjay', age: '26', place: 'chennai' }];

    return (
        <>
            <table border="2">
                <thead>
                    <tr >
                        <th>USER NAME</th>
                        <th>AGE</th>
                        <th>PLACE</th>
                    </tr>
                </thead>
                {

                    details.map((el,index) => (

                        <tbody key={index}>
                            <tr >
                                <td> <button onClick={() => navigateDetails(el.name)}>{el.name}</button></td>
                                <td>{el.age}</td>
                                <td>{el.place}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </table>
        </>
    )
}

