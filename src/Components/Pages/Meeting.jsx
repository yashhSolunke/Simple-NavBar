import React from "react";
import { useParams } from "react-router-dom";

const Meeting = () => {
    const {meetid}=useParams();
  return (
    <>
      <h1>Meeting Id:{meetid}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
        consequuntur, excepturi in voluptas et ut explicabo nihil, deserunt
        alias dolore cupiditate sequi reprehenderit, sint culpa id consectetur
        quam dolorum? Atque magnam perspiciatis vero neque cumque? Quas
        reprehenderit soluta, eaque deserunt fugit dignissimos, fuga laboriosam
        nobis alias libero est odio laudantium maiores suscipit quibusdam
        aspernatur veritatis eius incidunt enim obcaecati tempora deleniti
        fugiat quae? Fuga dignissimos, distinctio nesciunt totam excepturi odit
        quis voluptatum eligendi temporibus libero necessitatibus, veniam
        praesentium nobis optio? Ducimus cupiditate corrupti unde illo eius
        quidem, impedit dignissimos. Molestiae molestias distinctio voluptatum
        officia labore voluptatem ad earum id tempore.
      </p>
    </>
  );
};
export default Meeting;
