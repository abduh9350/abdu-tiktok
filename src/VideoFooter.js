import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="video_footer">
      <div className="videoFooter_text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://abduh9350.github.io/Portfolio/images/20200803_230735.jpg"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
