import React from 'react'
import {Link} from 'react-router'



const cardStyle = {
	 card :{
	 	width:"300px", 
	 	height:"360px", 
	 	float:"left", 
	 	marginLeft:"80px",
	 	marginTop: "30px",
	 	border : "1px solid lightGrey",
	 	borderRadius: "5px"
	 },
	 cardImage : {
	 	width: "300px",
	 	height: "260px",
	 	backgroundColor:"lightGrey"

	 },
	 cardName : {
	 	borderTop : "1px solid lightGrey",
	 	borderBottom : "1px solid lightGrey",
	 	padding : "10px"
	 },

	 cardInfo : {
	 	fontSize : "12px",
	 	marginRight : "30px",
	 	color: "#494949"
	 }
}

export default class Card extends React.Component{

    render() {
		return (
				<div style={cardStyle.card}>
					<div style={cardStyle.cardImage}>
						<img src={this.props.img} style={{marginLeft:"25px"}} />
					</div>
					<p style={cardStyle.cardName}>{this.props.name}</p>
					<div style={cardStyle.cardInfo}>
						<i className="fa fa-book" aria-hidden="true">detail</i>
						<i className="fa fa-book" aria-hidden="true">wiki</i>
						<i className="fa fa-book" aria-hidden="true">comiclink</i>
					</div>
				</div>

			)
	}

}