import "./App.css"
import { useState, useEffect, useCallback, useMemo} from "react";


function App() {

    const presskey = (e) => {
      console.log(e)
    const Sound = document.querySelector(`audio[data-keys="${e.keyCode}"]`)
    if(!Sound) return;
    Sound.currentTime = 0;
    Sound.play();
  
  } 
  
  window.addEventListener('keydown', presskey)
  
  return(
  <div id="drum-machine">
    <div className="inner1">
      <button className="drum-pad" id="Heater 1">Q<audio data-keys={81} src="../Audio/Heater-1.mp3" className="clip" id="Q"></audio></button>
      <button className="drum-pad" id="Heater 2">W<audio data-keys={87} src="../Audio/Heater-2.mp3" className="clip" id="W"></audio></button>
      <button className="drum-pad" id="Heater 3">E<audio data-keys={69} src="../Audio/Heater-3.mp3" className="clip" id="E"></audio></button>
      <button className="drum-pad" id="Heater 4">A<audio data-keys={65} src="../Audio/Heater-4_1.mp3" className="clip" id="A"></audio></button>
      <button className="drum-pad" id="Clap">S<audio data-keys={83} src="../Audio/Heater-6.mp3" className="clip" id="S"></audio></button>
      <button className="drum-pad" id="Open-HH">D<audio data-keys={68} src="../Audio/Dsc_Oh.mp3" className="clip" id="D"></audio></button>
      <button className="drum-pad" id="Kick-n'-Hat">Z<audio data-keys={90} src="../Audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio></button>
      <button className="drum-pad" id="Kick">X<audio data-keys={88} src="../Audio/RP4_KICK_1.mp3" className="clip" id="X"></audio></button>
      <button className="drum-pad" id="Closed-HH">C<audio data-keys={67} src="../Audio/Cev_H2.mp3" className="clip" id="C"></audio></button>
    </div>
    <div className="inner2">
      <i className="fa-solid fa-toggle-on fa-4x switch" id="knob"></i>
      <div id="display" className="text-center"></div>
      <input type="range" min="1" max="100" className="volume"></input>
    </div>
    
  </div>
  )
}

export default App
