import './Container.css'
// import asset6 from '../../img/asset\ 6.svg'
// import yellow_and_black from '../../img/yellow\ and\ black.svg'
import vector7 from '../../img/event1.png'
import vector8 from '../../img/event2.png'
import traced from '../../img/Untitled_Artwork\ 4\ 1\ (Traced).svg'
import traced1 from '../../img/Untitled_Artwork\ 4\ 1\ (Traced)-1.svg'
import t_asset from '../../img/T\ asset.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Container = () => {

    useEffect(() => {
        AOS.init();
      }, [])

	return (
		<div className='pt-5 md:mt-8' >
			<div className='container relative mx-auto md:pt-[122.44px] md:pb-[100.3px]'>
                <div className='relative' data-aos="zoom-out" data-aos-duration='1000' data-aos-delay='100'>
                    <h1 className='text-center md:text-7xl font-[700] text-[28px]'>IDEATECH 2022</h1>
                    <img src={traced1} alt="" className='absolute lg:top-[25px] lg:left-[-100px] lg:h-[89.61px] h-[67px] sm:top-[25px] sm:left-[-150px] top-[17px] left-[-210px]'/> 
                    <img src={traced} alt="" className='absolute lg:top-[-370px] lg:right-[-195px] lg:h-[415px] h-[155px] sm:top-[-120px] sm:right-[-60px] top-[-130px] right-[-120px]'/> 
                </div>

			    <div className='flex justify-center sm:flex-wrap flex-col md:flex-row relative md:mt-20 mt-[58px] md:items-center items-center p-2 '>
                    <p className='md:w-[552px] md:text-[36px] w-fit text-[22px] font-[350] md:leading-[40.68px]' data-aos="fade-up" data-aos-duration='1000' data-aos-delay='100'>IdeaTech is an ideathon on its second-year edition in the higher national school of computer and digital sciences and technologies (ESTIN Amizour), organized by the scientific club ByteCraft. </p>
                    <div className='image relative md:ml-16 mt-[29px]' data-aos="fade-left" data-aos-duration='1000' data-aos-delay='600' >
                        <img src={vector7} alt="" className='md:w-[448.67px] w-[307px]'/>
                        {/* <img src={yellow_and_black} alt="" className='absolute md:top-[259px] md:left-[385px] md:w-[91.5px] w-[62.47px] top-[-3px] right-[-3px]'/> */}
                    </div>
                </div>

                <div className='flex justify-center sm:flex-wrap flex-col md:flex-row relative md:mt-[59.5px] mt-[47px] md:items-center items-center p-2'>
                    <div className='image relative mt-8 xl:mt-0 order-2 ' data-aos="fade-right" data-aos-duration='1000' data-aos-delay='600'>
                        <img className='md:w-[486px] w-[336px]' src={vector8} alt=""/>
                        {/* <img src={asset6} alt="" className='absolute md:top-[7px] md:left-[26px] md:w-[106px] w-[73.28px] top-[8px] left-[41px]'/> */}
                    </div>
                    <p className='md:text-[36px] md:ml-[23px] md:w-[617px] md:leading-[40.68px] w-fit text-[22px] font-[350] order-1 lg:mr-4' data-aos="fade-up" data-aos-duration='1000' data-aos-delay='100'>We welcome all participants from all around the country to this competition, to come up with and develop ideas solutionary to a given theme of problematics, where they realize a prototype without the coding part,  in teams of 15 and only in 48 hours, provided with copious (abundance)resources, mentors, qualified speakers, accommodation to empower and guide you through this journey.</p>
                </div>

                <img src={t_asset} alt="" className='absolute md:bottom-[-65px] md:right-[137px] md:w-[233px] w-[97px] right-[15.33px] bottom-[-100px] -z-40'/>
            </div>
		</div>
	)
}

export default Container