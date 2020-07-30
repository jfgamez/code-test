import React from 'react';
import '../css/App.css';
import CompareForm from './CompareForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          JSON Object Similarity Score
        </h1>
		    <CompareForm /> 
        <p className="padding-5">
          The aim of this program: Compares two json objects and give a score between 0 and 1 as to how similar they are, a score of 1 meaning the objects are identical.
          There are sample JSON files in the data directory for testing.
        </p>
      </header>
    </div>
  );
}

export default App;