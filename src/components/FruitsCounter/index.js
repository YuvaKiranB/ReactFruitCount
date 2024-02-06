// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(previousState => ({mango: previousState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(previousState => ({banana: previousState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main">
        <div className="content">
          <h1 className="h1">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="fruitsContainer">
            <div className="mangoContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              {
                // eslint-disable-next-line
                <button className="button" onClick={this.eatMango}>
                  Eat Mango
                </button>
              }
            </div>

            <div className="bananaContainer">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              {
                // eslint-disable-next-line
                <button className="button" onClick={this.eatBanana}>
                  Eat Banana
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
