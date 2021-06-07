import React, { useState } from 'react'
 
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

function Recorder(){
    const [recordState, setState] = useState(null);

    function start() {
        setState( RecordState.START)
    }

    
    function stoping() {
        setState( RecordState.STOP)
    }   
    
    return(
        <div>
            <AudioReactRecorder state = {recordState} canvasHeight = "100px" />

            <button onClick = {start}>Start</button>
            <button onClick = {stoping}>Stop</button>
        </div>
    )
}

export default Recorder;