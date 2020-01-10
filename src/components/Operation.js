import React from "react";
import {store} from "../store/Store";
import {depositAction, withdrawAction} from "../actions/AccountActions";

class Operation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sum: 1
        };
    }

    inputChangeHandler = (e) => {
        let num = +e.target.value;
        if (num >= 0) {
            this.setState({sum: num});
        }
    }

    withdrawHandler = () => {
        store.dispatch(withdrawAction(this.state.sum));
    }

    depositHandler = () => {
        store.dispatch(depositAction(this.state.sum));
    }

    render() {
        return (
            <div>
                <button onClick={this.withdrawHandler}>Withdraw</button>
                <input
                    type='number'
                    min='0'
                    value={this.state.sum}
                    onChange={this.inputChangeHandler}
                />
                <button onClick={this.depositHandler}>Deposit</button>
            </div>
        )
    }

}

export default Operation;