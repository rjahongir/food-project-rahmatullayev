import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './assets/main.scss'
import Saidbar from './Container/Saidbar/Saidbar'
import HomePage from './Pages/HomePage'
import Dashboard from './Pages/Dashboard'
import Discount from './Pages/Discount/Discount'
import Message from './Pages/Message/Message'
import Notification from './Pages/Notification/Notification'
import Setting from './Pages/Setting/Setting'
const App = () => {
const [activPage, setActivPage] = useState("")
  return (
    <Router>
      <div className="app">
      <Saidbar activPage={activPage} setActivPage={setActivPage}/>

    <Switch>
      <Route path="/homePage" component={HomePage}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/discount" component={Discount}/>
      <Route path="/message" component={Message}/>
      <Route path="/notification" component={Notification}/>
      <Route path="/setting" component={Setting}/>
    </Switch>
    </div>
    </Router>
    
  )
}

export default App;
