const checkCashRegister = (price, cash, cid) => {
    if (cash < price) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    let change = cash - price;

    while (change !== 0) {
        if (change % 100 === 0) {
            change -= 100;
            if (cid[8][1] - 100 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[8][1] - 100;
            }
        } else if (change % 20 === 0) {
            change -= 20;
            if (cid[7][1] - 20 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[7][1] - 20;
            }
        } else if (change % 10 === 0) {
            change -= 10;
            if (cid[6][1] - 10 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[6][1] - 10;
            }
        } else if (change % 5 === 0) {
            change -= 5;
            if (cid[5][1] - 5 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[5][1] - 5;
            }
        } else if (change % 1 === 0) {
            change -= 1;
            if (cid[4][1] - 1 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[4][1] - 1;
            }
        } else if (change % 0.25 === 0) {
            change -= 0.25;
            if (cid[3][1] - 0.25 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[3][1] - 0.25;
            }
        } else if (change % 0.1 === 0) {
            change -= 0.1;
            if (cid[2][1] - 0.1 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[2][1] - 0.1;
            }
        } else if (change % 0.05 === 0) {
            change -= 0.05;
            if (cid[1][1] - 0.05 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[1][1] - 0.05;
            }
        } else if (change % 0.01 === 0) {
            change -= 0.01;
            if (cid[0][1] - 0.01 < 0) {
                return { status: 'INSUFFICIENT_FUNDS', change: [] };
            } else {
                cid[0][1] - 0.01;
            }
        }
    }

    return change;
};

console.log(
    checkCashRegister(19.5, 20, [
        ['PENNY', 1.01],
        ['NICKEL', 2.05],
        ['DIME', 3.1],
        ['QUARTER', 4.25],
        ['ONE', 90],
        ['FIVE', 55],
        ['TEN', 20],
        ['TWENTY', 60],
        ['ONE HUNDRED', 100],
    ])
);
