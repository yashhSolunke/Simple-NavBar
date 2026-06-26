import React from "react";
import { useState } from "react";

const CompB = (props) => {
        const [name,setName]=useState("");

        const changeHandler=(e)=>{
            setName(e.target.value);

        };
        const submitHandler=(e)=>{
            e.preventDefault();
            props.getData(name)
        }
    
  return (
    <>
      <h1>CompB</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        nisi expedita, laborum non quod ut voluptate odio totam magnam sint eos
        dolore. Qui atque omnis, mollitia eius dolores sunt neque?
      </p>
      <form onSubmit={submitHandler} >

      <input type="text" value={name} onChange={changeHandler}></input>
      <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default CompB;
