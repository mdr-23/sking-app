import React from "react"
import './Loading.css'

function Loading({children,loading}){
    if(loading){
        return(
          <div className="spinner">
            <img src={require('../../img/loader.gif')} height="40" alt="" />
          </div>
        )
     }else{
        return (
          <>
            {children}
          </>
        )
     }  
}

export default Loading