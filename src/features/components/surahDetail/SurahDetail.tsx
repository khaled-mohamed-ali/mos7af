import React from 'react'
import { useLocation } from 'react-router';
import { useGetOneSurahQuery } from '../../pages/surahs-page/surahsApi';

function SurahDetail() {

    const location = useLocation();
    const surah = location.state;
    const { oneSurah } = useGetOneSurahQuery(surah?.number)


    setTimeout(() => {
        console.log("oneSurah", oneSurah)
    }, 1000);




    return (
        <section className="surah-reader" dir="rtl">
            <div className="surah-content">
                {oneSurah.name_arabic}
                <span className="ayah" key={surah.number}>
                    <span className="ayah-number">
                        {surah.number}
                    </span>
                    {" "}
                </span>

            </div>

            <hr className="surah-divider" />
        </section>
    );
}


export default SurahDetail