import React, { useContext, useEffect, useState } from "react";
import CommentLikeContext from "../../../Helper/Context/CommentLikeContext";
import { toast } from "react-toastify";

const Like = ({ card }) => {
  const context5 = useContext(CommentLikeContext);
  const [liked, setliked] = useState(false);
  const [likecount, setlikecount] = useState(0);
  const {
    // addbookmark,
    // deletebookmark,
    deletelike,
    addlike,
    countLike,
    Checklike,
    // countBookmark,
  } = context5;
  // console.log(card);
  useEffect(() => {
    async function countLike2() {
      setlikecount(await countLike(card?._id));

      setliked(
        await Checklike({
          userId: JSON.parse(localStorage.getItem("UserData"))?.userDetailId,
          postId: card?._id,
        })
      );
    }
    countLike2();
  }, [card]);

  const like = async () => {
    if (liked == true) {
      await deletelike({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        postID: card?._id,
      });
      setlikecount(await countLike(card._id));

      setliked(!liked);
    } else {
      await addlike({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        postID: card?._id,
      });
      setlikecount(await countLike(card._id));
      setliked(!liked);
    }
  };

  return (
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
            ? "text-red-500 dark:text-red-500 fa fa-heart"
            : " fa fa-heart-o text-black dark:text-white"
        }   text-[16px] max-sm:text-[13px] `}
      ></i>
    </div>
  );
};

export default Like;
