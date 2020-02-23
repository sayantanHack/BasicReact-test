import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { GooogleMapReact, withScriptjs, withGoogleMap } from "google-map-react";

function Map() {
  return (
    <GooogleMapReact
      defaultZoom={10}
      defaultCenter={{ lat: 22.572645, lng: 88.363892 }}
    />
  );
}

let MapWrapElement = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <h1>
        Resturant Review App
      </h1>
      <mapWrapElement googlemapurl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&KEY="MY-GOOGLEMAP-API-KEY"`
      }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
