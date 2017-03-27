import React from 'react'
import ReactDOM from 'react-dom'
import MarvelMap from '../Components/MarvelMap'


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