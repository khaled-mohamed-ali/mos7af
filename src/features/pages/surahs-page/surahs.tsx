import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


function Surahs(): any {
const { data: surahs, isLoading, isError, error } = useGetSurahsQuery();

if (isLoading) return <p>Loading surahs...</p>;

if (isError) {
  return <p>Failed to load surahs.</p>;
}

return <div> fdf</div>
}

export default Surahs;



