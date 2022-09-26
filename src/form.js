import { useState } from "react";

export default function Form() {
        //   const [name, setName] = useState("")
        //   const [email, setEmail] = useState("")
        //   const [profession, setProfession] = useState("")
        // let setDetails,details;
        const [details, setDetails] = useState({ names: "", email: "", profession: "" })
        const [newdata, setNewdata] = useState();
        function Showdatas(e) {
            e.preventDefault();
            setNewdata(true)
        }
        return (
            <>
                <form >
                    <label>Name</label>: <input type="text" onChange={(e) => setDetails({...details, names : e.target.value})} />
                    <label>Email</label><input type="text" onChange={(e) => setDetails({...details, email : e.target.value})} />
                    <label>Profession</label><input type="text" onChange={(e) => setDetails({...details, profession : e.target.value})} />
                    <button onClick={Showdatas}>submit</button>

                </form>

                {
                    newdata ? <>
                        <h1>{details.names}</h1>
                        <h1>{details.email}</h1>
                        <h1>{details.profession}</h1>
                    </> : <>
                    </>
                }

            </>

        );

    }
