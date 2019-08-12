import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        {
          name: "XUV500",
          id: 'xuv'
        },
        {
          name: "Skoda laura",
          id: 'sl345'
        },
        {
          name: "Hyundai i10",
          id: 'hydi10'
        },
        {
          name: "Honda city",
          id: 'hcy'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.cars.map(e => <h2 key={e.id}>{e.name}</h2>)
          }
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.greet} </p>
          <button onClick={() => { this.setState({ greet: 'its working!' }) }}> Change text!</button> */}
        </header>
      </div>
    );
  }
}

export default App;
