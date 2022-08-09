import React from "react";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Note(props){
    return <div className="note"><h1>{props.authorName}</h1><p className="mainTxt">{props.txt}</p><p class="time">{props.time}</p>
    <button>{">>"}
        {/* <ArrowForwardIosIcon /> */}
      </button></div>
}

export default Note