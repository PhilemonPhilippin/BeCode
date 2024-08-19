import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Time in milliseconds.
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [pauseAndLap, setPauseAndLap] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setPauseAndLap(false);
    } else {
      clearInterval(interval);
    }
    // Clean up return
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleLap = () => {
    if (isRunning) {
      const newLaps = [...laps, time];
      setLaps(newLaps);
    } else {
      if (pauseAndLap === false) {
        const newLaps = [...laps, time];
        setLaps(newLaps);
        setPauseAndLap(true);
      }
    }
  };

  return (
    <div className="StopWatch">
      <div className="timer">
        <h1>
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          {("0" + ((time / 10) % 100)).slice(-2)}
        </h1>
      </div>
      <div className="btns-container">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <div className="laps-container">
        <ul>
          {laps &&
            laps.map((lap) => (
              <li key={lap}>
                {("0" + Math.floor((lap / 60000) % 60)).slice(-2)}:
                {("0" + Math.floor((lap / 1000) % 60)).slice(-2)}:
                {("0" + ((lap / 10) % 100)).slice(-2)}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
