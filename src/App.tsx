import {  useEffect, useState, type JSXElementConstructor, type Key, type ReactElement, type ReactNode, type ReactPortal } from "react";

import "./App.css";

function App() {
  // const [data, setData] = useState<any>();

  // useEffect(() => {
  //   async function getAllQuraan() {
  //     const response = await fetch("https://ummahapi.com/api/quran/surahs");
  //     const surahs = await response.json();
  //     setData(surahs);
  //   }
  //   getAllQuraan();
  // }, []);

  // return (
  //   <>
  //     <ul>
  //       {data?.data?.surahs?.map((surah: { name_arabic: string }) => (
  //         <li key={surah.name_arabic}>{surah.name_arabic}</li>
  //       ))}
  //       12
  //     </ul>
  //   </>
  // );

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllQuran() {
      try {
        const response = await fetch("https://ummahapi.com/api/quran/surahs");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getAllQuran();
  }, []);

  if (loading)
    return <p className="text-center p-4 text-slate-300">Loading...</p>;

  return (
    <div className="quran-container">
      <h2 className="quran-header" dir="rtl">
        قائمة السور
      </h2>

      <div className="quran-list-container">
        <ul className="surah-grid" dir="rtl">
          {data?.data?.surahs.map((surah: any) => (
            <li key={surah.id} className="surah-item">
              <button className="surah-card">{surah.name_arabic}</button>
              {surah.name_arabic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default App;
