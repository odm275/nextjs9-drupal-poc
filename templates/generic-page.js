import React from "react";

const Page = ({ title, body }) => {
  return (
    <div>
      <p>generic page tho</p>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.value }} />
    </div>
  );
};

export default Page;
