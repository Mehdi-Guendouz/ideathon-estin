import React from 'react'
import {  useState , useEffect } from 'react';

const Count = () => {
  
          const [days,setday]= useState("0");
          const [hours,sethour]= useState("0");
          const [minutes,setminut]= useState("0");
          const [seconds,setsecond]= useState("0");

      const countdown = () => {
        const countDate = new Date("november 17 , 2022 00:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now ;
  
        const second = 1000;
        const minute = 60 * second;
        const hour = minute * 60;
        const day = hour * 24;

          setday( Math.floor( gap / day));
          sethour(Math.floor((gap % day)/ hour));
          setminut( Math.floor((gap % hour ) / minute));
          setsecond( Math.floor((gap % minute) / second));
        
        }
     
          //watch the gap in the first render
          useEffect(()=>{
           const timeOutID = setTimeout(countdown,1000)
           //clean up
            return()=>{
              clearTimeout(timeOutID)
            }
          },[])

          //watch the gap after first render
          useEffect(()=>{
            if(seconds || minutes || hours || days){
              //coundition when gap is 0
              const gapIsZero = seconds == 0 && minutes == 0 && hours == 0 && days == 0 ;
              //gap is not 0
              if(!gapIsZero){
                const intervalID = setInterval(countdown,1000)
                //clean up
                return()=>{
                  clearInterval(intervalID)
                }
              }
            }
            //when the counter stopped (day=00, hours=00, minutes=00, seconds=00)
            else{
              console.log("here if we wanna add some changes like disable the registration button or hide the form from the navbar")
            }
          },[seconds,days,hours,minutes])

     return (
      <>
        <div className=" timebox days">
            <h1>{days < 10 ? "0"+days : days }</h1>
            <h1>day</h1>
        </div>
        <div className=" timebox  hours">
            <h1>{hours < 10 ? "0"+hours : hours }</h1>
            <h1>hour</h1>
        </div>
        <div className=" timebox mins">
            <h1>{minutes < 10 ? "0"+minutes : minutes }</h1>
            <h1>min</h1>
        </div>
        <div className=" timebox secs">
            <h1>{seconds < 10 ? "0"+seconds : seconds }</h1>
            <h1>sec</h1>
        </div>
      </>
  )
}

export default Count