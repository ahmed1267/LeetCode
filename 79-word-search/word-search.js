/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for(let row=0;row<board.length;row++){
        for(let col=0;col<board[0].length;col++){
            if(dfs(board,word,row,col,0)) return true
        }
    }

    function dfs(board,word,row,col,index){
        if(index==word.length)return true

        if(row<0||row>=board.length||col<0||col>=board[0].length) return false
        if(board[row][col]!=word[index]) return false

        let letter=board[row][col]
        board[row][col]='*'

        let explore= dfs(board,word,row+1,col,index+1)||
        dfs(board,word,row,col+1,index+1)||
        dfs(board,word,row-1,col,index+1)||
        dfs(board,word,row,col-1,index+1)

        board[row][col]=letter

        return explore

    }

    return false
};