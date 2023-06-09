import "./App.css"
import { useEffect, useState} from "react";
import play1 from "../public/Heater-1.mp3"
import play2 from "../public/Heater-2.mp3"
import play3 from "../public/Heater-3.mp3"
import play4 from "../public/Heater-4_1.mp3"
import play5 from "../public/Heater-6.mp3"
import play6 from "../public/Dsc_Oh.mp3"
import play7 from "../public/Kick_n_Hat.mp3"
import play8 from "../public/RP4_KICK_1.mp3"
import play9 from "../public/Cev_H2.mp3"


function App() {
  
  const vol = document.querySelectorAll(".drum-pad");
  
  const [volume, setVolume] = useState(30);
  const [audioname, setAudioname] = useState("")

  function changeVolume (e) {
    console.log(e)
    setVolume(e.target.value)
  
  }
    
    const hit = () => {
        const clips = document.querySelectorAll('.clip');
        [...clips].forEach(item => item.volume = volume / 100)
    }
    [...vol].forEach(i => i.addEventListener("click", hit))
    
    const presskey = (e) => {
      hit()
      const Sound = document.querySelector(`audio[data-keys="${e.keyCode}"]`)
      if(!Sound) return;
      Sound.currentTime = 0;
      Sound.play();
      setAudioname(Sound.parentNode.id)
  
  } 
    
    window.addEventListener('keydown', presskey)

    
  return(
  <div id="drum-machine">
    <div className="inner1">
      <button className="drum-pad" id="Heater 1">Q<audio data-keys={81} src={play1} className="clip" id="Q"></audio></button>
      <button className="drum-pad" id="Heater 2">W<audio data-keys={87} src={play2} className="clip" id="W"></audio></button>
      <button className="drum-pad" id="Heater 3">E<audio data-keys={69} src={play3} className="clip" id="E"></audio></button>
      <button className="drum-pad" id="Heater 4">A<audio data-keys={65} src={play4} className="clip" id="A"></audio></button>
      <button className="drum-pad" id="Clap">S<audio data-keys={83} src={play5} className="clip" id="S"></audio></button>
      <button className="drum-pad" id="Open-HH">D<audio data-keys={68} src={play6} className="clip" id="D"></audio></button>
      <button className="drum-pad" id="Kick-n'-Hat">Z<audio data-keys={90} src={play7} className="clip" id="Z"></audio></button>
      <button className="drum-pad" id="Kick">X<audio data-keys={88} src={play8} className="clip" id="X"></audio></button>
      <button className="drum-pad" id="Closed-HH">C<audio data-keys={67} src={play9} className="clip" id="C"></audio></button>
    </div>
    <div className="inner2">
      <i className="fa-solid fa-toggle-on fa-4x switch" id="knob"></i>
      <div id="display" className="text-center">{audioname}</div>
      <input type="range" min={1} max={100} className="volume" value={volume} onChange={changeVolume}></input>
    </div>
    
  </div>
  )
}

export default App
