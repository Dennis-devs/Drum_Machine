import "./App.css"
import { useState, useEffect, useCallback, useMemo} from "react";


function App() {

   const[state, setState] = useState('');


  //  const Press = (e) => { 
  //   //const audio = document.querySelector(`audio[id='${e.target.innerText}']`);
  //   // if(!audio) return;
  //   // audio.currentTime = 0;  
  //   // audio.play(); 

  //   setState(e.target.id) 
  // }
  // Press()
  
// useEffect(() => { 
//     const buttons = document.querySelectorAll('.drum-pad');   
//     let list = document.getElementById("knob").classList;

//  const Press = (e) => { 
//     const audio = document.querySelector(`audio[id='${e.target.innerText}']`);
//     if(!audio) return;
//     audio.currentTime = 0;  
//     audio.play(); 

//     setState(e.target.id) 
//   }

//     if ([...list].includes("fa-toggle-on")){
//     [...buttons].forEach(item => item.addEventListener('click', Press))
//     }
//   }, [])

// useEffect(() => {
//   const buttons = document.querySelectorAll('.drum-pad');   
//   let list = document.getElementById("knob").classList;
//   if([...list].includes("fa-toggle-off")) {
//     [...buttons].forEach(item => item.removeEventListener("click", Press))
//   }
//   else [...buttons].forEach(item => item.addEventListener("click", Press))
// })

  return(
  <div id="drum-machine">
    <div className="inner1">
      <button className="drum-pad" id="Heater 1">Q<audio src="../Audio/Heater-1.mp3" className="clip" id="Q"></audio></button>
      <button className="drum-pad" id="Heater 2">W<audio src="../Audio/Heater-2.mp3" className="clip" id="W"></audio></button>
      <button className="drum-pad" id="Heater 3">E<audio src="../Audio/Heater-3.mp3" className="clip" id="E"></audio></button>
      <button className="drum-pad" id="Heater 4">A<audio src="../Audio/Heater-4_1.mp3" className="clip" id="A"></audio></button>
      <button className="drum-pad" id="Clap">S<audio src="../Audio/Heater-6.mp3" className="clip" id="S"></audio></button>
      <button className="drum-pad" id="Open-HH">D<audio src="../Audio/Dsc_Oh.mp3" className="clip" id="D"></audio></button>
      <button className="drum-pad" id="Kick-n'-Hat">Z<audio src="../Audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio></button>
      <button className="drum-pad" id="Kick">X<audio src="../Audio/RP4_KICK_1.mp3" className="clip" id="X"></audio></button>
      <button className="drum-pad" id="Closed-HH">C<audio src="../Audio/Cev_H2.mp3" className="clip" id="C"></audio></button>
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
