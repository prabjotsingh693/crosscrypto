import React, { Component } from 'react';
// import {link} from 'react-router-dom';
import {Jumbotron} from 'react-bootstrap';
import Layout from './pinter';



import './indexbody.css';



export default class indexbody extends Component{



  
	

	render(){
		return (
			<Jumbotron >
			  <Layout />

			</Jumbotron>
			)
	}

}
