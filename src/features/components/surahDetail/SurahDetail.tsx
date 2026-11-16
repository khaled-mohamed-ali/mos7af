import React from 'react'
import { useLocation } from 'react-router';

function SurahDetail() {

      const location = useLocation();
      const surah = location.state;

      setTimeout(() => {
        console.log("SurahDetail surah:", surah);
      }, 3000);
//   return (
//     <div>{surah?.name_arabic}</div>
//   )




return (
  <section className="surah-reader" dir="rtl">
    <div className="surah-content">
      
          <span className="ayah" key={surah.number}>
            {surah.name_arabic}
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