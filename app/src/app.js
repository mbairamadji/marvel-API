import React from 'react'
import ReactDOM from 'react-dom'
import MarvelMap from '../Components/MarvelMap'
import './app.css'

 class App extends React.Component {
	render () {
		return (

				<div>
					<MarvelMap/>
				</div>
			)
	}
}	


ReactDOM.render(<App/>, document.getElementById('app'));