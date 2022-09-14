import React from "react";
import Recorder from "./Recorder";

function Audio(){


    let [audioURL, isRecording, startRecording, stopRecording] = Recorder();
    return(
    <div className = "audio">
        <audio className = "player" src = {audioURL} controls />

        <button className = "click"
         onClick = {startRecording} 
         disabled = {isRecording} 
          >Start</button>

        <button className = "click" 
        onClick = {stopRecording} 
        disabled = {!isRecording} 
         >Stop</button>
    </div>
    )
}   

export default Audio;


