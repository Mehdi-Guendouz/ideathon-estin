
import './Footer.css'
const Footer = () =>  {

  return(
    <footer className='w-full flex items-center justify-center py-20 md:py-10 mt-4 sm:mt-0 z-20'>
      <div className=" flex items-center justify-center w-full flex-col gap-[10px]">
        <div className="parent flex items-center justify-around w-full">
          <a href='#home'><img className="cursor-pointer md:w-[92px] md:h-[90px] w-[40px] h-[40px]" src={require('../../img/eventLogo.png')} alt="line"/></a>
          <div className='flex items-center justify-center gap-[10px] md:gap-[2rem] mr-1 md:mr-5'>
            <a href='https://web.facebook.com/ByteCraftEstin' target="_blank" rel="noopener noreferrer"><img className="fb cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/fb.png')} alt="line"/></a>
            <a href='https://www.instagram.com/bytecraft.estin' target="_blank" rel="noopener noreferrer"><img className="ig cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/ig.png')} alt="line"/></a>
            <a href='https://www.linkedin.com/company/bytecraft-club' rel="noopener noreferrer" target="_blank"><img className="in cursor-pointer sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]" src={require('../../img/in.png')} alt="line"/></a>
          </div>
          <img className="w-[22px] h-[29px] md:w-[40px] md:h-[60px]" src={require('../../img/bytecraft.png')} alt="line"/>
        </div>
        <h2 className="text text-[12px] sm:text-[16px] md:text-[18px]"> Copyright © 2022. All right reserved</h2>
      </div>
      </footer>      
  
    )
  }

export default Footer