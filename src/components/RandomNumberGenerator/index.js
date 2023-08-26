// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    this.setState({
      count: parseInt(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <div className="number-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.generate}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
