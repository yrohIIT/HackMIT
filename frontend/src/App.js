import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [],
      display_list :[],
      loading: true
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:8000/api/get_users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          list: json,
          loading: false
        });
      });
  }

  // Converts numeric degrees to radians
  toRad(Value) {
    return Value * Math.PI / 180;
  }

  getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371;
    var dLat = this.toRad(lat2-lat1);
    var dLon = this.toRad(lon2-lon1);
    var lat1 = this.toRad(lat1);
    var lat2 = this.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d*0.621371;
  }
  
  handleClick() {
    // Set the 
  }

  render() {

    if (this.state.loading) {
      return 'Loading...'
    }

    else {
      console.log(this.state);
      const dis_list = [];
      const labels = ['title', 'distance (in miles)'];
      for (var i=0; i < this.state.list.length; i++) {
        dis_list[i] = [ this.state.list[i].title,
                        this.getDistance(this.state.list[0].lat, this.state.list[0].lng, 
                                         this.state.list[i].lat, this.state.list[i].lng)];
      }

      // Inside form, write a button that calls a function
      return (
        <div style = {{width: '50vw', height: '50vh', margin:100}}>
          <form>
            <h1>Find start ups near you!</h1>
            <p>Distance from you to startup:</p>
            <input
              type="text" id="distance"
            />
          </form>

          <thead>
          <tr>
            {labels.map((item, index) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dis_list.slice(0, dis_list.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>

        </div>
      );
    }
  }
}

export default App;