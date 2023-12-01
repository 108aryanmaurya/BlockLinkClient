import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";
import PreviewModal from "./PreviewModal";
const ShowPreview = ({ blogData }) => {
  const [showpreview, setshowpreview] = useState(false);
  // const navigate = useNavigate();
  const previewModalref = useRef(null);

  const previewModal = () => {
    setshowpreview((showpreview) => !showpreview);
  };

  return (
    <>
      <button
        className="border-2  border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-400   rounded-md bg-primaryMain  dark:bg-secondary px-4 py-1 font-semibold text-white"
        ref={previewModalref}
        onClick={() => {
          previewModal();
        }}
      >
        Show Preview
      </button>

      <div className="">
        {showpreview && (
          <PreviewModal
            blogData={blogData}
            previewModal={previewModal}
          ></PreviewModal>
        )}
      </div>
    </>
  );
};

export default ShowPreview;
