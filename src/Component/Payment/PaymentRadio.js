import CreditCard from '../../assets/img/creditcard.png'
import Paypal from '../../assets/img/Paypal.png'
import Cash from '../../assets/img/Vector.png'
import './PaymentRadio.scss'
const PaymentRadio = ({children,active}) => {
  console.log(active);
  return (
    <div className={`payment ${active? 'activ': ''}`}>
     <div className="modal-wrapper">
       <h3 className="payment-title">Payment</h3>
      <p className="payment-text">3 payment method available</p>
      <hr className="food-menu-hr"/>
      <h3 className="payment-method">Payment Method</h3>

      <form className="form-payment">
        <div className="payment-card-wrapper">
          <label className="radio">
            <input className="radio-input visually-hidden" type="radio" value="credit-card" name="type"/>
              <span className="radio-control">
                <img className="img-radio"  src={CreditCard} alt="Credit Card"/>
                <p className="radio-text">Credit Card</p>
              </span>
          </label>
        
          <label className="radio">
             <input className="radio-input visually-hidden" type="radio" value="paypal" name="type"/>
                <span className="radio-control">
                  <img className="img-radio" src={Paypal} alt="Paypal"/>
                  <p className="radio-text">Paypal</p>
                </span>
           </label>

        <label className="radio">
          <input className="radio-input visually-hidden" type="radio" value="cash" name="type"/>
          <span className="radio-control">
            <img className="img-radio" src={Cash} alt="Cash"/>
            <p className="radio-text">Cash</p>
          </span>
        </label>
        </div>
        <div className="payment-input-place-of-filling">
          
          <div>
          <label className="fill-label">
            Cardholder Name
            <input className="fill-label-input" name="cardholder-name" type="text" placeholder="Levi Ackerman"/>
          </label>
          </div>

          <div>
            <label className="fill-label">
               Card Number
               <input className="fill-label-input" name="card-number" type="number" placeholder="2564 1421 0897 1244"/>
            </label>
          </div>
       
        </div>
        <div className="payment-bottom">
    
          <label className="payment-bottom-label">
            Expritation Date
            <input className="paymet-bottom-input"
            type="number"
            placeholder="02/2022"
            name="expritation-date"/>
          </label>
    
          <label className="payment-bottom-label">
          CVV
            <input className="paymet-bottom-input"
            type="password"
            name="expritation-date"/>
          </label>
       
        </div>
        <hr className="food-menu-hr"/>

        <div className="payment-bottom">

    
          <label className="payment-bottom-label">
            Order Type
            <select className="paymet-bottom-input">
              <option selected>Dine In</option>
              <option value="Чебурашка">Чебурашка</option>
              <option value="Крокодил Гена">Крокодил Гена</option>
              <option value="Шапокляк">Шапокляк</option>
              <option value="Крыса Лариса">Крыса Лариса</option>
            </select>
        
          </label>
     
          <label className="payment-bottom-label">
            Table no.
            <input className="paymet-bottom-input"
            type="number"
            placeholder="Table no."
            name="expritation-date"/>
          </label>
       
        </div>
          {children}
    </form>
     </div>
      
    </div>
    
  )
}

export default PaymentRadio;