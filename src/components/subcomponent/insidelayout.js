import React, { Component } from 'react';

import {Col,Table} from 'react-bootstrap';

import LineChart from './line';

import './insidelayout.css'

 const Insidelayout = (props) =>	{

 		
	
		const {title,shortname,Price,Change,Open,High,Low,Vol,Market} = props;
		return(
				<Col xs={6} md={2} style={{border:'1px solid #509af0', marginLeft:'10px',
					 width:'365px', marginBottom:'10px' ,color:'#fff'}}>
					      <center>
					        <h3>{shortname}</h3>

					        <hr style={{borderTopColor:'#509af0' ,opacity:'0.5'}}/>
					        
					       </center> 

					       <Table className='react-bs-container-body'>

					       		<tbody>

					       		
					       		<tr >
							      
							      <td>Price</td>
							      <td className="text-right">{Price}</td>
							      
							    </tr>


							    <tr>
							      
							      <td>CHANGE 24HOURPCT</td>
							      <td className="text-right">{Change}</td>
							      
							    </tr>

							    <tr>
							      
							      <td>OPEN 24HOUR</td>
							      <td className="text-right">{Open}</td>
							      
							    </tr>


							    <tr>
							      
							      <td>HIGH 24HOUR</td>
							      <td className="text-right">{High}</td>
							      
							    </tr>


							    <tr>
							      
							      <td>LOW 24HOUR</td>
							      <td className="text-right">{Low}</td>
							      
							    </tr>

							     <tr>
							      
							      <td>VOLUME 24HOUR</td>
							      <td className="text-right">{Vol}</td>
							      
							    </tr>

							     <tr>
							      
							      <td>MARKET</td>
							      <td className="text-right">{Market}</td>
							      
							    </tr>

						</tbody>



					       </Table>
		        <hr style={{borderTopColor:'#509af0',opacity:'0.5'}}/>
					        
					        <LineChart data={Price} name={shortname}/>
					      
					    </Col>
			)
	}


export default Insidelayout