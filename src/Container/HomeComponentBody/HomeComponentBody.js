import './HomeComponentBody.scss'
import Food1 from '../../assets/img/food1.png'
import FoodMenuComponent from '../../Component/FoodMenuComponent/FoodMenuComponent'
const HomeComponentBody = () => {

   const foodArr = [
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    },
    {
      imgFood: Food1,
      foodsTatistics: 'Spicy seasoned seafood noodles',
      foodPrice: `$ ${2.29}`,
      foodMultipleAvailability: '20 Bowls available'
    }
  ]

 
  return (
    <div className="home-component-body">
      <div className="food-header">
       <h3>Choose Dishes</h3>
       <select className="food-header-select">
          <option selected>Dine In</option>
          <option>Dine In</option>
          <option>Dine In </option>
          <option>Dine In</option>
          <option >Dine In</option>
       </select>
      </div>

      <div className="nimadir">
        {
        foodArr.map((item) => (
            <FoodMenuComponent
            imgFood={item.imgFood}
            foodsTatistics={item.foodsTatistics}
            foodPrice={item.foodPrice}
            foodMultipleAvailability={item.foodMultipleAvailability}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomeComponentBody;