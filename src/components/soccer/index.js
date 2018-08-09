import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Soccer = () => (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
            <li data-target="#myCarousel" data-slide-to="1" class=""></li>
            <li data-target="#myCarousel" data-slide-to="2" class="active"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
                <div class="container">
                    <div class="carousel-caption text-left">
                        <h1>Summer League</h1>
                        <p>We were the champions of fresh/soph summer league. We won every game except for the first two, but that was because we were all new to each other and had bad chemistry.</p>
                        <p><a class="btn btn-lg btn-primary" href="/soccerleaguegames" role="button">Summer League Games</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Soccer</h1>
                        <p>I play Central Defensive Mid or Center Back for soccer. I can also play stiker or goalkeeper, but thoses two are my favorite positions.</p>
                        <p><a class="btn btn-lg btn-primary" href="/soccerlearnmore" role="button">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
                <div class="container">
                    <div class="carousel-caption text-right">
                        <h1>Soccer Games</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a class="btn btn-lg btn-primary" href="/soccergame" role="button">Games</a></p>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
);

export default Soccer;