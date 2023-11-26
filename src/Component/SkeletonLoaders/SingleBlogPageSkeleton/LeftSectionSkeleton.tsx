import React from "react";

const LeftSectionSkeleton = () => {
  return (
    <section className="flex max-sm:mt-3 mt-10 max-2xl:w-full   flex-col justify-center items-center max-2xl:flex-row max-lg:flex-col max-md:flex-row max-2xl:justify-evenly">
    <div className="flex  max-sm:mb-7 flex-col justify-center items-center border-b-[1px] dark:border-darkBorderAll max-md:border-0">
      <p className="text-3xl max-sm:text-lg max-md:text-[26px] font-semibold py-3 max-sm:py-[10px]">
        Author
      </p>

      <div className=" flex max-sm:w-[90px]  max-sm:h-[90px] bg-lightSkeleton  shadow  animate-pulse   w-28 h-28 dark:bg-darkSkeleton rounded-full  justify-centeritems-center"> 
        
      </div>
      <div className=" flex gap-5 max-sm:gap-0 max-md:gap-0 flex-col mt-2 max-sm:mt-0  justify-center items-center ">
       
        <p className="py-6  bg-lightSkeleton  shadow  animate-pulse  dark:bg-darkSkeleton  max-md:py-3 max-sm:text-[15px] md:py-3 opacity-70 tracking-[-1px] max-sm:h-1  max-sm:w-16 max-sm:mt-1 ">
      
         
        </p>
      </div>
    </div>

    <div className="max-xl:flex max-xl:flex-col max-sm:pb-14  pb-8 items-center justify-center flex flex-col max-xl:justify-center max-xl:items-center">
      <p className=" text-3xl max-md:text-[26px] max-sm:text-lg font-semibold py-3">
        Share the article
      </p>
      {
        <ul className="grid grid-cols-2  max-xl:gap-5 justify-start items-center gap-2  max-sm:gap-[5px] ">
          <li className="bg-lightSkeleton  shadow  animate-pulse  dark:bg-darkSkeleton   w-8 h-8 justify-center items-center"></li>
          <li className="bg-lightSkeleton  shadow  animate-pulse  dark:bg-darkSkeleton   w-8 h-8    justify-center items-center"></li>
          <li className="bg-lightSkeleton  shadow  animate-pulse  dark:bg-darkSkeleton   w-8 h-8    justify-center items-center"></li>
          <li className="bg-lightSkeleton  shadow  animate-pulse  dark:bg-darkSkeleton  shadow  animate-pulse  w-8 h-8    justify-center items-center"></li>
        
          
        </ul>
      }
    </div>
  </section>
  );
};

export default LeftSectionSkeleton;
