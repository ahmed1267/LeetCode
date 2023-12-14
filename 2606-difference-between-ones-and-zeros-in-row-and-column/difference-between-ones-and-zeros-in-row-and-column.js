/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let rowOnes,rowZeros,colOnes,colZeros
    let res=[]
    let sub=[]
    let map={}

    for(let i=0;i<grid.length;i++){
        [rowOnes,rowZeros]= rows(grid,i)
        if(!map[i])map[i]={}
        map[i].rowOnes= rowOnes
        map[i].rowZeros= rowZeros
    }

    for(let j=0;j<grid[0].length;j++){
        [colOnes,colZeros]=cols(grid,j)
        if(!map[j])map[j]={}
            map[j].colOnes=colOnes
            map[j].colZeros=colZeros
        }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            sub.push(map[i].rowOnes+map[j].colOnes-map[i].rowZeros-map[j].colZeros)
        }
        res.push(sub)
        sub=[]
    }
    return res
    
};

function rows(grid,i){
    let rowOnes=0
    let rowZeros=0
    for(let j=0;j<grid[i].length;j++){
        if(grid[i][j]==0) rowZeros+=1
        else rowOnes+=1
    }

    return [rowOnes,rowZeros]
}

function cols(grid,j){
    let colZeros=0 ,colOnes=0
    for(let i=0;i<grid.length;i++){
        if(grid[i][j]==0) colZeros+=1
        else colOnes+=1
    }
    return [colOnes,colZeros]
}