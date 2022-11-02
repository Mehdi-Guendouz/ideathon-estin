import React from 'react'

const AboutUs = () => {

  let center = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";

  return (
    <section className=' my-40 '>
      {/*.................................HEADER(About us).........................................*/}
      <div className='relative w-full h-20  '>
          <img className= "absolute top-[100px] md:top-[90%] translate-y-[-50%] w-1/4 md:w-1/6 left-0 -z-50"  src={require('../../img/img_wireframe.png')} alt="imagebackgound"/>
          <div className={`${center} w-1/3  md:w-1/5 z-[-1]`}>
              <img className={`${center}  -z-20`} src={require('../../img/headline.png')} alt="headline"/>
              <p className={`${center} text-[#101FA3] font-bold text-lg sm:text-xl  w-full lg:text-xl xl:text-2xl `}>About us</p>
          </div>
      </div> 
      {/* .................................ABOUT CONTENT.............................. */}
      <div className='container m-auto mt-0  md:mt-3 xl:mt-16 '>
        <div className='w-full grid grid-cols-12 '>
          {/* .............................PARAGRAPH CONTENT.......................... */}
            <div className='w-full h-full col-span-12  md:col-span-6 flex items-center justify-center'>
              <p className='text-start text-xl lg:text-2xl xl:text-3xl text-bold mx-4 md:mr-0 md:ml-[20%] mt-6 md:mt-[10%] relative '>
              ByteCraft is scientific club that is hosted by (ESTIN Amizour) and that was officially opened to the world on October
               25th 2022, its aim is to make events, conferences and workshops unrelated and especially related to tech, to increase 
               their capacities and give them opportunities to exploit them, ByteCraft has been and still one of the most effective 
               clubs in the school and in Bejaia as a whole that contributed very actively to the students’ community inside ESTIN and out.
                {/* ........................ARROW FOR DISKTOP..................... */}
                <img src={require('../../img/Vector.png')}  className='hidden md:block absolute z-[-1] bottom-[-140px] lg:bottom-[-220px] w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] '/>
                {/* ........................ARROW FOR DISKTOP..................... */}
                <img src={require('../../img/Vector_mobile.png')}  className='md:hidden absolute z-[-1] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] top-[-110px] sm:top-[-160px] right-[-35px] '/>
              </p>
            </div>
            {/* ............................IMAGE CONTENT.............................. */}
            <div className='w-full h-full col-span-12  md:col-span-6 order-[-1] md:order-1 flex items-center justify-center md:justify-start'>
              <img className='w-[80%] h-[80%]' src={require('../../img/teamimage.png')} />
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs