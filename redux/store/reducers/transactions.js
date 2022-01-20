import { ADD_TRANSACTIONS } from "../actions/types";
import { DELETE_TRANSACTIONS } from "../actions/types";

const initialState = {
    transactions: [
        {id: 1, title: 'Soup', price: -20},
        {id: 2, title: 'Clothes', price: -60},
        {id: 3, title: 'Coffee', price: -30.4},
        {id: 4, title: 'Paycheck', price: 300},
        {id: 5, title: 'Games', price: -300.55},
    ]
};

export default (state = initialState, {type, payload}) => {
    switch(type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id != payload)
            }
        default:
            return state;
    }
}