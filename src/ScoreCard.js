import React from 'react'

const ScoreCard = ({playerScore, computerScore}) => {
  return (
    <div>
      <div>
        <label>Player1 </label>
        <label>{playerScore}</label>
      </div>
      <div>
        <label>Computer </label>
        <label>{computerScore}</label>
      </div>
    </div>
  )
}

export default ScoreCard