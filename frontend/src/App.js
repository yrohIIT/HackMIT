import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: {},
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
        })
      });
  }

  render() {
    if (this.state.loading) {
      return 'Loading...'
    }

    return (
      <div style = {{width: '50vw', height: '50vh', margin:100}}>
        <form>
          <h1>Find start ups near you!</h1>
          <p>Distance from you to startup:</p>
          <input
            type="text" id="distance"
          />
        </form>
      </div>
    );
  }
}

export default App;