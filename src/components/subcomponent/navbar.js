import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Navbar , Nav , NavItem} from 'react-bootstrap';
import './navbar.css';
import {connect} from 'react-redux';

 class navbar extends Component{
 	componentDidMount(){
 		console.log(this.props)
 	}


 	userAuth = ()=>{
 		this.props.history.replace('/auth');
 	}

 	userLogout = () =>{
 		this.props.history.replace('/logout')
	 }
	 
	 home = () =>{
		this.props.history.replace('/');
	 }

	render(){
		return (
			
			<Navbar  collapseOnSelect fixedTop>
				  <Navbar.Header>
				    <Navbar.Brand onClick={this.home} style={{color:'#fff' , marginTop:'10px' , cursor:'pointer'}}>
							{/* <a  style={{color:'#fff', marginTop:'10px'}}></a> */}
							<i class="fa fa-bitcoin"></i>	CrossCrypto
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav>
				      
				     
				     
				    </Nav>
				    {/* <Nav pullRight>
				      

				      {
				      	!this.props.isAuth ?
					    
								 <NavItem eventKey={2} onClick={this.userAuth} 
								 		style={{border:'2px solid #509af0' , borderRadius:'7px', paddingLeft:'35px' , paddingRight:'35px'}}>
					        login 
					      </NavItem>
				      	:
				      	  <NavItem  eventKey={1} onClick={this.userLogout} style={{color:'#fff'}}>
				       		logout
				      	</NavItem>

				      }


				     
				    </Nav> */}
				  </Navbar.Collapse>
			</Navbar>
			);
	}
}


const mapStateToProps = state =>{
	return {
		isAuth: state.token !==null

	}
}


export default connect(mapStateToProps)(withRouter(navbar));