import React,{useState} from 'react'
import rockImg from './rock.jpg'
import paperImg from './paper.png'
import scissorsImg from './scissors.png'

const Player = ({image}) => {
  const imgArray = [rockImg, paperImg, scissorsImg]
  const [img,setImg] = useState('')
  const imageSelector = () => {
    setImg(imgArray[Math.floor(Math.random()*3)])
  }
  return (
    <div>
      <div className="icon">
        <img src={img} alt="Select an option" width="100" height="100"/>
      </div>
      <div>
        <button className='primary-btn' 
          onClick={imageSelector}
        >
            Player 1</button>
      </div>
      First section
    </div>
    )
}

export default Player