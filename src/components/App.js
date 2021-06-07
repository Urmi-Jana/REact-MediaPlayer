import React from "react";
import Header from "./Heading"
import Footer from "./Footer"
import MediaPlayer from "./MediaPlayer";
import Audio from "./Audio";
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
      <Audio />
      
      <Footer />
    </div>
  )
}
export default App;
