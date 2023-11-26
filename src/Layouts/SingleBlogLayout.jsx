import React, { useContext, useEffect, useState } from "react";

import SingleBlog from "../Pages/SingleBlog";
import { useLocation, useParams } from "react-router";

import blogContext from "../Helper/Context/blogContext";
import CommentLikeContext from "../Helper/Context/CommentLikeContext";
import SingleBlogPageSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton";
const SingleBlogLayout = () => {
  const location = useLocation();

  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;
  const context2 = useContext(CommentLikeContext);
  const { updateViews } = context2;
  const [loading, setloading] = useState(true);

  const { id } = useParams();
  const [Id, setId] = useState(id);
  useEffect(() => {
    getsingleblogContent(id)
      .then(() => {
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setloading(false);
      });
  }, [Id, id]);

  useEffect(() => {
    // Start the timer when the component mounts
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsedSeconds = (currentTime - startTime) / 1000;

      if (elapsedSeconds >= 10) {
        if (SingleBlogContent[0]?.view === "NaN") {
          updateViews({ view: "0", id });
        } else {
          updateViews({ view: SingleBlogContent[0]?.view, id });
        }
        clearInterval(intervalId); // Stop the timer
      }
    }, 1000);

    // Clean up the timer when the component unmounts
  }, [SingleBlogContent]);
  return (
    <>
      {
        <section>
          <SingleBlog
            loading={loading}
            blog1={SingleBlogContent[0]}
          ></SingleBlog>
        </section>
      }
    </>
  );
};

export default SingleBlogLayout;
