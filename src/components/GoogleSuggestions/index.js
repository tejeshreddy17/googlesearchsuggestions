// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchinput: ''}

  rendering = suggestion => {
    document.getElementById('input-value').value = suggestion
    this.setState({searchinput: suggestion})
  }

  onclickingInput = event => {
    this.setState({searchinput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchinput} = this.state
    const filteredlist = suggestionsList.filter(eachsearch =>
      eachsearch.suggestion.toLowerCase().includes(searchinput.toLowerCase()),
    )
    return (
      <div className="background-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        <div className="search-style">
          <div className="search-box-container">
            <img
              className="search-icon-style"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              placeholder="search google"
              id="input-value"
              className="search-box-style"
              type="search"
              onChange={this.onclickingInput}
            />
          </div>
          {filteredlist.map(eachsuggestion => (
            <SuggestionItem
              eachsearch={eachsuggestion}
              rendering={this.rendering}
              key={eachsuggestion.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
