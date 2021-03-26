import './HomeHeaderComponent.scss'
import {SearchIcon} from '../../assets/icon/icon'
const HomeHeaderComponent = (props) => {
  const {title,dateCard} = props
  return(
    <div className="home-header">

      <div>
        <h2 className="home-header_title">{title}</h2>
        <p className="home-header_date">{dateCard}</p>
      </div>

      <span className="search-input-wrapper">
        <input className="home-header_search-input"  type="search" placeholder="Search for food, coffe, etc.."/>
        <span className="search-icon-lupa">{<SearchIcon/>}</span>
      </span>
        
    </div>
  )
}

export default HomeHeaderComponent;