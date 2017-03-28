import React from 'react'
import './MarvelMap'
import './Hero'
import {Link} from 'react-router'
import marvel from '../src/marvel.jpg'

const style = {
	headerStyle : {
		width: "100%",
		height: "80px",
		marginBottom : "30px"
	},
	buttonStyle : {
		width : "200px",
		height : "40px",
		borderRadius : "5px", 
		marginLeft:"300px",
		marginTop : "150px",
		fontSize : "16px"
	}
}
export default class Home extends React.Component {


	
	render() {	
		return (
				<div>
					<div style={style.headerStyle}>
						<h2 style={{textAlign: "center"}}>Bienvenue sur MarvelPage</h2>
						<img src={marvel} alt="marvel" style={{width : "100%"}}/>
					</div>
					<div style={{marginTop:"50px"}}>
						<Link to="/heros"><button style={style.buttonStyle} > Liste des héros </button></Link>
						<Link to="/aim"><button style={style.buttonStyle}> Détails A.I.M. </button></Link>
					</div>
				</div>

			)
	}	
}