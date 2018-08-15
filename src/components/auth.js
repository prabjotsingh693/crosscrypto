import React, { Component } from 'react';
import {FormGroup, ControlLabel,
	FormControl,HelpBlock,
	Jumbotron,Col,Form,Button} from 'react-bootstrap';

import {Redirect} from 'react-router-dom';


import * as actions from '../store/action';
import {connect} from 'react-redux';
import './auth.css';
import Spinner from './subcomponent/Spinner'

 
class auth extends React.Component {


  constructor(props, context) {
    super(props, context);

    

    this.state = {
      email: '',
      password:'',
      isSignup:false
    };
  }

  
  emailChange =(e) =>{
    this.setState({ email: e.target.value });
    
  }


  passwordChange=(e) =>{
    this.setState({ password: e.target.value });
  }

  submited = (event)=>{
    event.preventDefault();
    // console.log(this.state);
     this.props.onAuth(this.state.email,this.state.password,this.state.isSignup)
  }

  switch=()=>{
    this.setState({ isSignup: !this.state.isSignup });
  }

  render() {

    // let errorMessages = null;

    // if(this.props.error){

    //     errorMessages = (
          
    //       )
    // }

    return (


    	<Jumbotron style={{height:'100vh'}}>
        {this.props.isAuth ? <Redirect to='/userchoice'/> :  null}
    		<center>

    		<div style={{marginTop:'200px', width:'400px', 
    					 border:'1px solid #509af0'}} >

              {this.props.error? <p style={{color:'red',marginTop:'5px'}}>{this.props.error}</p>: null} 

    			<h2 style={{color:'#fff'}}>CrossCrypto</h2>
          <h5 style={{color:'#fff'}}>lorem ipsuem sui hshdi hefuh kjs</h5>


    			{
            this.props.loading ? <Spinner/> :


            <Form
                     horizontal style={{padding:'15px'}}
                     onSubmit={this.submited}
                     >
                    <FormGroup controlId="formHorizontalEmail" >
                     
                      <Col sm={12}>
                        <FormControl type="email" placeholder="Email" onChange={this.emailChange} style={{borderRadius:'0'}} />
                      </Col>
                    </FormGroup>
          
                    <FormGroup controlId="formHorizontalPassword" > 
                     
                      <Col sm={12}>
                        <FormControl type="password" placeholder="Password" onChange={this.passwordChange} style={{borderRadius:'0'}}/>
                      </Col>
                    </FormGroup>
          
                    <FormGroup>
                      <Col  sm={12} >
                        <Button type="submit" 
                         block style={{borderRadius:'0'}}>SUBMIT</Button>
          
          
          
                         
                      </Col>
                    </FormGroup>
                  </Form>


                }

         <button className='switch_btn' onClick={this.switch}
        style={{borderRadius:'0',backgroundColor: '#283546', color: '#fff',border: 'none' }}>Switch to {this.state.isSignup? 'SIGNUP' : 'SIGNIN'}</button>
    		

    		</div>
    		</center>
      	</Jumbotron>
    );
  }
}

const mapStateToProps = state =>{
  return {
      loading : state.loading,
      error:state.error,
      isAuth : state.token !== null
  }
}

const mapDispatchToProps = (dispatch)=>{

  return{
    onAuth : (email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
}
}

export default  connect(mapStateToProps, mapDispatchToProps)(auth);