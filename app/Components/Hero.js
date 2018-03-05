import React from 'react'
import axios from 'axios'
import crypto from 'crypto'
import Aim from './Aim'
import Comic from './Comic'
import Serie from './Serie'


//Api URL and Keys
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
const API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
const BASE_URL = "//gateway.marvel.com:80";
const URI = "/v1/public/characters";
const INFO_URI = URI + "/" + 1009144;

//Get timestamp
const ts = Math.floor(new Date().getTime()/1000);

//Hashing query params hash
const concatenatedString = ts + API_PRIVATE + API_PUBLIC;

const hash = crypto.createHash("md5").update(concatenatedString).digest("hex");

//Reqest URL
const infoUrl = `${BASE_URL}${INFO_URI}?ts=${ts}&apikey=${API_PUBLIC}&hash=${hash}`;

export default class Hero extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		details : [],
		comics :[],
		series : []
	};
	this.getDetails = this.getDetails.bind(this);
	this.getComics = this.getComics.bind(this);
    this.getSeries = this.getSeries.bind(this);

}

componentDidMount() {
		axios.get(infoUrl).then((res) => {
    	 	this.setState({details : res.data.data.results,
    	 	comics : res.data.data.results[0].comics.items,
    	 	series : res.data.data.results[0].series.items});
		
    })

}

	getDetails() {
		return this.state.details.map((detail) => {
			return(
				<Aim key={detail.id}
					  name={detail.name}
					  description={detail.description}
					  img={detail.thumbnail.path + "/standard_fantastic" + "." + detail.thumbnail.extension}>
				</Aim>


				)
		})		
	}
	
	 getComics() {
	 	return this.state.comics.map((comic) => {
	 		return(<Comic key={comic.resourceURI} comic={comic.name}>
	 				
	 			   </Comic>)
	 	})
	 }

	 getSeries() {
	 	return this.state.series.map((serie) => {
	 		return(<Serie key={serie.resourceURI} serie={serie.name}>
	 				
	 			   </Serie>)
	 	})
	 }

	render() {	
		let aimDetails = this.getDetails();
	    let comics = this.getComics();
	    let series = this.getSeries();

		return (
				<div>
				    <div>{aimDetails}</div>
				    <h3 style={{marginLeft: "300px"}}>Comics</h3>
					{comics}
					<h3 style={{marginLeft: "300px"}}>Series</h3>
					{series}
				</div>
			)
	}	
}