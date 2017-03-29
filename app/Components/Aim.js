import React from 'react'


export default class Aim extends React.Component{

	render() {
		return (
				<div>
					<h2>Fiche d' identité:</h2>
					<img src={this.props.img} style={{marginLeft:"25px"}} />
					<div style={{float : "right", marginRight: "500px"}}>
						<h3>{this.props.name}</h3>
						<p>{this.props.description}</p>
					</div>
				</div>
			)
	}
}