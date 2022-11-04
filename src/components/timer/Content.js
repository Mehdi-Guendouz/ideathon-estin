import './Content.css';
import logo from '../../img/logo.png';        


const zero = "00"

const countdown=()=> {
    const countDate = new Date("november 4 , 2022 13:45:00").getTime();
    const now = new Date().getTime();
    let gap = countDate - now ;
    if(gap > 0){
        let second = 1000;
        let minute = 60 * second;
        let hour = minute * 60;
        let day = hour * 24;
    
        let textDay = Math.floor( gap / day);
        let textHour = Math.floor((gap % day)/ hour);
        let textMinute = Math.floor((gap % hour ) / minute);
        let textSecond = Math.floor((gap % minute) / second);
    
        document.getElementById("day").innerText=textDay;
        document.getElementById("hour").innerText=textHour;
        document.getElementById("min").innerText=textMinute;
        document.getElementById("sec").innerText=textSecond;
        
    }else{
        document.getElementById("day").innerText= zero;
        document.getElementById("hour").innerText= zero;
        document.getElementById("min").innerText= zero;
        document.getElementById("sec").innerText= zero;
    }

}


setInterval(countdown,1000)



function Content() {
    return (

        <div className='first-div ' >
            <div className='second-div  '>
                <img className='logo ' src={logo} />
                <div className='text-div'>                         
                    <p className='text-[45px] ideatech'>Ideatech</p>
                    <p className='text-[65px] pl-[110px]'>where we <span id='ideate'> ideate</span></p>
                    <p className='text-[65px]'>and <span id='technicate'>technicate</span> <span className='svgg'> together</span></p>
                    <div className='register-div '>
                        <svg className='absolute first-animation left-0 translate-x-[-5rem] translate-y-5' width="443" height="499" viewBox="0 0 443 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-19.5363 0.859105C-9.66622 115.195 51.6608 355.329 218.008 401.177C250.523 409.174 309.928 412.248 287.427 360.565C280.285 346.997 264.34 336.508 254.224 363.146C245.514 386.082 253.361 399.123 261.93 411.562C270.5 424 298.66 449.101 353.175 452.615C407.691 456.129 434.556 454.339 441 452L408.31 410.5L439.325 452.267C427.189 467.143 404.405 485.973 408.31 498.5" stroke="#080808" stroke-width="1.3" class="svg-elem-1"></path>
                        </svg>
                        <button className='button'>register now</button>
                    </div>
                    <div className="time-div pt-7">
                        <div className=" timebox days">
                            <h1 id="day">00</h1><h1>Day</h1>
                        </div>
                        <div className=" timebox  hours">
                            <h1 id="hour">00</h1><h1>hours</h1>
                        </div>
                        <div className=" timebox mins">
                            <h1 id="min">00</h1><h1>min</h1>
                        </div>
                        <div className=" timebox secs">
                            <h1 id="sec">00</h1><h1>sec</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    export default Content;
            