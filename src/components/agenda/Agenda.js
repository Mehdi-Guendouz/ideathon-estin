import { useState } from 'react'
import arrow from '../../img/arrow.svg'
import dashedLineBackground from '../../img/Untitled_Artwork 4 1 (Traced)-2.svg'
import decoration from '../../img/asset 12.svg'
import './agenda.css'

function Agenda() {

    //dates information to display
    const dayOne = {
        date: 'Friday, November 18th',
        activities: [
            { time: '08:00 - 08:30', event: 'Check-in' },
            { time: '08:30 - 09:00', event: 'Opening Ceremony' },
            { time: '09:00 - 10:00', event: 'IdeaTech Presentation' },
            { time: '10:00 - 12:30', event: 'Competition' },
            { time: '12:30 - 14:00', event: 'Lunch' },
            { time: '14:00 - 16:30', event: 'Competition' },
            { time: '16:30 - 17:30', event: 'Coffee Break' },
            { time: '19:30 - 20:30', event: 'Dinner' },
            { time: '20:30 - 00:00', event: 'Competition' },
            { time: '00:00 - 00:30', event: 'Midnight Break' },
            { time: '01:00', event: 'Competition' }
        ]
    }
    const dayTwo = {
        date: 'Saturday, November 19th',
        activities: [
            { time: '07:00 - 08:00', event: 'Breakfast' },
            { time: '08:00 - 12:00', event: 'Competition' },
            { time: '12:00', event: 'Submission' },
            { time: '12:10', event: 'Lunch' },
            { time: '13:00', event: 'Presentation' },
            { time: '17:00', event: 'Closing Ceremony' }
        ]
    }

    //state variables declaration
    const [day, setDay] = useState(dayOne);
    const [isDayOneActive, setIsDayOneActive] = useState(true);

    //handleClick function to toggle between the days
    function handleClick(e) {
        if (e.target.id === 'day-2' && isDayOneActive) {
            setIsDayOneActive(false);
            setDay(dayTwo);
        }
        if (e.target.id === 'day-1' && !isDayOneActive) {
            setIsDayOneActive(true);
            setDay(dayOne);
        }
        // console.log('isDayOneActive: ', isDayOneActive)
    }

    //creating the date DOM elements
    const dateElements = day.activities.map(activity => (
        <p key={activity.time} className='font-normal'><span className='font-bold'>{activity.time}:</span> {activity.event}</p>
    ));

    const center = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
    return (
        <section id='agenda' className='relative font-[whyte] flex items-center justify-center flex-col' >

            {window.innerWidth < 550 && <img className='absolute w-screen h-[1000px] top-[-5%] -z-10' src={dashedLineBackground} alt="Dashed Line Background" />}
            <div className='container flex items-center justify-center  relative' data-aos="zoom-out" data-aos-duration='1000' data-aos-delay='100'>
                <img className={`${center}`} src={require('../../img/headline.png')} alt="headline" />
                <p className="text-[#101FA3] text-[45px] font-bold ">Agenda</p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-[1fr_5fr] grid-rows-2 mx-[10%] lg:mx-[51px]  py-16 lg:pt-[2rem] lg:pb-[10rem]'>

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
                    <img className='w-14 lg:w-20 absolute top-[-1rem] right-[-1.5rem] lg:top-[-2rem] lg:right-[-2.5rem] sand-watch' src={decoration} alt="asset 12" />

                    <h3 id='day' className=' lg:w-2/3  pl-1 pr-[40px] py-3 lg:pt-6 font-bold text-center text-lg lg:text-3xl'>
                        <img src={arrow} alt="arrow" className='inline-block mr-3 w-6 lg:w-10 arrow-animation' />
                        <span className='date-animation'>{day.date}</span>
                    </h3>

                    <div className='h-full w-full pl-[7%] pb-4 lg:pb-8 flex flex-col items-start justify-around content-animation'>
                        {dateElements}
                    </div>
                </div>

                <div
                    className={`relative flex justify-center before:absolute my-max before:w-16 lg:before:w-[100%] lg:before:left-[3px] lg:w-max h-fit lg:mt-auto mb-3 lg:mb-40 lg:mb-auto lg:mt-40 lg:mr-[60px] lg:pb-1 font-bold text-2xl lg:text-5xl
                    text-center  ${!isDayOneActive ? 'highlight' : 'before:bg-transparent'}`} >
                    <p id='day-2' className='cursor-pointer' onClick={handleClick}>Day 2</p>
                </div>
            </div>
        </section>
    )
}

export default Agenda