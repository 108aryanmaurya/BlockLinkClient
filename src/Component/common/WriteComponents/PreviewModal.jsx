import React, { useRef, useState } from "react";
import SingleBlog from "../../../Pages/SingleBlog";
import { BannerImg } from "../../../Assets/images";
const PreviewModal = ({ blogData, previewModal }) => {
  const previewModalref = useRef(null);
  const handleOutsideClick = (event) => {
    if (previewModalref.current === event.target) {
      previewModal();
    }
  };

  //   const [blogdata, setblogdata] = useState({});
  const [loading, setloading] = useState(false);
  let data = JSON.parse(localStorage.getItem("BlogData"));

  data = {
    ...data,

    blogcontent: {
      description:
        data?.description?.length > 300
          ? data?.description.substring(0, 570) + "..."
          : data?.description,
    },
    Date: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  console.log(data);

  console.log(blogData);
  return (
    <div
      ref={previewModalref}
      className="absolute w-full  left-0 top-0  py-12 max-sm:pb-96 z-50   flex items-center transition-all ease-in-out duration-300  justify-center backdrop-blur-sm bg-Opacityblack "
      onClick={handleOutsideClick}
    >
      <SingleBlog loading={loading} ispreview={true} blog1={data}></SingleBlog>
    </div>
  );
};

export default PreviewModal;
