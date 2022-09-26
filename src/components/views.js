import React from 'react';
import { useParams } from 'react-router-dom';

function Viewsdetails() {
    const { name } = useParams()
    const tableDetails = [{ name: 'parthipan', age: '24', place: 'tenkasi' },
    { name: 'kanish', age: '20', place: 'kerala' },
    { name: 'ajay', age: '18', place: 'kottayam' },
    { name: 'sanjay', age: '26', place: 'chennai' }];

    return (
        <>
            {
                tableDetails.filter((el) => el.name === name).map((el) =>
                    <>
                        <p>name : {el.name} </p> <br />
                        <p>age : {el.age} </p> <br />
                        <p>place : {el.place} </p> <br />
                    </>
                )
            }

        </>
    )
}

export default Viewsdetails;