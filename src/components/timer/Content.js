import './Content.css';
import logo from '../../img/logo.png';   
import Count from './Count';     

function Content() {
    return (

        <div className='first-div' >
            <div className='second-div'>
                <img className='m-auto pt-5 ' src={logo} />
                <div className='text-div w-full flex items-center justify-center flex-col gap-1 md:gap-0'>                         
                    <p className='lg:text-[45px] sm:text-[35px] text-[20px] ideatech'>Ideatech</p>
                    <p className='lg:text-[65px] sm:text-[55px] text-[24px] m-auto'>where we<span id='ideate'> ideate</span></p>
                    <p className='lg:text-[65px] sm:text-[55px] text-[24px]'>and <span id='technicate'>technicate</span> <span className='svgg'> together</span></p>
                    <div className='register-div '>
                        <svg className='first-animation  ' width="443" height="499" viewBox="0 0 443 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-19.5363 0.859105C-9.66622 115.195 51.6608 355.329 218.008 401.177C250.523 409.174 309.928 412.248 287.427 360.565C280.285 346.997 264.34 336.508 254.224 363.146C245.514 386.082 253.361 399.123 261.93 411.562C270.5 424 298.66 449.101 353.175 452.615C407.691 456.129 434.556 454.339 441 452L408.31 410.5L439.325 452.267C427.189 467.143 404.405 485.973 408.31 498.5" stroke="#080808" stroke-width="1.3" class="svg-elem-1"></path>
                        </svg>
                        <button className='bg-[#000000] button md:px-12 md:py-2  md:text-[32px] text-[20px] px-5 py-1'>register now</button>
                    </div>
                    <div className="time-div pt-7">
                       <Count />
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    export default Content;
            