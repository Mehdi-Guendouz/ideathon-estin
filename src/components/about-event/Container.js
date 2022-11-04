import './Container.css'

import asset6 from '../../img/asset\ 6.svg'
import yellow_and_black from '../../img/yellow\ and\ black.svg'
import vector7 from '../../img/Vector7.png'
import vector8 from '../../img/Vector8.png'
import traced from '../../img/Untitled_Artwork\ 4\ 1\ (Traced).svg'
import traced1 from '../../img/Untitled_Artwork\ 4\ 1\ (Traced)-1.svg'
import t_asset from '../../img/T\ asset.svg'

const Container = () => {
	return (
		<div className='mt-20'>
			<div className='container relative mx-auto md:pt-[122.44px] md:pb-[100.3px]'>
                <div className='relative'>
                    <h1 className='text-center md:text-7xl font-[700] text-[28px]'>IDEATECH 2022</h1>
                    <img src={traced1} alt="" className='absolute lg:top-[25px] lg:left-[-100px] lg:h-[89.61px] h-[67px] top-[25px] left-[-150px]'/> 
                    <img src={traced} alt="" className='absolute lg:top-[-370px] lg:right-[-195px] lg:h-[415px] h-[155px] top-[-120px] right-[-60px]'/> 
                </div>
			    <div className='flex justify-center flex-wrap relative md:mt-20 mt-[58px] md:items-center'>
                    <p className='md:w-[552px] md:text-[36px] w-[396px]  font-[350] md:leading-[40.68px]'>IdeaTech is an ideathon on its second-year edition in the higher national school of computer and digital sciences and technologies (ESTIN Amizour), organized by the scientific club ByteCraft. </p>
                    <div className='image relative md:ml-16 mt-[29px]'>
                        <img src={vector7} alt="" className='md:w-[448.67px] w-[307px]'/>
                        <img src={yellow_and_black} alt="" className='absolute md:top-[259px] md:left-[385px] md:w-[91.5px] w-[62.47px] top-[-3px] right-[-3px]'/>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap-reverse relative md:mt-[59.5px] mt-[47px] md:items-center'>
                    <div className='image relative'>
                        <img className='md:w-[486px] w-[336px]' src={vector8} alt=""/>
                        <img src={asset6} alt="" className='absolute md:top-[7px] md:left-[26px] md:w-[106px] w-[73.28px] top-[8px] left-[41px]'/>
                    </div>
                    <p className='md:text-[36px] md:ml-[23px] md:w-[617px] md:leading-[40.68px] w-[396px] text-[22px] font-[350] '>We welcome all participants from all around the country to this competition, to come up with and develop ideas solutionary to a given theme of problematics, where they realize a prototype without the coding part,  in teams of 15 and only in 48 hours, provided with copious (abundance)resources, mentors, qualified speakers, accommodation to empower and guide you through this journey.</p>
                </div>
                <img src={t_asset} alt="" className='absolute md:bottom-[-65px] md:right-[137px] md:w-[233px] w-[97px] right-[15.33px] bottom-[-100px]'/>
            </div>
		</div>
	)
}

export default Container