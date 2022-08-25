import React ,{useState}from "react";
import "./style.css";
import {Container} from "./container.jsx"
export function Home(props){
  const [isHome,setIsHome]=useState(true)
    return(
  <div>
  {isHome ? 
  (
   <div className="homeContainer">
       
       <div class="content">
       <div className="details">Hello! I am &nbsp;<sapn className="name">Dharani Perumal</sapn><p>I`m Frontend Web Developer</p></div>
          <button className="buttonAbout" onClick={()=>setIsHome(false)}>About me</button>
       </div>
   </div>
   )
:
(<div>
<Container onSetHomePage={()=>{setIsHome(true)}}/>

</div>)
  }
  </div>
    )
}