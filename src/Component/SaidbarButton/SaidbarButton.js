import './SaidbarButton.scss'
const SaidbarButton  = (props) => {
  const {icon,topBtn,active,title} = props
  return (
    <button className={`saidbar-btn ${title} ${active? "active": ''}`}>
      <span className={`span-btn ${topBtn? topBtn: ''}`}>{icon}</span>
    </button>
  )
}

export default SaidbarButton;