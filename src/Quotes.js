import React from 'react';
import './index.css'; // Import CSS file

const Quotes = () => {
  return (
    <div className="quotes-container">
      <div className="quote-bg">
      <div className="overlay"></div>
        <div className="quote-text">
          <p>"Love yourself first, flaws and all." - (Inspired by "Castle on the Hill")</p>
          <p>"Obstacles are just detours on the road to success." - (Inspired by "You Need Me, I Don't Need You")</p>
          <p>"Life is a journey; cherish every moment captured in memories." - (Inspired by "Photograph")</p>
          <p>"Love has the power to transform and heal." - (Inspired by "Thinking Out Loud")</p>
          <p>"Empathy is understanding another's struggles without judgment." - (Inspired by "The A Team")</p>
          <p>"Strength lies in embracing vulnerability." - (Inspired by "I'm a Mess")</p>
          <p>"Build relationships like you build a Lego house, with care and dedication." - (Inspired by "Lego House")</p>
          <p>"Follow your passion; let your creativity be your compass." - (Inspired by Ed Sheeran's career journey)</p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
