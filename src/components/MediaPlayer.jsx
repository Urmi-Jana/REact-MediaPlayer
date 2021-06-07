import React, { useState } from "react";
import ReactPlayer from "react-player";


function MediaPlayer()
{
    const [link, setLink] = useState("")
    const [button, setButton] = useState("")
    const [mouse, setMouse] = useState(false)

    function mouseChange(){
        setMouse(true)
    }

    function colorChange(){
        setMouse(false)
    }

    function giveLink(event){
        setLink(event.target.value)
    }

    function handleClick(event){
        setButton(link)
        event.preventDefault();
    }

return(
    <div>
        <ReactPlayer className = "video"
                url = {button}
                controls       
        />
        <ReactPlayer className = "audio"
            url = {button}
            width = "400px"
            height = "50px"
            playing = {false}            
            />

        <input type = "text" onChange = {giveLink} placeholder = "Insert Link" />
        <button 
            style = {{background: mouse? "black" : null}} 
            type = "submit"
            onClick = {handleClick}
            onMouseOver = {mouseChange}
            onMouseOut = {colorChange} 
        >
            Submit
        </button>
    </div>
);}

export default MediaPlayer;