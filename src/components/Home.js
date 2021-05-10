import React from "react";
import "font-awesome/css/font-awesome.min.css"
import TextAnimation from 'react-animate-text';





export default function Home() {

function handleClick() {
  
    window.scrollTo(document.getElementById('port_sec').getBoundingClientRect())

  }
return (
    <>


      <div className="home">
      
        <div className="left">
       
       </div>


        <div className="right">
       
        <h1 className="home__desc">
            <p>Hello, i'm</p>
           
  
          <TextAnimation>
            <p><span className="home__desc--name">Ashfaq Ahmed</span>.</p>
          </TextAnimation>
          </h1>
          <h1 className="home__desc">frond-end web Developer</h1>
          <button id="hme_btn" className="home__btn" onClick={handleClick} >
            View my work <i className="fa fa-arrow-right fa-1x "></i>
          </button>
        </div>

      </div>





    </>
  );
}
