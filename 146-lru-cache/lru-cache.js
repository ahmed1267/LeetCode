/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map= new Map()
    this.capacity= capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let value = this.map.get(key)
    if(value == undefined)return -1
    this.map.delete(key)
    this.map.set(key,value)
    return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.size == this.capacity && !this.map.has(key)){
        let firstKey= this.map.keys().next().value
        this.map.delete(firstKey)
        this.map.set(key,value)
    }else{
        this.map.delete(key)
        this.map.set(key,value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */