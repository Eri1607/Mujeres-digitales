import React, { useState, useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.");
  const [adviceId, setAdviceId] = useState(117);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.slip_id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">ADVICE #{adviceId}</h1>
      <blockquote>{advice}</blockquote>
      <button className="dice-button" onClick={fetchAdvice}>🎲</button>
    </div>
  );
};

export default App;
