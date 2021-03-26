import {useState} from 'react'
import OrdersBtn from '../../Component/OrdersBtn/OrdersBtn'
import FoodPurchaseMenu from '../FoodPurchaseMenu/FoodPurchaseMenu'
import PaymentRadio from '../../Component/Payment/PaymentRadio'

import './Orders.scss'
const Order = () => {
const [modalCount, changModalCount] = useState(false)

  return (
   <div className="order-food">

     <h3 className="order-food__title">Orders #34562</h3>
     <div className="order-food-btn">
     <OrdersBtn title="Dine In"/>
     <OrdersBtn title="To Go"/>
     <OrdersBtn title="Delivery"/>
     </div>
      
     <span className="price-item-qty">
       <span className="price_item">Item</span>
       <span className="qty">Qty</span>
       <span className="price">Price</span>
     </span>
     <hr className="order-food-hr"/>

     <FoodPurchaseMenu/>

     <hr className="food-menu-hr"/>
     <div>
       <div className="pric-discount-wrapper">
         <span className="discount">Discount</span>
         <span className="pric-discount">$ 0</span>
       </div>

       <div className="pric-discount-wrapper">
         <span className="discount">Sub total</span>
         <span className="pric-discount">$ 21,03</span>
       </div>
       <button className="payment-btn" onClick={() => changModalCount(true)}>Continue to Payment</button>

            <PaymentRadio active={modalCount}>
              <button className="cancel" onClick={() => changModalCount(false)}>Cancel</button>
              <button className="confirm-ayment" onClick={() => changModalCount(false)}>Confirm Payment</button>
            </PaymentRadio> 
       
     </div>

  </div>
  )
}

export default Order;