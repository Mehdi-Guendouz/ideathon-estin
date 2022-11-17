import {useState} from 'react'
import './Navbar.css';
import kharbich from '../../img/kharbich.png';
import bytLogo     from '../../img/byte.png';
import menucircel     from '../../img/Vector.png';
import menu     from '../../img/menu.png';
import close     from '../../img/close.png';



function Navbar() {

  const [bmenu, setbmenu] = useState(false)

  const changeStateMenu = ()=>{
    setbmenu((prev)=>!prev)
  }

  const Menu = ()=>{
    return(
      <div className='flex items-center justify-center relative' onClick={changeStateMenu}>
        <img src={menu}  alt='menu'/>
        <img src={menucircel}  alt='menu' className='absolute w-[34px] h-[34px] ' />
      </div>
    )
  }

  const Close = ()=>{
    return(
      <div className='flex items-center justify-center relative' onClick={changeStateMenu}>
        <img src={close}  alt='menu'/>
        <img src={menucircel}  alt='menu' className='absolute w-[44px] h-[34px] '  />
      </div>
    )
  }

  const SideBar = () =>{
    return (
      <div className='w-full flex flex-col items-center justify-center z-20 bg-[#FFFEDC] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[2rem] '>
        <ul className="capitalize pt-2 text-center text-[25px] font-medium sidebar-animation">
          <li className='mt-2'>
            <a href="#home" className="" aria-current="page">home</a>
          </li>
          <li className='mt-4'>
            <a href="#about" className="">about us</a>
          </li>
          <li className='mt-4'>
            <a href="#SpeakersSlider" className="" >speakers</a>
          </li>
          <li className='mt-4'>
            <a href="#agenda" className="" >agenda</a>
          </li>
          <li className='mt-4'>
            <a href="#sponsors" className="" >sponsors</a>
          </li>     
        </ul>
        <div className='mt-4 flex items-center justify-center py-5' >
          <a className='capitalize text-[18px] px-4 py-1 bg-black text-white rounded-[7px] sidebar-btn-animation' target="_blank" href='https://tripetto.app/run/LGPU8M4ZCM' rel="noopener noreferrer">register now</a> 
        </div>
      </div>
    )
  }

    return (
      
<nav className={` border-gray-200  sm:px-4  rounded  w-full ${bmenu ? 'bg-[#fffedc]' : 'bg-white'}`}>
  <div className=" flex  flex-wrap justify-center items-center mx-auto w-full py-4">
    
    <div className='w-full flex items-center justify-between md:hidden  relative'>
      <div className='px-4'>
          <a className=' cursor-pointer'><img className='w-[30px] h-[40px]' src={bytLogo} /></a> 
      </div>
      {bmenu && <SideBar/>}
      <div className='flex items-center justify-center relative px-4'>
        {bmenu == false && <Menu/>}
        {bmenu && <Close />}
      </div>
    </div>
    <div className="hidden w-full md:flex items-center justify-around  " id="navbar-default">
      <div>
        <a className=' cursor-pointer'><img className='lg:w-[50px] lg:h-[60px] md:w-[40px] md:h-[50px]' src={bytLogo} /></a> 
      </div>
      <ul className="flex flex-col p-4 mt-4  bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
        <li className=' '>
          <a href="#home" className=" capitalize  text-black   xl:text-[22px] lg:text-[18px] " aria-current="page">home</a>
        </li>
        <li >
          <a href="#about" className="xl:ml-10 lg:ml-5 capitalize text-black  xl:text-[22px] lg:text-[18px]  ">about us</a>
        </li>
        <li>
          <a href="#SpeakersSlider" className="xl:ml-10 lg:ml-5 capitalize text-black  xl:text-[22px] lg:text-[18px] " >speakers</a>
        </li>
        <li>
          <a href="#agenda" className="xl:ml-10 lg:ml-5 capitalize text-black   xl:text-[22px] lg:text-[18px] " >agenda</a>
        </li>
        <li>
          <a href="#sponsors" className="xl:ml-10 lg:ml-5 capitalize text-black xl:text-[22px] lg:text-[18px] " >sponsors</a>
        </li>     
      </ul>
      <div>
        <a className='cursor-pointer' target="_blank" href='https://tripetto.app/run/LGPU8M4ZCM' rel="noopener noreferrer"><img className='lg:w-[120px] lg:h-[50px] md:w-[100px] md:h-[40px]' src={kharbich} /></a>
      </div>
    </div>
  </div>
</nav>

    );
  }
  
  export default Navbar;
  