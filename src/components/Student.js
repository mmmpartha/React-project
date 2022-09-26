import React from"react";


function Details(props){
  function name(){
          console.log(props.names)
     
    }
    return(
      <>
      <button onClick = {()=>name()}> click</button>
      </>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

export default Details