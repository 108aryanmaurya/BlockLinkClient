import { profileDefault } from "../../Assets/icons";
import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";
const LeftSection = ({ blog }) => {
  return (
    <section className="flex max-sm:mt-3 mt-10 max-2xl:w-full   flex-col justify-center items-center max-2xl:flex-row max-lg:flex-col max-md:flex-row max-2xl:justify-evenly">
      <div className="flex  flex-col justify-center items-center border-b-[1px] dark:border-darkBorderAll max-md:border-0">
        <p className="text-3xl max-sm:text-lg max-md:text-[26px] font-semibold py-3 max-sm:py-1">
          Author
        </p>
        <div className=" flex  justify-centeritems-center">
          <img
            src={
              blog?.author?.profileImg
                ? blog?.author?.profileImg
                : profileDefault
            }
            alt=""
            className=" max-sm:w-[90px] max-sm:h-[90px]   w-28 h-28  border-2 object-cover object-top rounded-full "
          />
        </div>
        <div className=" flex gap-5 max-sm:gap-0 max-md:gap-0 flex-col mt-2 max-sm:mt-0  justify-center items-center ">
          <p className="dark:hover:text-secondary  max-sm:leading-0  leading-9 md:leading-5 text-center mt-1 max-sm:mt-0 font-montserrat max-sm:text-[15px] font-semibold text-xl max-sm:mb-[-12px] text-gray-700  ">
            {blog?.author?.username}
          </p>
          <p className="py-6  max-sm:py-0 max-md:py-3 max-sm:text-[15px] md:py-3 opacity-70 tracking-[-1px] ">
            {new Date(blog?.Date).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="max-xl:flex max-xl:flex-col max-sm:pb-14  pb-8 items-center justify-center flex flex-col max-xl:justify-center max-xl:items-center">
        <p className="text-3xl max-md:text-[26px] max-sm:text-lg font-semibold py-3">
          Share the article
        </p>
        {
          <ul className="grid grid-cols-2  max-xl:gap-5 justify-start items-center gap-2  max-sm:gap-[5px] ">
            {shareData.map((share, index) => (
              <Share share={share} check={false} key={index}></Share>
            ))}
          </ul>
        }
      </div>
    </section>
  );
};

export default LeftSection;
