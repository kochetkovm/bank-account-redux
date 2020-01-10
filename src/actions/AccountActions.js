const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

const depositAction = sum => ({
    type: DEPOSIT,
    payload: sum
});

const withdrawAction = sum => ({
    type: WITHDRAW,
    payload: sum
});

export {DEPOSIT, WITHDRAW, withdrawAction, depositAction};