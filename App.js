import React, { Component } from 'react';
import './App.css';

import RandomData from './data/random_excuses';
import TransportData from './data/transport_excuses'

class App extends Component {

  state = {
    category: "transport",
    excuse: ""
  }

  changeCategory = (event) => {
    this.setState({
      category: event.target.id
    })
  }

  displayRandomExcuse = () => {
    // Function that randomize index in data
    const randomize = (data) => Math.floor(Math.random() * data.length);
    // Declare empty variable that will store randomized index
    let idRandomzized;
    const disruptedTransportData = TransportData.filter(data => data.disruption !== false)
    switch(this.state.category) {
      case "transport":
        idRandomzized = randomize(disruptedTransportData);
        // Update excuse state with randomized index
        this.setState({
          excuse: "Désolé patron il y a " + disruptedTransportData[idRandomzized].excuse + " sur la ligne " + disruptedTransportData[idRandomzized].name
        })
        break;
      case "serious":
        idRandomzized = randomize(RandomData[0].serious);
        // Update excuse state with randomized index
        this.setState({
          excuse: RandomData[0].serious[idRandomzized].excuse
        })
        break;
      case "funny":
        idRandomzized = randomize(RandomData[1].funny);
        // Update excuse state with randomized index
        this.setState({
          excuse: RandomData[1].funny[idRandomzized].excuse
        })
        break;
      default:
        console.log("VA BOSSER")
    }
  }

  render() {
    // console.table(RandomData[0].serious)
    // console.table(RandomData[1].funny)
    // console.table(TransportData)
    // console.log(this.state.category);
    console.log(this.state.excuse)
    return (
      <div>
        <h5>Choissisez une catégorie</h5>
        <div>

          <input type="radio" id="transport" name="drone" value="transports"
            defaultChecked="checked"
            onChange={this.changeCategory}>
          </input>
          <label htmlFor="transport">Transports</label>

          <input type="radio" id="serious" name="drone" value="serious" 
          onChange={this.changeCategory}>
          </input>
          <label htmlFor="serious">Serious</label>

          <input type="radio" id="funny" name="drone" value="funny" 
          onChange={this.changeCategory}>
          </input>
          <label htmlFor="funny">Funny</label>

        </div>
        <div>
          <button type="button" onClick={this.displayRandomExcuse}>Valider</button>
        </div>
        <p>{this.state.excuse}</p>
      </div>
    );
  }
}






export default App;
