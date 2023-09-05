import React from 'react';
import { useState } from 'react';
import './index.css'
const MyAccordian=(props)=>{
    // we can also write {question,answer}=>object destructing
    const [show,setshow]=useState(false);
   
    return(<>
        <div className="data">
            <p onClick={()=>setshow(!show)}>{show?"➖":"➕"}</p>
            <h3>{props.question}</h3>
        </div>
        <div className="ans-cont">
        {show &&<p className="answer">{props.answer}</p>}   {/*  if show is true then show me answer claas item otherwise not*/}
        </div>
        
    </>)
}
export default MyAccordian;