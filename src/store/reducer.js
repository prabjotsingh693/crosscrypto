import * as actionTypes from './action';

const initialState ={
	selected_stock :[],
	token:null,
	userId:null,
	error:null,
	loading:false

}


const reducer = (state = initialState, action)=>{
	switch (action.type){
		case actionTypes.STOCK_SELECTED:
			return {
				...state,
				selected_stock : state.selected_stock.concat(action.result)
			}
		case actionTypes.AUTH_START:
			return {
				...state,
				error : null,
				loading : true
			}
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				token:action.tokenId,
				userId: action.userId,
				error : null,
				loading : false
			}

		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error : action.error,
				loading : false
			}


		case actionTypes.LOGOUT:
			return{
				...state,
				token:null,
				userId:null
			}	

		case actionTypes.RESET_STOCK:
			return {
				...state,
				selected_stock:[]
			}	
		default:
				return state;	
	}	


};

export default reducer;