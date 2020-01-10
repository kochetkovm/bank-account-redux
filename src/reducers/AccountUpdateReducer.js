import {DEPOSIT, WITHDRAW} from "../actions/AccountActions";

export default function updateAccount(state, action) {
    switch (action.type) {
        case DEPOSIT:
            return Object.assign({}, state, {balance: state.balance + action.payload});
        case WITHDRAW:
            let res = state.balance - action.payload;
            return {...state, balance: (res < 0 ? state.balance : res)};
        default:
            return state;
    }
}