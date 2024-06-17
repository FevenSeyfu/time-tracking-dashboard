import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";
import { ActivityContext } from "./context/ActivityContext";
import data from "../data.json"

function App() {
  const [activityDuration, setActivityDuration] = useState("daily");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(data);
  }, []);

  const updateDuration = (newDuration) => {
    setActivityDuration(newDuration);
  };

  return (
    <ActivityContext.Provider value={{ activityDuration, updateDuration }}>
      <main className="container">
        <UserCard />
        <div className="activity-container">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={activity.id} />
          ))}
        </div>
      </main>
      <Footer />
    </ActivityContext.Provider>
  );
}

export default App;
