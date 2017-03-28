import React from 'react'
import ReactDOM from 'react-dom'
import MarvelMap from '../Components/MarvelMap'
import Hero from '../Components/Hero'
import Home from '../Components/Home'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import './app.css'



ReactDOM.render( 
				<Router history={browserHistory} >
					<Route path="/" component={Home}/>
					<Route path="/heros" component={MarvelMap}/>
					<Route path="/aim" component={Hero}/>
				</Router>,

	document.getElementById('app'));