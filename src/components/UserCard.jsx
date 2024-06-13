import React, { useContext } from 'react'
import { ActivityContext } from '../context/ActivityContext';

const UserCard = () => {
    const {activityDuration,updateDuration } = useContext(ActivityContext)
    const handleClick  = (e) => {
        updateDuration(e.target.className);
    }
  return (
    <article className="user-info">
        <div>
          <img src="" alt="" />
          <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="activity-type">
          <button className="daily" onClick={handleClick}>Daily</button>
          <button className="weekly" onClick={handleClick}>Weekly</button>
          <button className="monthly" onClick={handleClick}>Monthly</button>
        </div>
      </article>
  )
}

export default UserCard