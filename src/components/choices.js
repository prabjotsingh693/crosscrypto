import React, { Component } from 'react';

import * as actionTypes from '../store/action';

import {Jumbotron} from 'react-bootstrap';
// import { Link } from 'react-router-dom'

import {connect} from 'react-redux';

// import axios from 'axios';

import './choices.css'; 




//render list of stocks
  class Lists extends Component {
  		//state for selected iteams.
  		//toggle the ui (button color)
		//if the stock is clicked ---state active

		constructor(props) {
			console.log('choice')
        super(props);
        this.state = {
        	active: false
        	

        };


      		 
  	 };

  	 

  		render()  {

  		//toggle css classes 

  		

  		


  		let stylez ='choice_believe ';
  		if(this.state.active){
		  	stylez = 'choice_believe clicked';
		  }
		  else{

		  	stylez = 'choice_believe ';

		  }



		return (

			<ul className={stylez}
			 style={{marginTop:'5px', marginLeft:'10px'}}
			 
			 onClick={()=>this.props.click(this.props.lists,()=>{
			 	return (//callback body
			 			this.setState({ ...this.state,
			 				active : !this.state.active //state set

			 			})

			 			
			 		)
				 })}>	

				<li >
					{this.props.lists}
				</li>
			</ul>

			)
	}
	}
		





class Choice extends Component {


	constructor(props){
		super(props);
		this.stockSelected = [];
	}

	

 	//store select stock and also send callback if the item clicked 
 	selected =(name,callback)=>{
 		let names = name.substr(0,name.indexOf(' ')).slice(1, -1);

 		//check if the element present in the array or not
 
 		if(this.stockSelected.indexOf(names) === -1){
 			this.stockSelected.push(names); 
 		}
 		else
 		{
 			let index = this.stockSelected.indexOf(names);
 			 this.stockSelected.splice(index, 1);

 		}

 		callback();

 	
 		
 		
 	}


 	choice_selected =()=>{
 		if(this.stockSelected.length !== 0){
 		this.props.history.push({pathname: '/index'})
 		console.log('value here',this.stockSelected)
 		this.props.store_selected_stock(this.stockSelected);
 		}
 		else{
 			alert('please choose')
 		}

 	}
 	
		render() {

	    return (

	    	<Jumbotron style={{color:'#fff'}} >
	    	<center >
	    		<h2 style={{fontFamily: "'Cabin', sans-serif" ,
					 fontWeight:"bold" , marginTop:'10%'}}>
					 What do you believe in ?
				</h2>
				<div style={{marginTop:'3%',color:"white" , width:'800px'}}>
						
				{this.props.list_stock.map((res,index) => <Lists key={index}  
														 lists={res}
														 click={this.selected}
														 id={index}/>)}	

		
				</div>	
				<button className="stock_submit"
				 onClick={this.choice_selected} to="/index">Submit</button>		
			</center>		
			</Jumbotron>

	    	)

	}

}


Choice.defaultProps ={
	list_stock: ['(BTC) Bitcoin',
				'(EOS) EOS',
				'(ETH) Ethereum',
				'(XRP) Ripple',
				'(LTC) Litecoin',
				'(BCH) Bitcoin Cash/BCC',
				'(TRX) Tronix','(NEO) NEO', 
				'(ELF) aelf', '(ETC) Ethereum Classic',
				'(XVG) Verge',
				 '(BNB) Binance Coin', 
				 '(HT) Huobi Token', 
				 '(ICX) ICON Project',
				'(QTUM) QTUM', 
				'(ONT) Ontology']
	
}

const mapDispatchToProps = dispatch =>{
	return {
		store_selected_stock: (stocksel) => dispatch(actionTypes.stock_selected(stocksel))
	}
}

export default connect(null,mapDispatchToProps)(Choice);