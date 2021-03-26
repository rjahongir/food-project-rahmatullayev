import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Order from '../../Container/Orders/Orders'

import HomeHeaderComponent from '../../Component/HomeHeaderComponent/HomeHeaderComponent'
import MenuOfDishesTable from '../../Container/MenuOfDishesTable/MenuOfDishesTable'
import HomeComponentBody from '../../Container/HomeComponentBody/HomeComponentBody'
import ColdDishes from '../../Container/ColdDishes/ColdDishes'
import Soup from '../../Container/Soup/Soup'
import Grill from '../../Container/Grill/Grill'
import Appetizer from '../../Container/Appetizer/Appetizer'
import Dessert from '../../Container/Dessert/Dessert'

import './HomePage.scss'
const HomePage = () => {
  return (
    <Router>
     <div className="home-page">
       <div className="wraper-home-dining-room">
       <HomeHeaderComponent title="Jaegar Resto" dateCard="Tuesday, 2 Feb 2021"/>
        <MenuOfDishesTable/>
        <Switch>
        <Route path="/homeComponentBody" component={HomeComponentBody}/>
        <Route path="/coldDishes" component={ColdDishes}/>
        <Route path="/soup" component={Soup}/>
        <Route path="/grill" component={Grill}/>
        <Route path="/appetizer" component={Appetizer}/>
        <Route path="/dessert" component={Dessert}/>
       </Switch>
       </div>
      <Order/>
      
      
    </div> 
    </Router>
  )
}

// activFood={activFood} setActivFood={setActivFood}
export default HomePage;