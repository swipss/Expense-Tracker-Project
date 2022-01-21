import {ADD_TRANSACTIONS, DELETE_TRANSACTIONS} from './types.js';

export const addTransaction = ({id, title, price, category}) => (dispatch) => {
    const newTransaction = {
        id,
        title,
        category,
        price,
    }

    dispatch({type: ADD_TRANSACTIONS, payload: newTransaction})
    // console.log(id, title, price, category)
}

export const deleteTransaction = (id) => (dispatch) => {

    dispatch({type: DELETE_TRANSACTIONS, payload: id})
}