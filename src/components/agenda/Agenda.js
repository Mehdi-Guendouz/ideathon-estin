import {useState} from 'react'
import arrow from '../../arrow.png'

function Agenda() {
    const [date, setDate] = useState({
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
    });
    const [isDayOneActive, setIsDayOneActive] = useState(true);

    function handleClick(e){
        if(e.target.id === 'day-2' && isDayOneActive) setIsDayOneActive(false);
        if(e.target.id === 'day-1' && !isDayOneActive) setIsDayOneActive(true);
    }

    const dateElements = date.activities.map(activity => (
        <p key={activity.time}><span className='font-bold'>{activity.time}:</span> {activity.event}</p>
    ));
    return (
        <section id='agenda'>
            <div className='flex items-center justify-center h-20 bg-headlineBorder bg-no-repeat bg-center bg-contain'>
                <h1 className='text-3xl text-center text-purple font-bold'>Agenda</h1>
            </div>
            <div className='grid grid-cols-[1fr_5fr] grid-rows-2 gap-20 px-[10rem] py-[10rem]'>
                <div id='day-1' 
                className={`w-max h-1/2 mt-[12%] px-2 font-bold text-4xl cursor-pointer 
                flex items-center justify-center ${isDayOneActive && 'bg-highlight'}`} 
                onClick={handleClick}>
                    Day 1
                </div>
                <div className='
                flex flex-col items-center
                row-span-2 
                bg-agenda-background
                h-80
                border-solid border-2 border-black
                '>
                    <h3 id='day' className='w-1/2 py-6 font-bold text-1xl lg:text-3xl'>
                        <img src={arrow} alt="arrow" className='inline-block mr-[6%] w-6 lg:w-11'/>
                        {date.date}
                    </h3>
                    <div className='h-full w-full pl-14 pb-8 flex flex-col items-start justify-between'>
                        {dateElements}
                    </div>
                </div>
                <div id='day-2' 
                className={`w-max h-1/2 mt-[12%] px-2 font-bold text-4xl cursor-pointer 
                flex items-center justify-center ${!isDayOneActive && 'bg-highlight'}`} 
                onClick={handleClick}>
                    Day 2</div>
            </div>
        </section>
    )
}

export default Agenda