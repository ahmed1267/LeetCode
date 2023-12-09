var TimeMap = function () {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key,[])
    this.map.get(key)[timestamp]= value
};


/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */

TimeMap.prototype.get = function (key, timestamp) {

    if(!this.map.has(key)) return ""
    let item = this.map.get(key)
    if(item[timestamp]) return item[timestamp]

    return this.binarySearch(item,timestamp)
}

TimeMap.prototype.binarySearch= function(item,timestamp){
    let l =0
    let r=item.length -1

    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(mid< timestamp){
            l= mid+1
        }else{
            r=mid
        }
    }
    if(item[l]) return item[l]
    while(l>0){
        l--
        if(item[l]) return item[l];
        
    }
    return ""

}

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */