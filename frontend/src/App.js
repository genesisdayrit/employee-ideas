import React, { useState, useEffect } from 'react';
import { fetchIdeas } from './data/ideas';

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas()
      .then(fetchedIdeas => setIdeas(fetchedIdeas));
  }, []);

  const generatePrompt = () => {
    let prompt = 'Please categorize the following list of ideas into executable business initiatives\n\n';
    ideas.forEach((idea, index) => {
      prompt += `${index+1}. ${idea}\n`;
    });
    console.log(prompt);
  };

  return (
    <div className="App">
      <h1>Ideas List</h1>
      <ol>
        {ideas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ol>
      <button onClick={generatePrompt}>Generate Prompt</button>
    </div>
  );
}

export default App;
