/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalTank=0
    let currTank=0
    let start=0
    for(let i=0;i<gas.length;i++){
        const netCost= gas[i]- cost[i]
        totalTank+=netCost
        currTank+=netCost
        if(currTank<0){
            start=i+1
            currTank=0
        }
    }

    return totalTank >= 0 ? start : -1 
};