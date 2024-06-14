import React, { useContext } from "react";
import iconEllipsis from "../assets/images/icon-ellipsis.svg";
import { ActivityContext } from "../context/ActivityContext";
import "../assets/CSS/ActivityCard.css";
import IconEllipsis from "./IconEllipsis";

const ActivityCard = ({ activity }) => {
  const { activityDuration } = useContext(ActivityContext);

  return (
    <article className={`activity-card ${activity.title.toLowerCase()}`}>
      <div className="activity-content">
        <section className="heading">
          <h2>{activity.title}</h2>
          <button>
            <IconEllipsis className="icon-ellipsis"/> 
          </button>
        </section>
        <section className="activity-record">
          <p className="current">
            {activity.timeframes[activityDuration].current}hrs
          </p>
          <p className="previous">
            Previous - {activity.timeframes[activityDuration].previous}hrs
          </p>
        </section>
      </div>
    </article>
  );
};

export default ActivityCard;
