import React from "react";

export default function Highlights() {
  return (
    <div id="portfolio" className="highlights">
      <div className="highlights-container container">
       <div className="highlights__title">
        <h2>Web development highlights</h2>
       </div>
       
        <div className="highlight highlight--reverse">
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://kafene-react-app.pages.dev/user"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
          <div className="rightbox">
            <h2>The Kafene</h2>
          </div>
        </div>

        <div className="highlight ">
          <div className="rightbox">
            <h2>Rajat Portfolio</h2>
          </div>
          <div className="leftbox">
            <iframe
              id="highlights "
              src="https://rajat-sha7.github.io/rajat-portfolio/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
        </div>
        <div className="highlight highlight--reverse">
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://rajat-sha7.github.io/microsoft-homepage-copy/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
          <div className="rightbox">
            <h2>Microsoft Clone</h2>
          </div>
        </div>

        <div className="highlight ">
          <div className="rightbox">
            <h2>The Gym Club</h2>
          </div>
          <div className="leftbox">
            <iframe
              id="highlights"
              src="https://gym-website-41s.pages.dev/"
              seamless="seamless"
              frameborder="0"
              height="100%"
              width="100%"
              title="Iframe Example"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
