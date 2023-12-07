/**
 * @param {string} queryIP4
 * @return {string}
 */
var validIPAddress = function(queryIP) {
  if(queryIP.length==0) return "Neither"
    let queryIP4= queryIP.split(".")
    if(queryIP4.length==4){
      for(let i=0;i<4;i++){
        let regex= /[0-9]+/g
        let query= queryIP.match(regex)
        if(query.join("").length!=queryIP.length-3) return "Neither"
        if(!queryIP4[i]) return "Neither"
        if(queryIP4[i][0]==0 && queryIP4[i].length>1) return "Neither"
        if(parseInt(queryIP4[i])>255 || parseInt(queryIP4[i])<0){
           return "Neither"
        }
      }
      return "IPv4"

    }else{
      let regex= /[A-Fa-f0-9]+/g
      let queryIP6= queryIP.match(regex)
      if(!queryIP6 || queryIP6.join("").length!=(queryIP.length-7)) {
        return "Neither"
        }
      queryIP6=queryIP.split(":")
      for(let i=0;i<8;i++){
        if(!queryIP6[i] || queryIP6[i].length>4 || queryIP6[i].length<1) {
          return "Neither"}
      }
      return "IPv6"
    }
};