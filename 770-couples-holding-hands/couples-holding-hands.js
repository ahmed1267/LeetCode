/**
 * @param {number[]} row
 * @return {number}
 */

 var swap=function(row,i,j,map){
    [row[i],row[j]]=[row[j],row[i]]
    map.set(row[i],i)
    map.set(row[j],j)
}
var minSwapsCouples = function(row) {
    let map =new Map()
    let swaps=0
    for(let i=0;i<row.length;i++){
        map.set(row[i],i)
    }
    for(let i=0;i<row.length;i+=2){
        let next=row[i]^1
        
        if(row[i+1] && row[i+1]!=next){
            swaps++
            swap(row,i+1,map.get(next),map)
        }
    }
    return swaps
};
//  class DSU{
//      constructor(n){
//          let parent=[...new Araay(n.length).keys()]
//      }

//      find(node){
//          if(this.parent[node]==node) return node
//          else return this.parent[node]=this.find(this.parent[node])
//      }

//      union(n1,n2){
//         let parent1=this.find(n1)
//         let parent2=this.find(n2)
//         this.parent[parent2]=n1
//      }
//  }
