import React from 'react'

const buttonStyle = {
	width : "150px",
	height : "40px",
	borderRadius : "5px",
	margin : 'auto 50%', 
	fontSize : "16px"
}
export default class Aim extends React.Component{

	render() {
		return (
				<div>
					<h2>Fiche d' identité:</h2>
					<img src={this.props.img} style={{marginLeft:"25px"}} />
					<div style={{float : "right", marginRight: "500px"}}>
						<h3>{this.props.name}</h3>
						<p>{this.props.description}</p>
						<Link to='/'><button style={buttonStyle}>Go back</button></Link>
					</div>
				</div>
			)
	}
}