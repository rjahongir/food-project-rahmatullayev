import './FoodPurchaseMenu.scss'
import FoodImg from '../../assets/img/food1.png'
import {KarzinkaBtnIcon} from '../../assets/icon/icon'
import FoodPurchaseItem from '../../Component/FoodPurchaseItems/FoodPurchaseItem'

const FoodPurchaseMenu = () => {

  const FoodItemArr = [
    {
      foodItmImg: FoodImg,
      structure: 'Spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: 'Order Note...',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>

    },
    {
      foodItmImg: FoodImg,
      structure: 'Spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: ' Please, just a little bit spicy only.',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>
    },
    {
      foodItmImg: FoodImg,
      structure: 'spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: 'Order Note...',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>
    },
    {
      foodItmImg: FoodImg,
      structure: 'spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: 'Order Note...',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>
    },
    {
      foodItmImg: FoodImg,
      structure: 'spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: 'Order Note...',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>
    },
    
    {
      foodItmImg: FoodImg,
      structure: 'spicy seasoed sea...',
      price: 4.58,
      totalPrice: 4.58,
      leaveComent: 'Order Note...',
      karzinkaBtnIcon: <KarzinkaBtnIcon/>
    }
  ]
  
  return (
    <div className="food-menu">

      <div>
        {
            FoodItemArr.map((item) => (
            <FoodPurchaseItem
            foodItmImg ={item.foodItmImg}
            structure ={item.structure}
            price ={item.price}
            totalPrice ={item.totalPrice}
            leaveComent = {item.leaveComent}
            karzinkaBtnIcon = {item.karzinkaBtnIcon}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default FoodPurchaseMenu;