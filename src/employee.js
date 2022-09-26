import React from "react";

function Employee(props){
    function datas(){
        console.log(props.detail.emp_name)
        console.log(props.detail.emp_id)
    }
    return(
        <>
        <h1>hello,{props.detail.emp_name}</h1>
        <button onClick={()=>datas()}>emp</button>
        </>
    )
}
export default Employee