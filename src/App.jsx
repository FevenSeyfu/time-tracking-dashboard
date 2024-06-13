import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import ActivityCard from "./components/ActivityCard";
import Footer from "./components/Footer";
import { ActivityContext } from "./context/ActivityContext";
// import Data from './assets/data.json'

function App() {
  const [activityDuration, setActivityDuration] = useState("daily");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setActivities(data));
  }, []);

  const updateDuration = (newDuration) => {
    setActivityDuration(newDuration);
  };

  return (
    <ActivityContext.Provider value={{ activityDuration, updateDuration }}>
      <main className="container">
        <UserCard />
        {activities.map(activity => (
          <ActivityCard key={activity.title} activity={activity} />
        ))}
      </main>
      <Footer />
    </ActivityContext.Provider>
  );
}

export default App;