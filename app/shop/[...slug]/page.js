import React from "react";

function page({ params }) {
  return <div>shop:{params.slug[0] + "/" + params.slug[1]}</div>;
}

export default page;
