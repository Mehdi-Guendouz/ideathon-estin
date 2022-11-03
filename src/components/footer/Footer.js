import {Link, NavLink} from 'react-router-dom'
import './Footer.css'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
const Footer = () =>  {

  return(
    <footer>
      <div class="bordclasse">
       <img className="bord"  id="bord1"/>
       </div>
      <div class="parent-wrapper">
      <div class="parent">
      <img class="logopng" src={require('../../img/logo-png.png')} alt="line"/>
     
      <img class="fb" src={require('../../img/fb.png')} alt="line"/>
      <img class="ig" src={require('../../img/ig.png')} alt="line"/>
      <img class="in" src={require('../../img/in.png')} alt="line"/>
      
       
      <img class="byte" src={require('../../img/byte.png')} alt="line"/>
      </div>
      <h2 class="text"> Copyright © 2022. All right reserved</h2>
      </div>

      
     
      
    
      
          </footer>      
  
    )
  }

export default Footer