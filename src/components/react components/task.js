import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Task() {
   
    const [members, setMembers] = useState()
    const [datas, setDatas] = useState({name: "", gender: "", email: "", status: "" })

    const loaddetails = (e) => {
        e.preventDefault()
        axios.post(('https://gorest.co.in/public/v2/users'), datas, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 624926d75ab1c29edede7f3497708eaa0ad7d701bf6117eae5fa2f4741d2cd6a'
            }
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    const loadmembers = () => {
        axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => setMembers(response.data))
            .catch(err => console.log(err))
    }

    const deleted = (id) => {
        console.log(id);
        axios.delete((`https://gorest.co.in/public/v2/users/${parseInt(id)}`), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 624926d75ab1c29edede7f3497708eaa0ad7d701bf6117eae5fa2f4741d2cd6a'
            }
        })
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
    }

    const update =(id)=>{
        axios.put((`https://gorest.co.in/public/v2/users/${parseInt(id)}`),datas,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 624926d75ab1c29edede7f3497708eaa0ad7d701bf6117eae5fa2f4741d2cd6a'
            }
        })
            .then((response)=>console.log(response))
            .catch((err)=>console.log(err))
    }

    useEffect(() => loadmembers(), [])

    return (
        <>
            <form onSubmit={(e) => loaddetails(e)}>
                <label>Name: </label>
                <input type="text" value={datas.name} name='name' onChange={(e) => setDatas({ ...datas, name: e.target.value })} /><br />
                <label>Genter: </label><input type='text' value={datas.genter} name='gender' onChange={(e) => setDatas({ ...datas, gender: e.target.value })} /><br />
                <label>Email: </label><input id='email' type='text' value={datas.email} name='email' onChange={(e) => setDatas({ ...datas, email: e.target.value })} /><br />
                <label>Status:  </label><input id='status' type='text' value={datas.status} name='status' onChange={(e) => setDatas({ ...datas, status: e.target.value })} /><br />
                <input type="submit" value="submit" />
            </form>


            <table border='2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        members?.map((el,index) =>
                            <tr>
                                <td>{el.id}</td>
                                <td key={index}>{el.name}</td>
                                <td>{el.gender}</td>
                                <td>{el.email}</td>
                                <td>{el.status}</td>
                                <td><button onClick={()=>deleted(el.id)}>Delete</button></td>
                                <td><button onClick={update(el.id)}>Update</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}