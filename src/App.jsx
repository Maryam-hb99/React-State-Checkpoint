import React, { useState, useEffect } from "react";
import "./index.css";  // Import the CSS file

function App() {
  // State initialization using useState
  const [person, setPerson] = useState({
    fullName: "maryam",
    bio: "A passionate software developer.",
    imgSrc: "https://via.placeholder.com/150",
    profession: "Software Developer",
  });
  const [shows, setShows] = useState(false); // To toggle the profile visibility
  const [timeSinceMounted, setTimeSinceMounted] = useState(0); // Track time since mounted

  // useEffect for setting up the timer (componentDidMount equivalent)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSinceMounted((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup the interval when the component is unmounted (componentWillUnmount equivalent)
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs only once after the first render

  // Toggle profile visibility
  const toggleProfile = () => {
    setShows((prevShows) => !prevShows);
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <button onClick={toggleProfile} className="button">
        {shows ? "Hide Profile" : "Show Profile"}
      </button>
      {shows && (
        <div className="profile">
          <img src={person.imgSrc} alt="Profile" className="image" />
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <h3>{person.profession}</h3>
        </div>
      )}
      <div className="time">
        <h3>Time Since Mounted: {timeSinceMounted} seconds</h3>
      </div>
    </div>
  );
}

export default App;
