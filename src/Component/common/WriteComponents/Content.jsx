import React from "react";
import TinyMCEEditor from "../../../Helper/Editor";

const Content = ({ blogs, updateDesc }) => {
  return (
    <div className=" flex mt-6  flex-col justify-around bg-gray-100 dark:bg-darkBgPrimary p-2 m-0 rounded ">
      <div className="text-[23px] text-black dark:text-white">Content</div>
      <div className="overflow-hidden">
        <TinyMCEEditor blogs={blogs} description={updateDesc}></TinyMCEEditor>
      </div>
    </div>
  );
};

export default Content;
