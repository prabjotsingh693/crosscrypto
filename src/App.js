import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import {withRouter} from 'react-router-dom';
import Welcome from './components/welcome';
import Choice from './components/choices';
import Logout from './components/logout'
import auth from './components/auth';
import Report from './components/report';

import {connect} from 'react-redux';


import * as actionTypes from './store/action';


import Index from './components/main';
import './App.css';
import Navbar from './components/subcomponent/navbar';


class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      
     	<div>

     	

      	<Router>

                <div>
                  <Navbar/> 
                  <Route exact path="/" component={Welcome}/>
                  {/* <Route  path="/auth" component={auth}/> */}
                  {/* <Route path='/logout' component={Logout}/> */}
                  <Route  path="/userchoice" component={Choice}/>
                  <Route  path="/index" component={Index}/>
                  <Route  path="/report" component={Report}/>
                  
                    
                </div>
         </Router>

         </div>
      

    );
  }
}


const mapDispatchToProps = dispatch =>{
    return {
      onTryAutoSignup : () => dispatch(actionTypes.isAuth())
    }
}

export default connect(null,mapDispatchToProps)(App);
