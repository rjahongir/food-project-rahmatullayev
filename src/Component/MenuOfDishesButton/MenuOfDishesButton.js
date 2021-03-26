import './MenuOfDishesButton.scss'
const MenuOfDishesButton = (props) => {
  const {title,activ} = props
  return (
   
    <button className={`menu-dishes-btn ${activ?"active-menu": ""}`}>
      {title}
      <hr className={`display-n ${activ?"button-menu-border-bottom": ""}`}/>
    </button>
  )
}
export default MenuOfDishesButton;