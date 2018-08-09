import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => (
    <div class="container">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">TJ's Highschool Sport Life</h1>
            <h2 class="display-4">2018-2022</h2>
        </div>

        <div >
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Fall: Football</h4>
                    </div>
                    <div class="card-body">

                        <ul class="list-unstyled mt-3 mb-4">

                        </ul>
                        <a class="btn btn-lg btn-block btn-outline-primary" href="/football" role="button">Football</a>
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Winter: Soccer</h4>
                    </div>
                    <div class="card-body">

                        <ul class="list-unstyled mt-3 mb-4">

                        </ul>


                        <a class="btn btn-lg btn-block btn-outline-primary" href="/soccer" role="button">Soccer</a>

                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Spring: Field and Track</h4>
                    </div>
                    <div class="card-body">

                        <ul class="list-unstyled mt-3 mb-4">

                        </ul>
                        <a class="btn btn-lg btn-block btn-outline-primary" href="/fieldandtrack" role="button">Field and Track</a>
                    </div> 
                </div>
            </div>


        </div>
    </div>
);

export default Home;