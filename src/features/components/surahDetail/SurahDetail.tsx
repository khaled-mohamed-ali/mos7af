import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useGetOneSurahQuery } from "../../pages/surahs-page/surahsApi";
import "./SurahDetail.css";
import { QuranAudioPlayer } from "../audioPlayer/audioPlayer";

function SurahDetail() {
  const location = useLocation();
  const surah = location.state;
  const { data, isLoading, isError } = useGetOneSurahQuery(surah?.number);

  useEffect(() => {
    if (data) {
      console.log("oneSsurah", data.audio[0]?.surah_audio);
    }
  });

  return (
    <section className="surah-reader" dir="rtl" lang="ar">
      <div className="surah-content">
        {data?.verses.map((ayah: any) => {
          return (
            <span className="ayah" key={ayah?.number}>
              <span className="ayah-text">{ayah?.arabic}</span>
              <span className="ayah-number-badge">
                <span className="ayah-number text-sm">{ayah?.ayah}</span>
              </span>
            </span>
          );
        })}
      </div>
      <hr className="surah-divider" />

      <QuranAudioPlayer audioSrc={data?.audio[0]?.surah_audio} surahName={""} />
    </section>
  );
}

export default SurahDetail;
