// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachsearch, rendering} = props
  const {suggestion} = eachsearch
  const onclickingArrow = () => {
    rendering(suggestion)
  }
  return (
    <li className="suggestion-style">
      <p>{suggestion}</p>
      <img
        className="redirect-style"
        onClick={onclickingArrow}
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
