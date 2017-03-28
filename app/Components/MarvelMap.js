import React from 'react'
import Card from './Card'
import Hero from './Hero'
import axios from 'axios'
import crypto from 'crypto'


//Api URL and Keys
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
const BASE_URL = "http://gateway.marvel.com:80";
const URI = "/v1/public/characters";
const INFO_URI = URI + "/" + 1009144;

//Get timestamp
const ts = Math.floor(new Date().getTime()/1000);

//Hashing query params hash
const concatenatedString = ts + API_PRIVATE + API_PUBLIC;

const hash = crypto.createHash("md5").update(concatenatedString).digest("hex");


//Reqest URL
const charactersUrl = `${BASE_URL}${URI}?ts=${ts}&apikey=${API_PUBLIC}&hash=${hash}`;
const infoUrl = `${BASE_URL}${INFO_URI}?ts=${ts}&apikey=${API_PUBLIC}&hash=${hash}`;

export default class MarvelMap extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			heroes :[],
			details :[]
		}
	}
	componentDidMount() {
		axios.get(charactersUrl).then((res) => {

			 return	this.setState({heroes : res.data.data.results});

	 	axios.get(infoUrl).then((res) => {
			 return this.Setstate({details: res.data.data.results})
		})

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

	getDetails() {
		return this.state.details.map((detail) => {
			return(
				<Hero key={detail.id}
					  name={detail.name}
					  description={detail.description}
					  img={detail.thumbnail.path + "/standard_fantastic" + "." + detail.thumbnail.extension}>


				</Hero>


				)
		})		
	}

	render() {
		let results = this.getHeroes();
		let infos = this.getDetails();
		return (
			<div>
				<h1 style={{textAlign:"center"}}>Liste des super héros:</h1>
				<div>{results}</div>
				
			</div>

			)
	}			
}