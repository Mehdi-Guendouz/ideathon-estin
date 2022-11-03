import React, { useRef } from "react";
import {  SwiperSlide } from "swiper/react";
import Pic from "../images/Profilepic.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { AnimatePresence, motion } from "framer-motion"



export default function StickyNote(props){
    const [isHoverredOn, setIsHoveredOn] = React.useState(false)
    React.useEffect(() => {
      console.log(isHoverredOn)
    }, [isHoverredOn])
    return (<>
            <SwiperSlide  >
          <div id="Speaker-img" className=" h-3/4 m-4 over overflow-hidden"
            onMouseEnter={() => { setIsHoveredOn(true) }}
            onMouseLeave={() => { setIsHoveredOn(false) }}
          >
            <img className="object-cover" src={Pic} alt="" />
          </div>

        </SwiperSlide>
        <AnimatePresence>
          {isHoverredOn &&
                  <motion.div
                  id="Speaker-info"
                  className="swiper-slide"
                  initial={{
                    y: "-19.3rem",
                    x:"0.3rem"
                  }}
                  animate={
                    isHoverredOn  ? {
                      y: "-13rem",
                    display:"block",
        
                      transition: {
                        duration: 2,
                        delay: 0.5,
                        type: "tween"
                      }
                    } : {
                      y: "-19.3rem",
                      transition: {
                        duration: 2,
                        delay: 1,
                        type: "tween"
                      }
                    }
                  }
                  exit={{
                    y: "-19.3rem",
                    transition: {
                      duration: 1.5,
                      type: "tween"}
                  }}
                >
                        {props.id}
                </motion.div>}

        </AnimatePresence>
    </>)
}