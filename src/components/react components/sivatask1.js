import { useState } from "react";

export default function SivaTask1() {
    const details = [{
        name: "kumaran", name1: "sivaselva", name2: "praveen", name3: "nagaraj", name4: "aakash",
        name5: "kannan", name6: "hari", name7: "kanish", name8: "ajay", name9: "kannan", name10: "raguram", name11: "sathish"
    }]
    const [state, setState] = useState(details)
    const [compare, setCompare] = useState([])

    return (
        <>
            <h1>NAMES</h1>
            <input type="text" onChange={(el) => setCompare(el.target.value)} />
            {compare.filter((el) => el.startsWith(compare) === state ?<>
            <h1>{state}</h1>
            </>:<></>)}
            {
                state?.map((el, index) => {
                    return (
                        <ul key={index}>
                            <li>{el.name}</li>
                            <li>{el.name1}</li>
                            <li>{el.name2}</li>
                            <li>{el.name3}</li>
                            <li>{el.name4}</li>
                            <li>{el.name5}</li>
                            <li>{el.name6}</li>
                            <li>{el.name7}</li>
                            <li>{el.name8}</li>
                            <li>{el.name9}</li>
                            <li>{el.name10}</li>
                        </ul>
                    )
                })
            }

        </>
    )
}