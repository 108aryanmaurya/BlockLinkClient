import React, { useContext, useEffect, useState } from "react";
import CommentLikeContext from "../../../Helper/Context/CommentLikeContext";
import { toast } from "react-toastify";

const CommentLikeIcon = ({ comment }) => {
  //   console.log(comment);
  const context5 = useContext(CommentLikeContext);
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [likecount, setlikecount] = useState(0);
  const {
    countcommentLike,
    deletecommentlike,
    addcommentlike,

    Checkcommentlike,
  } = context5;
  // console.log(comment);
  useEffect(() => {
    console.log(comment);
    async function countLike2() {
      setlikecount(await countcommentLike(comment?._id));
      setliked(
        await Checkcommentlike({
          userId: JSON.parse(localStorage.getItem("UserData"))?.userDetailId,
          commentId: comment?._id,
        })
      );
    }
    countLike2();
  }, []);

  const like = async () => {
    console.log(liked);
    if (liked == true) {
      await deletecommentlike({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        commentID: comment?._id,
      });
      setlikecount(await countcommentLike(comment._id));

      toast.success("like deleted");
      setliked(!liked);
    } else {
      console.log("addin");
      await addcommentlike({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        commentID: comment?._id,
      });
      setlikecount(await countcommentLike(comment._id));
      toast.success("like addedd");
      setliked(!liked);
    }
  };

  const dislike = async () => {
    if (liked == true) {
      await deletecommentlike({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        commentID: comment?._id,
      });
      setlikecount(await countcommentLike(comment._id));
    }
    setliked(false);
    setdisliked(!disliked);
  };

  return (
    <section className="flex gap-1 mr-2  items-center ">
      <div
        className="rounded-full max-sm:px-[7px]  max-sm:py-[6px]  py-2 px-3    group/btn flex justify-center items-center transition ease-in-out"
        onClick={like}
      >
        {" "}
        <p className="text-xs   text-gray-700 dark:text-gray-300 max-sm:text-xs ">
          {likecount}
        </p>
        <i
          className={` ml-[4px]    ${
            liked
              ? " text-primaryMain fa fa-thumbs-up"
              : " fa fa-thumbs-up  text-black dark:text-white"
          }   text-[16px] max-sm:text-[13px] `}
        ></i>
      </div>
      <div onClick={dislike}>
        <button>
          <i
            className={` ml-[4px]    ${
              disliked
                ? " text-primaryMain fa fa-thumbs-down"
                : " fa fa-thumbs-down  text-black dark:text-white"
            }   text-[16px] max-sm:text-[13px] `}
          ></i>
        </button>
      </div>
    </section>
  );
};

export default CommentLikeIcon;
