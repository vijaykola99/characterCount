import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharCount extends Component {
  state = {userInput: '', data: []}

  onchangeValue = event => {
    this.setState({userInput: event.target.value})
  }

  onAddListItem = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput !== '') {
      const latestData = {
        id: uuidv4(),
        userInput,
      }
      this.setState(prevState => ({
        data: [...prevState.data, latestData],
        userInput: '',
      }))
    }
  }

  renderList = () => {
    const {data} = this.state
    return (
      <ul className="result-list">
        {data.map(eacItem => (
          <li className="list-items" key={eacItem.id}>
            <p>
              {eacItem.userInput}: {eacItem.userInput.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {userInput, data} = this.state
    return (
      <div className="app-background">
        <div className="left-side-background">
          <div className="left-heading-background">
            <h1 className="left-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {data.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            this.renderList()
          )}
        </div>
        <div className="count-background">
          <h1 className="character-heading">Character Counter</h1>
          <form onSubmit={this.onAddListItem}>
            <input
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onchangeValue}
              className="input"
              type="text"
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default CharCount
