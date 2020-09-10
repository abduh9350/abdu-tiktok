import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>TIKTOK</h1>
      <div className="app_videos">
        <Video
          url="https://www.pexels.com/video/a-man-working-with-two-laptops-while-looking-at-notes-stick-on-the-board-behind-3253737/"
          channel="Abdu"
          description="tiktok video 1"
          song="new music"
          likes={111}
          messages={222}
          shares={333}
        />
        <Video
          url="https://www.pexels.com/video/a-man-working-with-two-laptops-while-looking-at-notes-stick-on-the-board-behind-3253737/"
          channel="Abdu"
          description="tiktok video 1"
          song="new music"
          likes={111}
          messages={222}
          shares={333}
        />
      </div>
    </div>
  );
}

export default App;
