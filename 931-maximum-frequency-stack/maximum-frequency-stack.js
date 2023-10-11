
var FreqStack = function() {
    this.map= new Map()
    this.stack=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let freq=(this.map.get(val) || 0)+1
    this.map.set(val,freq)
    if(!this.stack[freq]) this.stack[freq]=[val]
    else this.stack[freq].push(val)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let topFreq= this.stack[this.stack.length-1]
    let val= topFreq.pop()
    if(!topFreq.length) this.stack.pop()
    this.map.set(val,this.map.get(val)-1)
    return val
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */