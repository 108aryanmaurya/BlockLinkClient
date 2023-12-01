import React, { useContext, useEffect, useState } from "react";
import SingleBlog from "../Pages/SingleBlog";
const PreviewLayout = () => {
  const [blogdata, setblogdata] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("BlogData"));
    data = { ...data, blogcontent: { description: data.description } };
    setblogdata({
      ...data,
      preview: true,
      // author,
      Date: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
    console.log(localStorage.getItem("BlogData"));
    console.log(blogdata);

    // func();
  }, []);
  return (
    <>
      <SingleBlog loading={loading} blog1={blogdata}></SingleBlog>
    </>
  );
};

export default PreviewLayout;
