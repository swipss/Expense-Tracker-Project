import { ADD_TRANSACTIONS } from "../actions/types";
import { DELETE_TRANSACTIONS } from "../actions/types";

const initialState = {
    transactions: [
        {id: 1, title: 'Soup', price: -20, category: 'Grocery'},
        {id: 2, title: 'Clothes', price: -60, category: 'Shopping'},
        {id: 3, title: 'Coffee', price: -30, category: 'Food & Drinks'},
        {id: 4, title: 'Paycheck', price: 300, category: 'Income'},
        {id: 5, title: 'Games', price: -30, category: 'Entertainment'},
        {id: 6, title: 'Doctor', price: -100, category: 'Health'},
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