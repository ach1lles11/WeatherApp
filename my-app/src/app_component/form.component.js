import React from 'react';
import './form.style.css';

const Form = props => {
  return(
    <div className="container">
      <div className="row">
      <form onSubmit={props.loadweather}>
        <div className="col-md-3">
            <input 
            type="text" 
            className="lat-control" 
            name="lat" 
            autoComplete="off" 
            placeholder="Latitude"/>
        </div>
        <div className="col-md-3">
            <input 
            type="text" 
            className="lon-control" 
            name="lon" 
            autoComplete="off" 
            placeholder="Longitude"/>
        </div>
        <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
        </div> 
        </form>
      </div>
    </div>
  );
}

export default Form;