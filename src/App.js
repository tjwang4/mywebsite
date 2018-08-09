import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import GoogleApiWrapper from './components/map';
import Home from './components/home';
import Soccer from './components/soccer';
import SoccerLearnmore from './components/soccer/learnmore';
import SoccerLeaguegames from './components/soccer/summerleaguegames';
import SoccerGame from './components/soccer/games';
import Football from './components/football';
import FootballGame from './components/football/games';
import FootballFartestkick from './components/football/fartestkick';
import Profile from './components/profile';
import Services from './components/services';
import Fieldandtrack from './components/fieldandtrack';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
	<Router>
		<div>
			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/soccer" component={Soccer} />
      <Route path="/map" component={GoogleApiWrapper} />
      <Route path="/soccerlearnmore" component={SoccerLearnmore} />
      <Route path="/soccerleaguegames" component={SoccerLeaguegames} />
      <Route path="/soccergame" component={SoccerGame} />
      <Route path="/football" component={Football} />
      <Route path="/footballgame" component={FootballGame} />
      <Route path="/footballfartestkick" component={FootballFartestkick} />
      <Route path="/fieldandtrack" component={Fieldandtrack} />
      <Route path="/profile" component={Profile} />
      <Route path="/services" component={Services} />
	
			<Footer />
		</div>
	</Router>
);


export default App;