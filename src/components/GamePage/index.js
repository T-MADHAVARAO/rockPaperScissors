import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import {Bg, HeaderCont, ItemsCont, Heading, Score, ScoreCont} from './style'
import Item from '../Item'
import './index.css'

class GamePage extends Component {
  state = {
    randomId: '',
    userId: '',
    randomImg: '',
    userImg: '',
    isGame: true,
    score: 0,
  }

  playAgain = () => {
    this.setState({isGame: true})
  }

  onUserClick = (id, imageUrl) => {
    const {choicesList} = this.props
    const lengthList = choicesList.length
    const randomVal = choicesList[Math.floor(Math.random() * lengthList)]

    this.setState(
      {
        randomId: randomVal.id,
        userId: id,
        isGame: false,
        randomImg: randomVal.imageUrl,
        userImg: imageUrl,
      },
      () => {
        const {randomId, userId} = this.state
        let result
        if (userId === 'ROCK') {
          if (randomId === 'PAPER') {
            result = 'YOU LOSE'
          } else if (randomId === 'ROCK') {
            result = 'IT IS DRAW'
          } else {
            result = 'YOU WON'
          }
        } else if (userId === 'PAPER') {
          if (randomId === 'PAPER') {
            result = 'IT IS DRAW'
          } else if (randomId === 'ROCK') {
            result = 'YOU WON'
          } else {
            result = 'YOU LOSE'
          }
        } else if (userId === 'SCISSORS') {
          if (randomId === 'PAPER') {
            result = 'YOU WON'
          } else if (randomId === 'ROCK') {
            result = 'YOU LOSE'
          } else {
            result = 'IT IS DRAW'
          }
        }
        if (result === 'YOU WON') {
          this.setState(old => ({score: old.score + 1}))
        } else if (result === 'YOU LOSE') {
          this.setState(old => ({score: old.score - 1}))
        }
        this.setState({result})
      },
    )
  }

  GameResultView = () => {
    const {result, userImg, userId, randomId, randomImg} = this.state
    return (
      <div className="result-page">
        <div className="select-val">
          <div>
            <h1>YOU</h1>
            <img className="select-img" src={userImg} alt="your choice" />
          </div>
          <div>
            <h1>OPPONENT</h1>
            <img className="select-img" src={randomImg} alt="opponent choice" />
          </div>
        </div>
        <p>{result}</p>
        <button type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {isGame, score} = this.state
    const {choicesList} = this.props
    return (
      <Bg>
        <div>
          <HeaderCont>
            <div>
              <Heading>Rock Paper Scissors</Heading>
            </div>
            <ScoreCont>
              <p>Score</p>
              <Score>{score}</Score>
            </ScoreCont>
          </HeaderCont>
        </div>
        <div className="wrap-item">
          {isGame ? (
            <ItemsCont>
              {choicesList.map(each => (
                <Item each={each} key={each.id} onUserGame={this.onUserClick} />
              ))}
            </ItemsCont>
          ) : (
            this.GameResultView()
          )}
          <Popup
            model
            trigger={
              <div className="rules-cont">
                <button className="rules-btn" type="button">
                  Rules
                </button>
              </div>
            }
            position="center"
          >
            {close => (
              <div className="popup-container">
                <div>
                  <button type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </button>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-img"
                />
              </div>
            )}
          </Popup>
        </div>
      </Bg>
    )
  }
}

export default GamePage
