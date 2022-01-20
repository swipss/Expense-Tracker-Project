import {ADD_TRANSACTIONS, DELETE_TRANSACTIONS} from './types.js';

export const addTransaction = ({id, title, price}) => (dispatch) => {
    const newTransaction = {
        id,
        title,
        price,
    }

    dispatch({type: ADD_TRANSACTIONS, payload: newTransaction})
    console.log(id, title, price)
}

export const deleteTransaction = (id) => (dispatch) => {

    dispatch({type: DELETE_TRANSACTIONS, payload: id})
}