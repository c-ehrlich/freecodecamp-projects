// checkCashRegister
// checks if a register can give change for a transaction given exact amounts of each coin and bill available

function checkCashRegister(price, cash, cid) {
    // multiply everything by 100 so we don't need to deal with floating point inaccuracies
    price *= 100;
    cash *= 100;
    for (let i = 0; i < cid.length; i++) { cid[i][1] *= 100; }
  
    // create vars for giving change
    var changeToGive = cash - price;
    var change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    
    // id of each drawer
    const drawers = {"PENNY": 0, "NICKEL": 1, "DIME": 2, "QUARTER": 3, "ONE": 4, "FIVE": 5, "TEN": 6, "TWENTY": 7, "ONE HUNDRED": 0};
    
    // cash value of each type of bill/coin
    const values = {"PENNY": 1, "NICKEL": 5, "DIME": 10, "QUARTER": 25, "ONE": 100, "FIVE": 500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000};
  
    // remove items from register, largest first, until the total change to give is reached
    getChange:
      while (changeToGive > 0) {
        for (let i = cid.length - 1; i >= 0; i--) {
          var amount = values[cid[i][0]];
          if (changeToGive >= amount && cid[i][1] >= amount) {
            cid[i][1] -= amount;
            change[i][1] += amount;
            changeToGive -= amount;
            continue getChange;
          }
        }
  
        // if we're out of funds, we can immediately create and return statement.
        let returnStatement = {
          "change": [],
          "status": "INSUFFICIENT_FUNDS"
        };
        return returnStatement;
      }
  
    // divide change values by 100 to get back to floats
    for (let i = 0; i < change.length; i++) { change[i][1] /= 100; }
  
    // check if the cashier is empty or not
    let cashLeft = 0;
    for (let i = 0; i < cid.length; i++) {
      cashLeft += cid[i][1];
    }
    
    // create Return statement
    let returnStatement = {};
    if (cashLeft > 0) {
      returnStatement.status = "OPEN";
      returnStatement.change = [];
      for (let i = change.length - 1; i >= 0; i--) {
        if (change[i][1] > 0) {
          returnStatement.change.push(change[i]);
        }
      }
    } else {
      returnStatement.status = "CLOSED";
      returnStatement.change = change;
    }
    
    return returnStatement;
  }
  
  /**
   * TESTS
   * uncomment as necessary
   * 
   * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // should return an object.
   * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
   * checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
   * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
   * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
   * checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
  */
