import React, { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
import "../assets/CSS/UserCard.css";
import userImg from "../assets/images/image-jeremy.png";

const UserCard = () => {
  const { activityDuration, updateDuration } = useContext(ActivityContext);
  const handleClick = (e) => {
    updateDuration(e.target.className.split(' ')[0]);
  };
  return (
    <article className="user-card">
      <div className="user-info">
        <img src={userImg} alt="user image" className="user-img" />
        <div>
          <p className="title">Report for</p>
          <h1 className="user-name">Jeremy Robson</h1>
        </div>
      </div>
      <div className="activity-type">
        <button
          className={`daily ${activityDuration === "daily" ? "active" : ""}`}
          onClick={handleClick}
        >
          Daily
        </button>
        <button
          className={`weekly ${activityDuration === "weekly" ? "active" : ""}`}
          onClick={handleClick}
        >
          Weekly
        </button>
        <button
          className={`monthly ${
            activityDuration === "monthly" ? "active" : ""
          }`}
          onClick={handleClick}
        >
          Monthly
        </button>
      </div>
    </article>
  );
};

export default UserCard;
