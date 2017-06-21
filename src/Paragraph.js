import React from 'react';
import './App.css';
function Paragraph(props) {
  return (
    <p className="App-intro">
      {props.explanation}
    </p>
  );
}

export default Paragraph;  
