import React from 'react';
import './index.css'; // Import CSS file for styling

const Biography = () => {
  return (
    <div className="biography-container">
      <div className="biography-text">
        <h1>Harmonizing Tales: The Journey of Ed Sheeran</h1>
        <p>
          Edward Christopher Sheeran, widely known as Ed Sheeran, was born on February 17, 1991, in Halifax, West Yorkshire, England. Raised in Framlingham, Suffolk, Sheeran's early passion for music was nurtured by his parents, who introduced him to a diverse range of musical influences. At the age of eleven, he picked up the guitar, marking the beginning of his musical journey.
        </p>
        <p>
          Sheeran's talent and dedication quickly became evident as he started performing at local venues and honing his songwriting skills. His debut studio album, "+", released in 2011, showcased his unique blend of folk, pop, and acoustic elements, earning him widespread acclaim and launching him into the spotlight. Hits like "The A Team" and "Lego House" propelled him to international fame, establishing him as a rising star in the music industry.
        </p>
        <p>
          Since then, Sheeran's career has soared to new heights with multiple chart-topping albums, including "x" (2014) and "÷" (2017), featuring iconic songs such as "Shape of You" and "Thinking Out Loud." Beyond his musical achievements, Sheeran is also known for his philanthropic efforts, using his platform to support various charitable causes and advocate for social change. With his soulful voice, heartfelt lyrics, and unwavering passion, Ed Sheeran continues to inspire audiences worldwide, leaving an indelible mark on the music industry and beyond.
        </p>
      </div>
      <div className="biography-image">
        <img src="./images/ed.jpg" alt="Ed Sheeran" />
      </div>
    </div>
  );
}

export default Biography;
