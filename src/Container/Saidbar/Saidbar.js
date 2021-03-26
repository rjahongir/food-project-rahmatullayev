import {Link} from 'react-router-dom'
import './Saidbar.scss'
import SaodbarButton from '../../Component/SaidbarButton/SaidbarButton'
import {
  TopIcon,
  HomeIcon,
  Discount,
  Dashboard,
  Message,
  Notification,
  Setting,
  LogOut,
} from '../../assets/icon/icon'
const Saidbar = ({activPage,setActivPage}) => {

  return (
    <div className="project-saidbar">
      
      <SaodbarButton topBtn="top-btn" icon={<TopIcon/>}/>

      <Link to="/homePage" onClick={()=> setActivPage('home')}>
      <SaodbarButton icon={<HomeIcon/>} active={activPage === 'home'}/>
      </Link>

      <Link to="/dashboard" onClick={()=> setActivPage('dashboard')}>
      <SaodbarButton icon={<Discount/>} active={activPage === 'dashboard'}/>
      </Link>

      <Link to="/discount" onClick={()=> setActivPage('discount')}>
      <SaodbarButton icon={<Dashboard/>} active={activPage === 'discount'}/>
      </Link>



      {/* <Link to="/" onClick={()=> setActivPage('discount')}></Link>
    */}

      <Link to="/message" onClick={()=> setActivPage('message')}>
       <SaodbarButton icon={<Message/>} active={activPage === 'message'}/>
      </Link>

      <Link to="/notification" onClick={()=> setActivPage('notification')}>
       <SaodbarButton icon={<Notification/>} active={activPage === 'notification'}/>
      </Link> 

      <Link to="/setting" onClick={()=> setActivPage('Setting')}>
      <SaodbarButton icon={<Setting/>} active={activPage === 'Setting'}/>
      </Link>

      <Link onClick={()=> setActivPage('log-out')}>
      <SaodbarButton title="log-out" icon={<LogOut/>} active={activPage === 'log-out'}/>
      </Link>
      </div>
  )
}

export default Saidbar;