import React from"react";


function Details(props){
  function name(){
          console.log(props.names)
        // console.log(props.details.name)
        // console.log(props.details.id)
        // console.log(props.details.rollno)
        // console.log(props.details.email)
    }
    return(
      <>
      {/* <h1>Welcome , {props.details.name}</h1>
      <h1>your id is, {props.details.id}</h1>
      <h1>your rollno is , {props.details.rollno}</h1>
      <h1>your email is , {props.details.email}</h1> */}
      <button onClick = {()=>name()}> click</button>
      </>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
    // <React.Fragment>
      
    // </React.Fragment>
export default Details