import './FoodMenuComponent.scss'
const FoodMenuComponent = (props) => {
  const {imgFood,foodsTatistics,foodPrice,foodMultipleAvailability} = props
  return (

    <div className="food-body-menu">
      <img className="food-body-menu_img" src={imgFood} alt="food"/>
      <div>
        <p className="food-statistic-text">{foodsTatistics}</p>
        <p className="food-price-text">{foodPrice}</p>
        <span className="bowls-available">{foodMultipleAvailability}</span>
      </div>
    </div>
  )
}

export default FoodMenuComponent;