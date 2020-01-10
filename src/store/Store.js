import {createStore} from "redux";
import updateAccount from "../reducers/AccountUpdateReducer";

const store = createStore(updateAccount, {balance: 0});

export {store};