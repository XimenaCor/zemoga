import React from 'react';
import '../../App.css';
import ThumbsUp from '../../assets/img/thumbs-up.svg'
import ThumbsDown from '../../assets/img/thumbs-down.svg';

const Card = ({
  person = null
}) => {

  const [percentagePositive, setPercentagePositive] = React.useState(0);
  const [percentageNegative, setPercentageNegative] = React.useState(0);

  React.useEffect(() => {
    if (person) {
      const { votes } = person;
      const total = votes.positive + votes.negative;
      const positive = (votes.positive * 100)/total;
      const negative = (votes.negative * 100)/total;
      setPercentagePositive(positive);
      setPercentageNegative(negative);     
    }
  }, [person])
  

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
        <div style={{ backgroundColor: 'teal', width: `${percentagePositive}%` }}>
          {percentagePositive.toFixed(1)}%
        </div>
        <div style={{ backgroundColor: 'orange', width: `${percentageNegative}%` }}>
          {percentageNegative.toFixed(1)}%
        </div>
      </div>
    </div>
  )
}

export default Card;