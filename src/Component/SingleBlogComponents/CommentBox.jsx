import React, { useContext, useEffect, useState } from "react";
import { code1 } from "../../Assets/images";
import Reply from "./Reply";
import UserReplies from "./UserReplies";
import HelperContext from "../../Helper/Context/HelperContext";
import CommentLikeContext from "../../Helper/Context/CommentLikeContext";
import { profileDefault } from "../../Assets/icons";
import CommentSettings from "./CommentSettings";
import EditComment from "./EditComment";
import CommentLikeIcon from "../common/IconComponents/CommentLikeIcon";

const CommentBox = ({ comment, depth, maxdepth }) => {
  const constext = useContext(HelperContext);
  const context3 = useContext(CommentLikeContext);
  const { getreply, reply } = context3;
  const [edit, setedit] = useState(false);
  const { formatUTCDate, date } = constext;
  // console.log(comment);
  const [data, setdata] = useState({});
  const [showReply, setshowReply] = useState(false);

  useEffect(() => {
    async function f() {
      setdata(await getreply(comment?._id));
      console.log(data);
    }
    f();
    console.log(comment.Date);
  }, [comment]);

  useEffect(() => {}, [data]);

  const handleReplySubmit = async () => {
    setdata(await getreply(comment?._id));
  };

  const [replyBox, setreplyBox] = useState(false);

  return (
    <section className="">
      <article className="pl-6 max-sm:pl-3 py-3 rounded-lg  bg-white  dark:bg-darkBgPrimary max-sm:rounded-sm  max-sm:mt-2 text-base mt-3 ">
        <footer className=" flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="inline-flex items-center mr-[7px] text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="dark:bg-slate-300  w-6 h-6 bg-gray-200 rounded-full"
                src={
                  comment?.author?.profileImg
                    ? comment?.author?.profileImg
                    : profileDefault
                }
                alt="commentor"
              />
            </div>
            <div className=" max-sm:flex-col">
              <p className="max-sm:text-[13px]">{comment?.author?.username}</p>

              <p className="text-[13px] max-sm:text-[11px] font-semibold dark:text-gray-300 text-gray-500">
                {comment.isEdited && "(Edited) "}
                {new Date(comment?.Date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <CommentSettings
            edit={edit}
            setedit={setedit}
            comment={comment}
          ></CommentSettings>
        </footer>
        <div className="ml-3 dark:border-gray-400 border-l-2 pl-3  ">
          {edit ? (
            <EditComment
              // reply={reply}
              // setreply={setreply}
              key={comment?._id}
              comment={comment}
              // commentID={comment?._id}
              // setshow={setreplyBox}
              // show={true}
              edit={edit}
              setedit={setedit}
              // onReplySubmit={handleReplySubmit}
            ></EditComment>
          ) : (
            <p className=" max-sm:text-[14px] text-gray-500 dark:text-gray-200">
              {comment.text}
            </p>
          )}
          <div className="flex mt-4 max-sm:mt-1 gap-3 max-sm:gap-0 flex-col items-start">
            <div className="flex items-center  space-x-4">
              <CommentLikeIcon comment={comment}></CommentLikeIcon>

              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                onClick={() => {
                  setreplyBox(true);
                }}
              >
                <svg
                  className="mr-1.5 max-sm:w-[15px] w-3  h-3.5  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                <p className="text-[12px]"> Reply</p>
              </button>
            </div>
            <div
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              onClick={() => {
                setshowReply(!showReply);
              }}
            >
              {data?.children?.length > 0 &&
                `(${data?.children?.length}) 
             
              ${data?.children?.length > 1 ? "Replies" : "Reply"}`}
            </div>
          </div>
          {JSON.parse(localStorage.getItem("UserData")) && (
            <Reply
              // reply={reply}
              // setreply={setreply}
              key={comment?._id}
              comment={comment}
              // commentID={comment?._id}
              setshow={setreplyBox}
              show={replyBox}
              onReplySubmit={handleReplySubmit}
            ></Reply>
          )}
        </div>
        {
          // depth < maxdepth &&
          // data.children &&
          showReply &&
            data.children?.length > 0 &&
            data?.children?.map((item) => {
              // console.log(item);
              return (
                <CommentBox
                  key={item._id}
                  depth={depth + 1}
                  maxdepth={maxdepth}
                  comment={item}
                ></CommentBox>
              );
            })
        }
      </article>
    </section>
  );
};

export default CommentBox;
