import React from "react";
import Header from "./Heading"
import Footer from "./Footer"
import MediaPlayer from "./MediaPlayer";
import Recorder from "./Recorder";
// import Form from "./Form.jsx"

const App = () => {
  return (
    <div className = "container">
      <Header />    
     
      <br />

      <h1>Media Player</h1>
      <MediaPlayer />

      <br />

      <h1>Audio Recorder</h1>
      <Recorder />
      
      <Footer />
    </div>
  )
}
export default App;
