import React from "react";
import {store} from "../store/Store";

let unsubscribe;

class Balance extends React.Component{

    componentDidMount() {
        unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        unsubscribe();
    }
    render() {
        return (
            <div>
                <h1>Bank</h1>
                <h3>Balance = {store.getState().balance}</h3>
            </div>
        )
    }
}

export default Balance;