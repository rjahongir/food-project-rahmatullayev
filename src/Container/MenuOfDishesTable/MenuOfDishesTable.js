import {Link} from 'react-router-dom'
import {useState} from 'react'
import './MenuOfDishesTable.scss'
import MenuOfDishesButton from '../../Component/MenuOfDishesButton/MenuOfDishesButton'
const MenuOfDishesTable = () => {
  const [activFood, setActivFood] = useState("")
  return (
    <div className="menu-btn-table">
     
      <Link to="/homeComponentBody" onClick={()=> setActivFood("hot")}>
      <MenuOfDishesButton
      title="Hot Dishes"
      activ={activFood == "hot"}
      />
      </Link>
      
      <Link to="/coldDishes" onClick={()=> setActivFood("Cold-Dishes")}>
      <MenuOfDishesButton 
      activ={activFood == "Cold-Dishes"}
      title="Cold Dishes"
      />
      </Link>
      
      <Link to="/soup" onClick={()=> setActivFood("Soup")}>
      <MenuOfDishesButton
      activ={activFood == "Soup"}
      title="Soup"
      />
      </Link>
      
      <Link to="grill" onClick={()=> setActivFood("Grill")}>
      <MenuOfDishesButton
      activ={activFood == "Grill"}
      title="Grill"
      />
      </Link>
     
      <Link to="appetizer" onClick={()=> setActivFood("Appetizer")}>
      <MenuOfDishesButton
     activ={activFood == "Appetizer"}
      title="Appetizer"
      />
      </Link>
      
      <Link to="dessert" onClick={()=> setActivFood("Dessert")}>
      <MenuOfDishesButton
      activ={activFood == "Dessert"}
      title="Dessert"
      />
      </Link>
     

      <hr className="menu-btn-hr"/>
    </div>
  )
}


export default MenuOfDishesTable;