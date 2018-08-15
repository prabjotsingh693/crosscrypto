import React from 'react'
import './welcome.css'
import {Jumbotron} from 'react-bootstrap';

 const welcome =(props) =>{

		
		return (
			//message page only 
			//static 
			//no state
			<Jumbotron style={{color:'#fff', height: '100vh'}} >
				<center>
				<h1 style={{fontFamily: "'Cabin', sans-serif" ,
				 fontWeight:"bold" , marginTop:'10%'}}>CROSSCRYPTO </h1>
				 <p style={{fontSize:'16px',marginBottom:'2px' }}>RealTime Visualization of Crypto Rates</p>
				 <p style={{fontSize:'16px'}}>Demo Project</p>
				 <button 
				 		className='createAccBtn' style={{border:'2px solid #509af0' ,
				 		 borderRadius:'7px',
				 		 backgroundColor:'#283546'}}
						onClick={() =>{props.history.replace('/userchoice');}}
						  >Get Started 	&nbsp; <i class="fa fa-caret-right"></i></button>	


				</center>
			</Jumbotron>
	)
}

export default welcome;