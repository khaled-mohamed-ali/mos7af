import React from "react";
// @ts-expect-error surahsApi is JavaScript and currently has no declaration file.
import { useGetSurahsQuery } from "./surahsApi";
import { NavLink, useNavigate, useParams } from "react-router";
import SingleSurah from "../../components/singleSurah/SingleSurah";

function Surahs(): React.JSX.Element {
  const { data, isLoading, isError } = useGetSurahsQuery();
  const navigate = useNavigate();

  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-gray-500 font-medium">Loading surahs...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 font-medium">Failed to load surahs.</p>
      </div>
    );
  }

  // Handle nested data response gracefully (data?.data?.surahs or data?.surahs)
  const surahsList = data?.data?.surahs || data?.surahs || [];

  return (
    <div className="max-w-6xl mx-auto p-6" dir="rtl">
      {/* 4 columns grid on large screens, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {surahsList.map((surah: any) => {
          // Add "سورة" prefix if it's not already included in name_arabic
          const arabicName = surah.name_arabic || surah.name || "";
          const displayName = arabicName.startsWith("سورة")
            ? arabicName
            : `سورة ${arabicName}`;


          return (

            <button
              onClick={() =>
                navigate("/SurahDetail", {
                  state: surah,
                })
              }
            >
              <SingleSurah  displayName={displayName} />
            </button>

            // <NavLink key={surah.number} to="/SurahDetail" state={{ displayName }}>
            //   >
            // </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Surahs;
