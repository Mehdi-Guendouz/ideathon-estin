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
      <div className="time-div flex items-center justify-center w-full md:text-[30px] text-[18px]  xl:gap-[5rem] lg:gap-[3rem] md:gap-[2rem]  pt-7">
      <div className=" timebox md:w-[141.38px] md:h-[144.1px] w-[88px] h-[78px] days">
          <h1 id="day">{days < 10 ? "0"+days : days }</h1><h1>Day</h1>
      </div>
      <div className=" timebox md:w-[141.38px] md:h-[144.1px] w-[88px] h-[78px] hours">
          <h1 id="hour">{hours < 10 ? "0"+hours : hours }</h1><h1>hours</h1>
      </div>
      <div className=" timebox md:w-[141.38px] md:h-[144.1px] w-[88px] h-[78px] mins">
          <h1 id="min">{minutes < 10 ? "0"+minutes : minutes }</h1><h1>min</h1>
      </div>
      <div className=" timebox md:w-[141.38px] md:h-[144.1px] w-[88px] h-[78px] secs">
          <h1 id="sec">{seconds < 10 ? "0"+seconds : seconds }</h1><h1>sec</h1>
      </div>
</div>
    
  )
}

export default Count