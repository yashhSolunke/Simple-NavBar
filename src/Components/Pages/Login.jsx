import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const ClickHandler = (e) => {
        e.preventDefault();
      navigate("/");
    };
  return (
    <>
    <div>

      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, vitae
        natus nemo accusantium nam dignissimos possimus excepturi similique
        alias odio adipisci repellat inventore laboriosam tempora sed, ipsa
        aliquid eligendi? Velit iusto, hic vero perferendis libero dolores
        soluta aliquam. Sed numquam, in consectetur omnis voluptates suscipit
        qui voluptatum facere? Voluptate eaque possimus illo iure cumque
        blanditiis perferendis commodi! Cum velit, magnam perspiciatis nemo ipsa
        beatae molestias tenetur sunt asperiores aliquam, nam totam maxime
        blanditiis cumque! Inventore tempora modi optio nihil, unde deleniti
        totam facilis vel? Ipsa quod aperiam debitis atque dolorum similique a
        recusandae doloremque? Quam quasi laboriosam accusamus, beatae officiis
        natus facere nulla eum consequuntur quisquam minus esse minima autem
        dolor dignissimos nemo optio amet sunt neque eius tempora, atque
        deleniti. Saepe assumenda mollitia vel veritatis fugit labore, sint
        maiores beatae officiis cupiditate perferendis vero cumque, nobis hic
        necessitatibus rerum, soluta sapiente dolore! Ipsa eum molestias porro!
        Quasi voluptates porro dolores eius quia similique sed, iusto placeat,
        officiis ipsam modi qui earum quo, ipsa tempora! Maxime voluptates,
        magnam saepe voluptatibus quos debitis totam cupiditate veritatis ipsam
        sequi necessitatibus voluptas nulla eum sint laboriosam ducimus alias
        illo porro. Ducimus, recusandae quos dolorum maiores ad rem, porro
        blanditiis harum magni quaerat sint?
      </p>
    </div>
      <form onSubmit={ClickHandler}>
        <input placeholder="Enter your UserName" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Login;
