import { useState, useContext, useEffect } from "react";
import blogContext from "../Helper/Context/blogContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TitleandContent from "../Component/common/WriteComponents/TitleandContent";
import FeaturedImage from "../Component/common/WriteComponents/FeaturedImage";
import Content from "../Component/common/WriteComponents/Content";
import Category from "../Component/common/WriteComponents/Category";
import Tag from "../Component/common/WriteComponents/Tag";

const UpdateBlog = ({ UserDetails, blog2 }) => {
  const [blogs, setblog] = useState(blog2[0]);
  console.log(blog2);

  const [category, setcategory] = useState("");
  const [featuredImage, setfeaturedImage] = useState(blog2[0]?.Blog_url);

  useEffect(() => {
    setblog(blog2[0]);
    setcategory(blog2[0]?.Category);
    settags(blog2[0]?.tags);
    setfeaturedImage(blog2[0]?.Blog_url);
  }, [blog2]);

  useEffect(() => {
    let input = {
      Blog_url: featuredImage,
    };
    setblog({
      ...blogs,
      ...input,
      Category: category,
    });
    console.log(blogs);
  }, [featuredImage, category]);

  useEffect(() => {
    localStorage.setItem(
      "BlogData",
      JSON.stringify({ ...blogs, author: UserDetails })
    );
  }, [blogs]);

  const context = useContext(blogContext);

  const { updateblog } = context;

  const [tags, settags] = useState(blog2[0]?.tags);

  const updateDesc = (content) => {
    let blogcontent = {
      _id: blog2[0]?.blogcontent?._id,
      description: content,
    };

    setblog({ ...blogs, blogcontent });
  };
  const getTags = (e) => {
    let str = e.target.value;
    let strarr = str.split(",");

    settags(strarr);

    setblog({ ...blogs, tags: strarr });
    console.log(blogs);
  };
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = {
      [name]: value,
    };
    setblog({ ...blogs, ...input });
    console.log(blogs);
  };
  const handleadd = () => {
    try {
      console.log(blog2[0]);
      console.log({ blogs });
      updateblog(blogs, blog2[0]._id);
      console.log("Saved to Database");
      toast.success("Blog Updated Successfully");
    } catch (error) {
      toast.error("Error occured while adding your blog");
    }
  };

  return (
    <section className="p-4 rounded-lg flex  dark:text-white dark:bg-darkBgPrimary">
      <div className=" w-[70%] px-6 p-3">
        <TitleandContent blogs={blogs} getInput={getInput}></TitleandContent>
        <Content blogs={blogs} updateDesc={updateDesc}></Content>
      </div>
      <div className="w-[30%] flex   flex-col justify-between my-3  ">
        <div className="">
          <Category
            blogs={blogs}
            category={category}
            setcategory={setcategory}
            getInput={getInput}
          ></Category>

          <Tag tags={tags} getTags={getTags}></Tag>
          <FeaturedImage
            setfeaturedImage={setfeaturedImage}
            featuredImage={featuredImage}
            blogs={blogs}
            setblog={setblog}
            getInput={getInput}
          ></FeaturedImage>
        </div>
        <button
          className="mx-3 rounded-md border-2 dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-white dark:hover:border-0  text-white    pr-10 pl-10 pt-2 pb-2  bg-primaryMain"
          onClick={handleadd}
        >
          Update
        </button>
      </div>

      <div className="flex justify-center items-center "></div>
    </section>
  );
};

export default UpdateBlog;
