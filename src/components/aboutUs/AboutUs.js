import React from 'react'

const AboutUs = () => {

  let center = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";

  return (
    <section className=' my-40'>
      {/*.................................HEADER(About us).........................................*/}
      <div className='relative w-full h-20   '>
          <img className= "absolute top-[50%] translate-y-[-50%] w-1/5 left-0 -z-50"  src={require('../../images/img_wireframe.png')} alt="imagebackgound"/>
          <div className={`${center} w-1/5 z-[-1]`}>
              <img className={`${center} -z-20`} src={require('../../images/headline.png')} alt="headline"/>
              <p className={`${center} text-[#101FA3] font-bold  text-[62%] sm:text-[80%] md:text-[100%] lg:text-xl xl:text-2xl `}>About us</p>
          </div>
      </div> 
      {/* .................................ABOUT CONTENT.............................. */}
      <div className='container m-auto mt-5 xl:mt-20 '>
        <div className='w-full grid grid-cols-12 '>
          {/* .............................PARAGRAPH CONTENT.......................... */}
            <div className='w-full h-full  col-span-6 flex items-center justify-center'>
              <p className='text-start text-sm sm:text-md md:text-md lg:text-2xl xl:text-3xl ml-[20%] mt-[10%] '>
              ByteCraft is scientific club that is hosted by (ESTIN Amizour) and that was officially opened to the world on October 25th 2022, its aim is to make events, conferences and workshops unrelated and especially related to tech,
              to increase their capacities and give them opportunities to exploit them, ByteCraft has been and still one of the most effective clubs in the school and in Bejaia as a whole that contributed very actively to the students’ community inside ESTIN and out.
              </p>
            </div>
            {/* ............................IMAGE CONTENT.............................. */}
            <div className='w-full h-full  col-span-6 flex items-center justify-start '>
              <img className='w-[80%] h-[80%]' src={require('../../images/teamimage.png')}  />
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs