import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Services = () => (
    
    <div class="container">
       <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Services</h1>
          <p>These are some of the services I will be doing.</p>
          <p><a class="btn btn-primary btn-lg" href="skilllevel/" role="button">Skill Level»</a></p>
        </div>
      </div>
        <div class="row">
          <div class="col-md-4">
            <h2>Tutor</h2>
            <p>I can tutor 8th grade or below English, Social Studies, and Science. And I can tutor math that is Geometry or below.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Soccer</h2>
            <p>I can teach to how to do skills, outside curve, inside curve, shooting and passing.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Coming Soon</h2>
            <p>Programming</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
        </div>

        <hr/>

      </div>
);

export default Services;