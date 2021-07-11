import React from "react";

const Alert=({msg,type})=>{

    return(<>
         <h5 className="alert" style={{backgroundColor:type,color:"white"}}>{msg}</h5>
    </>)
}

export default Alert;