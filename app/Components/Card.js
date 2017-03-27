import React from 'react'




export default class Card extends React.Component{

    render() {
		return (
				<div style={{width:"300px", height:"300px", float:"left", marginLeft:"80px"}}>
					
					<h3>{this.props.name}</h3>
					<img src={this.props.img}/>
				</div>

			)
	}

}