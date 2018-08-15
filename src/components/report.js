import React, { Component } from 'react';
import LineChart from './subcomponent/line';
import {Link} from 'react-router-dom';
import io from "socket.io-client";



class Report extends Component{



	componentWillUnmount(){
		console.log('this die')
	}



	render(){



		return (
			<div>
			<LineChart  />
			
			</div>

			)
	}

}


export default Report;