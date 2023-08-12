/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

 //Union find
 class DSU{
     constructor(n){
         this.parent=[...new Array(n.length).keys()]
     }

    find(node){
        if(this.parent[node]==node) return node
        else return this.parent[node]=this.find(this.parent[node])
    }

    union(n1,n2){
        let parent1= this.find(n1)
        let parent2= this.find(n2)
        this.parent[parent2]=n1
    }
 }

var accountsMerge = function(accounts) {
    let map=new Map()
    let dsu=new DSU(accounts)
    for(let i=0;i<accounts.length;i++){
        let name=accounts[i][0]
        for(let j=1;j<accounts[i].length;j++){
            let email=accounts[i][j]
            if(!map.has(email)) map.set(email,i)
            dsu.union(i,map.get(email))
        }
    }
    let comb=new Array(accounts.length)
    for(let i=0;i<dsu.parent.length;i++){
        let acc=accounts[i]
        let index=dsu.find(dsu.parent[i])
        for(let j=1;j<acc.length;j++){
            if(!comb[index]) comb[index]= new Set()
            if(!comb[index].has(acc[j])) comb[index].add(acc[j])
        }
    }
    let res=[]
    for(let i=0;i<comb.length;i++){
        if(comb[i]=== undefined) continue;
        let name=accounts[i][0]
        res.push([name,...[...comb[i]].sort()])
    }
    return res
};