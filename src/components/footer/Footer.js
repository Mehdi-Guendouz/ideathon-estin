// import {Link, NavLink} from 'react-router-dom'
import './Footer.css'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Footer = () =>  {

  return(
    <footer className='w-full flex items-center justify-center  py-10 mt-4 sm:mt-0'>
      <div className=" flex items-center justify-center w-full flex-col  gap-4">
        <div className="parent flex items-center justify-around w-full ">
          <img className=" cursor-pointer w-[30px] h-[50px]  md:w-fit md:h-fit" src={require('../../img/logo-png.png')} alt="line"/> 
          <div className='flex items-center justify-center gap-[10px] md:gap-[2rem] '>
            <img className="fb cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/fb.png')} alt="line"/>
            <img className="ig cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/ig.png')} alt="line"/>
            <img className="in cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/in.png')} alt="line"/>
          </div>
          <img className="w-[30px] h-[50px] md:w-[40px] md:h-[60px] cursor-pointer" src={require('../../img/bytecraft.png')} alt="line"/>
        </div>
        <h2 className="text text-[12px] sm:text-[18px] md:text-[20px]"> Copyright © 2022. All right reserved</h2>
      </div>
    </footer>

  )
}

export default Footer