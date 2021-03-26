import {useState} from 'react'
import './FoodPurchaseitem.scss'
const FoodPurchaseItem = (props) => {
    const {
    foodItmImg,
    structure,
    price,
    leaveComent,
    karzinkaBtnIcon} = props

  const [count, changCount] = useState(0)

   const foodTotalPrice = (e) => {
    changCount(e.target.value * price)
    }

  return (
   <div className="food-purchase-item">

     <div className="food-purchase-item_wrapper">
        <div className="food-price-wrapper">
       <img className="food-img" src={foodItmImg} alt="food"/>
       <span>
          <p className="food-structure">{structure}</p>
          <span className="food-price">{`$ ${price}`}</span>
       </span>
     </div>

     <input className="number-of-meals-input" type="text" onChange={foodTotalPrice} min="0"/>
     <span className="price-figure-food ">{`$ ${count}`}</span>
     </div>

     <div className="leave-a-comment">
       <input className="leave-a-comment-input" type="text" placeholder={leaveComent}/>
     <button className="leave-a-comment-btn" type="submit">{karzinkaBtnIcon}</button>
     </div>
   </div>
  )
}

export default FoodPurchaseItem;