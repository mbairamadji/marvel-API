import React from 'react'
import ReactDOM from 'react-dom'
import MarvelMap from '../Components/MarvelMap'
import Hero from '../Components/Hero'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import './app.css'



ReactDOM.render( 
				<Router history={browserHistory} >
					<Route path="/" component={MarvelMap}>
						<Route path="/hero/:id" component={Hero}/>
					</Route>
				</Router>,

	document.getElementById('app'));