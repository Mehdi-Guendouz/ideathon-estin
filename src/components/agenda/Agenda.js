import {useState} from 'react'
import arrow from '../../img/arrow.svg'
import dashedLineBackground from '../../img/Untitled_Artwork 4 1 (Traced)-2.svg'
import decoration from '../../img/asset 12.svg'

function Agenda() {
    
    //dates information to display
    const dayOne = {
        date: 'Thursday, November 24th',
        activities: [
            {time: '05:00pm - 05:50pm', event: 'Check-in'},
            {time: '06:00pm - 07:00pm', event: 'Opening Ceremony'},
            {time: '07:00pm - 07:30pm', event: 'Ice breaking'},
            {time: '07:30pm - 08:00pm', event: 'Ideathon Presentaton'},
            {time: '08:00pm - 09:00pm', event: 'Ideathon Launch'},
            {time: '09:00pm - 10:00pm', event: 'Dinner'},
            {time: '10:00pm - 12:00am', event: 'Hackathon'}
        ]
    }
    const dayTwo = {
        date: 'Friday, November 25th',
        activities: [
            {time: '12:00am - 02:00pm', event: 'End of Hackathon'},
            {time: '02:00pm - 03:00pm', event: 'Presentatons'},
            {time: '03:00pm - 03:30pm', event: 'Winners Announcement'},
            {time: '03:30pm - 04:00pm', event: 'Ending Ceremony'},
        ]
    }

    //state variables declaration
    const [day, setDay] = useState(dayOne);
    const [isDayOneActive, setIsDayOneActive] = useState(true);

    //handleClick function to toggle between the days
    function handleClick(e){
        if(e.target.id === 'day-2' && isDayOneActive){
            setIsDayOneActive(false);
            setDay(dayTwo);
        }
        if(e.target.id === 'day-1' && !isDayOneActive){
            setIsDayOneActive(true);
            setDay(dayOne);
        }
        console.log('isDayOneActive: ', isDayOneActive)
    }

    //creating the date DOM elements
    const dateElements = day.activities.map(activity => (
        <p key={activity.time} className='font-normal'><span className='font-bold'>{activity.time}:</span> {activity.event}</p>
    ));
    
    return (
        <section id='agenda' className='relative font-[whyte]'>
            
            {window.innerWidth < 550 &&  <img className='absolute w-screen h-[1000px] top-[-5%]' src={dashedLineBackground} alt="Dashed Line Background"/>}
            <div className='flex items-center justify-center h-32 bg-headlineBorder bg-no-repeat bg-center bg-[length:50%] lg:bg-[length:22%]'>
                <h1 className='text-[30px] lg:text-[45px] text-center text-purple font-bold'>Agenda</h1>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-[1fr_5fr] grid-rows-2 mx-[10%] lg:mx-[51px] lg:mx-40 py-16 lg:py-[10rem]'>
                
                <div
                className={`relative flex justify-center before:absolute before:w-16 lg:before:w-[100%] lg:before:left-[3px] lg:w-max h-fit lg:mt-auto mb-3 lg:mb-40 lg:mr-[60px] lg:pb-1 font-bold text-2xl lg:text-5xl  
                text-center ${isDayOneActive ? 'highlight' : 'before:bg-transparent'}`} >
                        <p id='day-1' className='cursor-pointer' onClick={handleClick}>Day 1</p>
                </div>

                <div className='
                relative flex flex-col items-center
                row-start-3 col-span-2 lg:row-start-1 lg:col-start-2 row-span-2 
                bg-agenda-background
                h-[450px] lg:h-[557px]
                border-solid border-2 border-black
                text-base lg:text-2xl
                '>
                    <img className='w-14 lg:w-20 absolute top-[-1rem] right-[-1.5rem] lg:top-[-2rem] lg:right-[-2.5rem]' src={decoration} alt="asset 12" />

                    <h3 id='day' className=' lg:w-2/3 lg:w-max pl-1 pr-[40px] py-3 lg:pt-6 font-bold text-center text-lg lg:text-3xl'>
                        <img src={arrow} alt="arrow" className='inline-block mr-3 w-6 lg:w-10'/>
                        {day.date}
                    </h3>

                    <div className='h-full w-full pl-[7%] pb-4 lg:pb-8 flex flex-col items-start justify-around'>
                        {dateElements}
                    </div>
                </div>

                <div  
                    className={`relative flex justify-center before:absolute my-max before:w-16 lg:before:w-[100%] lg:before:left-[3px] lg:w-max h-fit lg:mt-auto mb-3 lg:mb-40 lg:mb-auto lg:mt-40 lg:mr-[60px] lg:pb-1 font-bold text-2xl lg:text-5xl
                    text-center  ${!isDayOneActive? 'highlight' : 'before:bg-transparent'}`} >
                            <p id='day-2' className='cursor-pointer' onClick={handleClick}>Day 2</p>
                </div>
            </div>
        </section>
    )
}

export default Agenda