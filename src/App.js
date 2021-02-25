import './App.css';
import React, {useState} from 'react'
import rockImg from './rock.jpg'
import paperImg from './paper.png'
import scissorsImg from './scissors.png'
import Icon from './Icon'
import ScoreCard from './ScoreCard';

// import Player from './Player'
function App() {
  const [player1Value,setPlayer1Value] = useState('')
  const [computerValue, setComputerValue] = useState('')
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [result, setResult] = useState('')

  const handleChange = (value) => {
    console.log('Handle change called')
    setPlayer1Value(value)
    console.log(player1Value)
    selectComputerValue()
    console.log(computerValue)
    decideWin()
  }

  const selectComputerValue = () => {
    const optionArray = ["Rock", "Paper", "Scissors"]
    setComputerValue(optionArray[Math.floor(Math.random()*optionArray.length)])
  }

  const finalResult = () => {
    if (playerScore > computerScore) {
      setResult('Player 1 Wins!!!')
    } else if (playerScore < computerScore) {
      setResult('Computer Wins!!!')
    } else {
      setResult('Game Draw!!!!')
    }
  }

  const decideWin = () => {
    // validate(e)
    // selectComputerValue()
    if ((player1Value === 'Rock' && computerValue === 'Rock') || (player1Value === 'Paper' && computerValue === 'Paper') || (player1Value === 'Scissors' && computerValue === 'Scissors')) {
      alert(`Player 1 Selected - ${player1Value} \n Computer Selected - ${computerValue} \n Game Draw`)
    } else if ((player1Value === 'Rock' && computerValue === 'Paper') || (player1Value === 'Paper' && computerValue === 'Scissors') || (player1Value === 'Scissors' && computerValue === 'Rock')) {
      setComputerScore(computerScore + 1)
      alert(`Player 1 Selected - ${player1Value} \n Computer Selected - ${computerValue} \n Computer Wins`)
    } else if ((computerValue === 'Rock' && player1Value === 'Paper') || (computerValue === 'Paper' && player1Value === 'Scissors') || (computerValue === 'Scissors' && player1Value === 'Rock')) {
      alert(`Player 1 Selected - ${player1Value} \n Computer Selected - ${computerValue} \n Player 1 Wins!!!`)
      setPlayerScore(playerScore + 1)
    }
  }

  return (
    <div className='container'>
      <div> 
        <label className='label'>Select One Option</label><br /> <br />
        <Icon value='Rock' imgName={rockImg} handler={() => handleChange('Rock')}/>
        <Icon value='Paper' imgName={paperImg} handler={() => handleChange('Paper')}/>
        <Icon value='Scissors' imgName={scissorsImg} handler={() => handleChange('Scissors ')}/>
      </div>
      <div className='sub-container'>
        <div className='player1'>
          <label> You Selected</label>
          <label className='selected-value'> {player1Value} </label>
        </div>
        <div className='player2'>
          <label> Computer </label>
          <label className='selected-value'> {computerValue} </label>
        </div>
      </div>
      <ScoreCard playerScore={playerScore} computerScore={computerScore}/>
      <button onClick={finalResult}>Finish Game</button>
      {result !== '' ? <label> {result} </label> : null}
    </div>
    
  );
}

export default App;