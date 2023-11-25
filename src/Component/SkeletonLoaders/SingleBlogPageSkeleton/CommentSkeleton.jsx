import React from "react";

const CommentSkeleton = () => {
  return (
    <div className="w-full mx-auto max-sm:mb-6 max-sm:mt-6 px-4">
      <div className="flex justify-between items-center max-sm:mb-2 mb-6">
        <h2 className="text-lg lg:text-2xl max-sm:ml-3 max-sm:text-[17px] font-bold text-gray-900 dark:text-white">
          Comments
        </h2>
      </div>

      <form>
        <div
          className="max-sm:rounded-md max-sm:px-2 max-sm:py-1 py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 
    max-sm:mb-1 dark:bg-darkBgPrimary dark:border-gray-700"
        >
          <label className="sr-only">Your comment</label>
          <textarea
            id="comment"
            rows="6"
            name="comment"
            onChange={(e) => {}}
            className="dark:text-white px-0 w-full text-sm text-gray-900 bg-transparent border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CommentSkeleton;
