import axios from 'axios';


export const STOCK_SELECTED ='STOCK_SELECTED';
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const RESET_STOCK = 'RESET_STOCK'

export const LOGOUT = 'LOGOUT';


export const stock_selected = (val) =>{
	return {
		type:STOCK_SELECTED,
		result:val
	};
}


export const resetStockSelected = ()=>{
	console.log('call')
	return {
		type:RESET_STOCK
	}
}

export const authStart =()=>{
	return {
		type: AUTH_START
	}
}

export const authSuccess =(token,userId)=>{

	return {
		type: AUTH_SUCCESS,
		token:token,
		userId:userId
	}
}

export const authFail =(error)=>{
	return {
		type: AUTH_FAIL,
		error: error
	}
}

export const logout =()=>{
	localStorage.removeItem('token');
	localStorage.removeItem('time');
	localStorage.removeItem('userId');


	return {
		type:LOGOUT
	}
}

export const checkAuthTime = (time)=>{
	return dispatch =>{
		setTimeout(()=>{
			dispatch(logout());

		},time * 1000)
	}
}

export const auth = (email,password,isSignup)=>{
	return dispatch =>{
		dispatch(authStart())
		const authData ={
			email:email,
			password: password,
			returnSecureToken:true
		}

		let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDGmO7D4S220WN4aXWh-iLQfGMl8N_h10Q';

		if(isSignup){
			url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDGmO7D4S220WN4aXWh-iLQfGMl8N_h10Q'	
		}

		axios.post(url,authData)
			.then(res=>{
				console.log(res);

				const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
				
				localStorage.setItem("token", res.data.idToken);
				localStorage.setItem("time", expirationTime);
				localStorage.setItem("userId", res.data.localId);


				

				dispatch(authSuccess(res.data.idToken,res.data.localId));
				dispatch(checkAuthTime(res.data.expiresIn)); 
				
			})
			.catch(err=>{
				console.log(err.response.data.error.message);
				dispatch(authFail(err.response.data.error.message));
			});
		}
}


export const isAuth =()=>{
	return dispatch =>{
		const token = localStorage.getItem('token');

		if(!token){
			dispatch(logout);
		}
		else{
			const expirationtime = new Date(localStorage.getItem('time')) ;

			 if(expirationtime <= new Date()){
					dispatch(logout);
			 	
			 }

			 else{
			 	const userId = localStorage.getItem('userId');
			 	dispatch(authSuccess(token,userId));
			 	dispatch(checkAuthTime( (expirationtime.getTime() - new Date().getTime()) / 1000 ))

			 }
		}
	}
}