import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Profile = () => (
    <div class="container">
        <div class=" card" >
            <img class="card-img-top home-image" src="" alt="Tony" />
            <div class="card-body">
                <h5 class="card-title">Tony J. Wang</h5>
                <p class="card-text">Age 14</p>
                <a href="https://www.instagram.com/tjw4_88/?hl=en"  target="_blank" class="btn btn-primary">Instagram</a>
            </div>

        </div>
    </div>
);

export default Profile;