import React, { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState({
    fullName: "maryam",
    bio: "A passionate software developer.",
    imgSrc: "https://via.placeholder.com/150",
    profession: "Software Developer",
  });
  const [shows, setShows] = useState(false); 
  const [timeSinceMounted, setTimeSinceMounted] = useState(0); 

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSinceMounted((prevTime) => prevTime + 1);
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []); 

  
  const toggleProfile = () => {
    setShows((prevShows) => !prevShows);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-5">Profile</h1>
      <button
        onClick={toggleProfile}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
      >
        {shows ? "Hide Profile" : "Show Profile"}
      </button>
      
      {shows && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <img
            src={person.imgSrc}
            alt="Profile"
            className="rounded-full w-32 h-32 border-4 border-gray-200 mb-4"
          />
          <h2 className="text-xl font-semibold">{person.fullName}</h2>
          <p className="text-gray-600 mb-4">{person.bio}</p>
          <h3 className="text-lg font-medium text-gray-700">{person.profession}</h3>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg text-gray-600">
          Time Since Mounted:{" "}
          <span className="font-semibold">{timeSinceMounted}</span> seconds
        </h3>
      </div>
    </div>
  );
}

export default App;
