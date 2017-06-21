import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Paragraph from './Paragraph';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          apiResult: ""
        }
    }
componentWillMount() {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=YEMKvEm5MuOdfgw78fTUcev1bURFxDnbuzSw2l0d')
    .then((response) => {
      console.log(response);
      this.setState({apiResult: response.data})
    })
    .catch((error) => {
      console.log(error);
    });


}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.apiResult.hdurl} alt="logo" />
          <h2>{this.state.apiResult.title}</h2>
        </div>
        <Paragraph
          explanation={this.state.apiResult.explanation}
        />
      </div>
    );
  }
}

export default App;
