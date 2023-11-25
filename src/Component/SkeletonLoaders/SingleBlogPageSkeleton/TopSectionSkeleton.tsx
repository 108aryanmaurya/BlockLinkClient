import React from 'react'

const TopSectionSkeleton = () => {
  return (
    <div className="flex bg-slate-50 max-sm:mt-3  dark:text-white w-[100%] dark:bg-darkBgMain flex-col max-sm:gap-0 max-sm:py-2 gap-20 py-20 justify-center items-center">
    <div className=" w-[100%] justify-center items-center relative flex max-w-[70%] flex-col   justify-center  max-sm:gap-0  gap-2">
      <p className="tracking-[2px]  w-[80px] max-sm:rounded-sm h-12 max-sm:h-4    bg-gray-200  dark:bg-darkSkeleton font-semibold dark:text-secondary text-primaryMain  max-sm:mb-[8px] ">
     </p>
      <h1 className=" bg-gray-200  max-sm:rounded-sm  dark:bg-darkSkeleton w-[100%] max-sm:h-6 h-12 font-bold leading-[75px] text-[65px] font-serif">
      </h1>
    </div>
    <div className=" max-sm:h-40 max-sm:mt-8 bg-gray-200  dark:bg-darkSkeleton 700   overflow-hidden w-[100%]  max-lg:h-auto">
    
    </div>
  </div>
  )
}

export default TopSectionSkeleton