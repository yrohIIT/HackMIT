import logo from './logo.svg';
import './App.css';
import {GoogleMap} from "react-google-maps"
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import React from 'react';

function Map() {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 43.073051, lng: -89.401230}}/>
  );
}

const Wrapper = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style = {{width: '50vw', height: '50vh', margin:100}}>
      <form>
        <h1>Find start ups near you!</h1>
        <p>Distance from you to startup:</p>
        <input
          type="text" id="distance"
        />
      </form>
      <Wrapper 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCv5Omy7A_HGuo64G5tWyqf9Ka8HqKHIEc' }
        loadingElement = {<div style={{ height: "100%"}} />}
        containerElement = {<div style={{ height: "100%"}} />}
        mapElement = {<div style={{ height: "100%"}} />}
      />
    </div>
  );
}

export default App;