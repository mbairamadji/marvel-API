import React from 'react'
import Card from './Card'
import axios from 'axios'
import crypto from 'crypto'





//Api URL and Keys
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
const BASE_URL = "http://gateway.marvel.com:80";
const URI = "/v1/public/characters";


//Get timestamp
const ts = Math.floor(new Date().getTime()/1000);

//Hashing query params hash
const concatenatedString = ts + API_PRIVATE + API_PUBLIC;

const hash = crypto.createHash("md5").update(concatenatedString).digest("hex");


//Reqest URL
const URL = `${BASE_URL}${URI}?ts=${ts}&apikey=${API_PUBLIC}&hash=${hash}`;



export default class MarvelMap extends React.Component{
constructor(props) {
	super(props);
	this.state = {
		heros :[]
	}
}
componentDidMount() {
 axios.get(URL).then((res) => {

 	this.setState({heros : res.data.data.results});
 })
	
}


	render() {
			console.log(this.state);
		return (
			<div>
				<h1 style={{textAlign:"center"}}>Liste des super héros:</h1>
				{this.state.heros.map((hero) => {
					return(

							<Card key={hero.id}
								name={hero.name}
								img={hero.thumbnail.path + "/standard_fantastic" + "." + hero.thumbnail.extension}>
							</Card>
						)
		

				})}
			</div>

			)
	}			
}