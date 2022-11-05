
import './Sponsors.css'
import yellowzigzag from '../../img/zigzag.png'

const Sponsors = () =>  {
  let center = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
  return(

      <div className='relative font-whyte'>
        <img class="absolute top-0 translate-y-[-5.5rem] w-full" src={require('../../img/line.png')} alt="lined"/>
        <div className='w-full mt-8'>
          <div className='container flex items-center justify-center  relative'>
            <img className={`${center}`} src={require('../../img/headline.png')} alt="headline"/>
            <p className="text-[#101FA3] text-[45px] font-bold ">Sponsors</p>
          </div>
          <div class="grid sm:grid-cols-2 grid-cols-1 gap-[2rem] gap-x-4 w-full items-center justify-items-center py-[3rem]">
            <div className=' bg-transparent relative'>
              <img className="" src={require('../../img/headlineb.png')} alt="imagebackgound"/>
              <img className={`${center} -z-10`} src={yellowzigzag} alt="imagebackgound"/>
            </div>
            <div className=' bg-transparent relative'>
              <img className="" src={require('../../img/headlineb.png')} alt="imagebackgound"/>
              <img className={`${center} -z-10`} src={yellowzigzag} alt="imagebackgound"/>
            </div>
            <div className=' bg-transparent relative'>
              <img className="" src={require('../../img/headlineb.png')} alt="imagebackgound"/>
              <img className={`${center} -z-10`} src={yellowzigzag} alt="imagebackgound"/>
            </div>
            <div className=' bg-transparent relative'>
              <img className="" src={require('../../img/headlineb.png')} alt="imagebackgound"/>
              <img className={`${center} -z-10`} src={yellowzigzag} alt="imagebackgound"/>
            </div>
           
          </div>
        </div>
      </div>
    )
  }

export default Sponsors 