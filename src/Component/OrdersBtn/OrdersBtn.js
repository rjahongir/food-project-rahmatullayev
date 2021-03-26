import './ordersBtn.scss'
const OrderBtn = (props) => {
  const {title} = props
  return (
    <button className="order-btn">{title}</button>
  )
}

export default OrderBtn;