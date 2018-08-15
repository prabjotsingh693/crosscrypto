import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';



let options = {

		responsive: true,
		title:{
            display:false,

           
        },
        maintainAspectRatio: false,
        animation: {
            duration: 200,
            easing: 'linear'
        },
        defaultFontColor: "#FFFFFF",
        legend: {
        	display: false,
            labels: {

                fontColor: 'white',
                fontSize: 10	

            }
        }
        
    }

let timestamp = [];
		for(let i = 0 ; i<= 39; i++){
			i = i + 2
			timestamp.push(i);
		}
timestamp.reverse();


		








class LineChart extends Component  {

	 constructor(props) {
	 	super(props);
	 	this.state = {
	 		priceValue:[]

	 	}

	 	this.price = [];
	 	

	 }




	UNSAFE_componentWillReceiveProps(nextProps){
		
				this.price.push(this.props.data);
		
				if (this.price.length == timestamp.length + 1){
					this.price.shift();
				}
		
				this.setState({...this.state, priceValue: [...this.price]});
				
			
	
		
	}

	


	

	render(){

		

		let method = {
				labels: [...timestamp],
				datasets: [
				    {
				      
				      fill: false,
				      lineTension: 0,
				      backgroundColor: 'rgba(80, 154, 240,0.4)',
				      borderColor: 'rgba(80, 154, 240,1)',
				      borderCapStyle: 'butt',
				      borderWidth:1,	
				      borderDashOffset: 0.0,
				      borderJoinStyle: 'miter',
				      pointBorderColor: 'rgba(75,192,192,1)',
				      pointBackgroundColor: '#fff',
				      pointBorderWidth: 0,
				      pointHoverRadius: 5,
				      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				      pointHoverBorderColor: 'rgba(220,220,220,1)',
				      pointHoverBorderWidth: 2,
				      pointRadius: 0,
				      pointHitRadius: 10,
				      data:this.state.priceValue
				      
				    }
				  ]};  

		


		return (
			<div>
			
				<Line data={method} options={options}/>
			
			</div>

			)

	}
	

}


export default LineChart;