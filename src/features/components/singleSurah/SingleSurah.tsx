import React from 'react'

const SingleSurah = ({ surah, displayName }: { surah: any; displayName: string }) => {
  return (
   <div
              className="bg-white border border-gray-200 rounded-xl py-5 px-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center justify-center min-h-[64px]"
            >
              <span className="text-gray-900 font-bold text-lg tracking-wide">
                {displayName}
              </span>
            </div> 
             )
}

export default SingleSurah