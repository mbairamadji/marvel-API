import React from 'react'
import Card from './Card'
import axios from 'axios'
import crypto from 'crypto'
import { Link } from 'react-router'


//Api URL and Keys
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
const BASE_URL = "https://gateway.marvel.com:80";
const URI = "/v1/public/characters";
const INFO_URI = URI + "/" + 1009144;

//Get timestamp
const ts = Math.floor(new Date().getTime()/1000);

//Hashing query params hash
const concatenatedString = ts + API_PRIVATE + API_PUBLIC;

const hash = crypto.createHash("md5").update(concatenatedString).digest("hex");


//Reqest URL
const charactersUrl = `${BASE_URL}${URI}?ts=${ts}&apikey=${API_PUBLIC}&hash=${hash}`;

const buttonStyle = {
	width : "150px",
	height : "40px",
	borderRadius : "5px",
	margin : 'auto 50%', 
	fontSize : "16px"
}


export default class MarvelMap extends React.Component{
	constructor(props) {
		super(props);
		this.state = {heroes :[] }
	}
	
	componentDidMount() {
		axios.get(charactersUrl).then((res) => {

			this.setState({heroes : res.data.data.results});
    })
	}

	getHeroes() {
		return this.state.heroes.map((hero) => {
			return(
				<Card key={hero.id}
					name={hero.name}
					img={hero.thumbnail.path + "/standard_fantastic" + "." + hero.thumbnail.extension}>
				</Card>
			)
		
		})
	}


	render() {
		let results = this.getHeroes();
		return (
			<div>
				<h1 style={{textAlign:"center"}}>Liste des super héros:</h1>
				<Link to='/'><button style={buttonStyle}>Go back</button></Link>
				<div>{results}</div>
			</div>

			)
	}			
}