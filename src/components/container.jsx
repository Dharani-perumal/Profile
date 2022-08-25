import React,{useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export function Container(props){
  const [contact,setConatcat]=useState(true)
    return(
    <div  className="mainDiv">
        {contact ? 

<div className="secondaryConatiner">
  <div className="backIcon" onClick={()=>props.onSetHomePage(true)}><i class="bi bi-arrow-left-circle"></i></div>
  <div className="NavName">About <div /></div>

  <div className="mainConatiner">
    <div className="values">
   
      <div class="hexagon-wrapper">
        <div class="hexagon">
          <i class="bi-cursor-fill"></i>

        </div>
        <span className="desc">Fast</span>

      </div>
      
      <div class="hexagon-wrapper">
        <div class="hexagon">
          <i class="bi bi-laptop"></i>
        </div>
        <span className="desc">Responsive</span>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon">
          <i class="bi bi-lightbulb-fill"></i>
        </div>
        <span className="desc">Intuitive</span>
      </div>

      <div class="hexagon-wrapper">
        <div class="hexagon">
          <i class="bi bi-speedometer2"></i>
        </div>
        <span className="desc">Dynamic</span>
      </div>

    </div>

    <div className="maincontainer">
      <div className="profile">
        I am frontend Developer .I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
        <span>Let's make something special.</span>


      </div>

      <div className="skill">
        <div className="skillset"> React <ProgressBar className="progress" now={80} label={`${80}%`} visuallyHidden variant="SOME_NAME" /> </div>
        <div className="skillset"> html <ProgressBar now={90} label={`${80}%`} visuallyHidden variant="SOME_NAME" /></div>
        <div className="skillset"> css <ProgressBar now={80} label={`${80}%`} visuallyHidden variant="SOME_NAME" /></div>
        <div className="skillset"> UI/UX <ProgressBar now={60} label={`${80}%`} visuallyHidden variant="SOME_NAME" /></div>
        <div className="skillset"> JavaScript <ProgressBar now={60} label={`${80}%`} visuallyHidden variant="SOME_NAME" /></div>
       
      </div>
     
    </div>
    <div className="DownArrow" onClick={()=>{setConatcat(false)}} > <i class="bi bi-arrow-down-circle"></i></div>
  </div>
 




</div>:( 

<div className="Conatact">
     
    <div id="triangle-down"></div>
    <div className="backIcon" onClick={()=>setConatcat(true)}> <i class="bi bi-arrow-left-circle"></i></div>
    <div className="NavName setPlace">Contact <div />
     
    </div>
    <div className="detailsContact">
         <input placeHolder="Name"/>
         <input  placeHolder="Email"/>
         <textarea placeHolder="your message"/>
         <button className="submit">Submit </button>
         <div className="footer">
           <div className="arrowUp" onClick={()=>{props.onSetHomePage(true)}}><i class="bi bi-arrow-up"></i></div>
           <div className="website">
             <a href="https://www.linkedin.com/in/dharani-v-p-aa19821a0/"><i class="bi bi-linkedin"></i></a>
             <a  href="https://github.com/Dharani-perumal"><i class="bi bi-github"></i></a>
             <a  href="https://codepen.io/Dharani-VP"><i class="bi bi-code-slash"></i></a>
           </div>
           <div>Dharani Perumal @ 2022</div>
           </div>
      </div>
</div>)}
    </div>
    )
}