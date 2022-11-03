import {Link, NavLink} from 'react-router-dom'
import './Sidebar.css'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Sponsors = () =>  {
  let center = "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";
  return(

      <section className=' my-40'>
        
      
  <img class="center" src={require('../../img/line.png')} alt="lined"/>

  <div className='container'>
  <img className="i3" src={require('../../img/headline.png')} alt="headline"/>
  <p className="centered">Sponsors</p>
  </div>
  <div class="wrapper">
     
        <img className= "item1" src={require('../../img/headlineb.png')} alt="imagebackgound"/>
        <img className= "item2"  src={require('../../img/headlineb.png')} alt="imagebackgound"/>
        <img className= "item3"  src={require('../../img/headlineb.png')} alt="imagebackgound"/>
        <img className= "item4"  src={require('../../img/headlineb.png')} alt="imagebackgound"/>
 
    </div>
    

  </section>


    )
  }

export default Sponsors 