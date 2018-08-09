import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Football = () => (
	<div class="container text-center">
		<h1 class="jumbotron-heading">Football</h1>
		<p class="lead text-muted">Playing as a Kicker</p>
		<p>
			<a href="/footballgame" class="btn btn-primary my-2">Games</a>
			<a href="/footballfartestkick" class="btn btn-secondary my-2">Farthest Kicks</a>
		</p>
	</div>


);

export default Football;