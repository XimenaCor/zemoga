import React from 'react';
import '../../App.css';
import ThumbsUp from '../../assets/img/thumbs-up.svg'
import ThumbsDown from '../../assets/img/thumbs-down.svg';

const Card = ({
  person = {
    "name": "Kanye West",
    "description": "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    "category": "entertainment",
    "picture": "kanye.png",
    "lastUpdated": "2020-03-10T23:08:57.892Z",
    "votes": {
      "positive": 23,
      "negative": 36
    }
  }
}) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '2px black solid' }}>
      <div style={{ display: 'flex', flexDirection: 'row', backgrounColor: 'gray', width: '100%' }}>
        <div style={{ width: '20%' }}>
          <button className="icon-button" aria-label="thumbs up">
            <img src={ThumbsUp} alt="thumbs up" />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '80%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
            <p>{person.name}</p>
            <p>{person.description}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', width: '30%' }}>
            <button className="icon-button" aria-label="thumbs up">
              <img src={ThumbsUp} alt="thumbs up" />
            </button>
            <button className="icon-button" aria-label="thumbs up">
              <img src={ThumbsDown} alt="thumbs down" />
            </button>
            <button className="icon-button" aria-label="thumbs up">
              Vote Now
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ backgroundColor: 'teal', width: '20%' }}>
          25.6%
        </div>
        <div style={{ backgroundColor: 'orange', width: '80%' }}>
          85.6%
        </div>
      </div>
    </div>
  )
}

export default Card;