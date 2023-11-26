import React from 'react'
import { shareData } from '../../constants'
import ShareSkeleton from '../ShareSkeleton'

const RightSectionSkeleton = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[90%] p-2 max-sm:mt-2  dark:border-gray-700">
        <h5 className="text-xl w-full my-2  max-sm:ml-2 font-semibold leading-none text-gray-900 dark:text-white max-sm:text-[17px]">
          Similar Blogs
        </h5>
        <ul className="divide-y divide-gray-200 dark:divide-darkBorderAll">
          <li className="py-3 max-sm:py-2 sm:py-4    bg-lightSkeleton  shadow  animate-pulse   w-44 max-sm:mb-2 max-sm:rounded-sm h-8 dark:bg-darkSkeleton  hover:bg-gray-100 dark:hover:bg-darkBgPrimary px-2 cursor-pointer" 
          ></li>
          <li className="py-3 max-sm:py-2 sm:py-4    bg-lightSkeleton  shadow  animate-pulse   w-44 max-sm:mb-2 max-sm:rounded-sm h-8 dark:bg-darkSkeleton  hover:bg-gray-100 dark:hover:bg-darkBgPrimary px-2 cursor-pointer" 
          ></li>
          <li className="py-3 max-sm:py-2 sm:py-4    bg-lightSkeleton  shadow  animate-pulse   w-44 max-sm:mb-1 max-sm:rounded-sm h-8 dark:bg-darkSkeleton  hover:bg-gray-100 dark:hover:bg-darkBgPrimary px-2 cursor-pointer" 
          ></li>
        </ul>
      
      </div>
    </section>
  )
}

export default RightSectionSkeleton