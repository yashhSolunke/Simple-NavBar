import React from "react";
import CompB from "./CompB";
import { data } from "react-router-dom";
const CompA=()=>{
    const getData=(data)=>{
        console.log(data);
    }
    return(
        <>
        <h1>CompA</h1>
        <CompB getData={getData}/>
        </>
    )
}
export default CompA;