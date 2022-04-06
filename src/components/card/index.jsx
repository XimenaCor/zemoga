import React from 'react';
import { useSelector } from 'react-redux';

import ThumbsUp from '../../assets/img/thumbs-up.svg'
import ThumbsDown from '../../assets/img/thumbs-down.svg';

import '../../App.css';

const Card = ({
  person = null
}) => {
  const [positiveVotes, setPositiveVotes] = React.useState(0);
  const [negativeVotes, setNegativeVotes] = React.useState(0);
  const [visibleButtons, setVisibleButtons] = React.useState(true);
  const [voteType, setVoteType] = React.useState('');
  const [hasUserVote, setHasUserVote] = React.useState(false);

  const dataToRead = useSelector(state => state.votes.data);

  React.useEffect(() => {
    if (person) {
      const { votes: { positive, negative } } = person;
      setPositiveVotes(positive)
      setNegativeVotes(negative)
    }
  }, [person])

  React.useEffect(() => {
    if (hasUserVote) {
      const newPersonObject = {...person, votes:{
        positive: positiveVotes,
        negative: negativeVotes
      }}
      const index = dataToRead.findIndex((elem, index) => {
        if (elem._id === person._id) {
          return true
        }
      })
      let newData = dataToRead;
      newData[index] = newPersonObject;
      localStorage.setItem('localData', JSON.stringify(newData))
    }
  }, [hasUserVote])
  
  React.useEffect(() => {
    if (!visibleButtons) {
      setHasUserVote(false)
    }
  }, [visibleButtons])
  
  
  const handlePercentage = (value) => {
    const total = positiveVotes + negativeVotes;
    const percentaje = ((value * 100) / total).toFixed(1);
    return percentaje
  }

  const handleVoting = () => {
    if (voteType === 'up') {
      setPositiveVotes(positiveVotes + 1)
    }
    if (voteType === 'down') {
      setNegativeVotes(negativeVotes + 1)
    }
    setVisibleButtons(false);
    setHasUserVote(true);
  }

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
          {
            visibleButtons ? (
              <div style={{ display: 'flex', flexDirection: 'row', width: '30%' }}>
                <button className="icon-button" aria-label="thumbs up" onClick={() => setVoteType('up')}>
                  <img src={ThumbsUp} alt="thumbs up" />
                </button>
                <button className="icon-button" aria-label="thumbs down" onClick={() => setVoteType('down')}>
                  <img src={ThumbsDown} alt="thumbs down" />
                </button>
                <button className="icon-button" aria-label="thumbs up" onClick={handleVoting}>
                  Vote Now
                </button>
              </div>
            ) : (
              <button className="icon-button" aria-label="thumbs up" onClick={() => setVisibleButtons(true)}>
                Vote Again
              </button>
            )
          }
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ backgroundColor: 'teal', width: `${handlePercentage(positiveVotes)}%` }}>
          {handlePercentage(positiveVotes)}%
        </div>
        <div style={{ backgroundColor: 'orange', width: `${handlePercentage(negativeVotes)}%` }}>
          {handlePercentage(negativeVotes)}%
        </div>
      </div>
    </div>
  )
}

export default Card;