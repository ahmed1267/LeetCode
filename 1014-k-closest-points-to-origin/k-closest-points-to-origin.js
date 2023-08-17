/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

 const dist=(point)=>{
     return Math.sqrt(Math.pow(point[0],2)+Math.pow(point[1],2))
 }
var kClosest = function (points, k) {
        let map=[]
        for(let i=0;i<points.length;i++){
            map.push({
                distance:dist(points[i]),
                point:points[i]
            })
        }

        map.sort((a,b)=> a.distance-b.distance)
        let res=[]
        for(let i=0;i<k;i++){
            res.push(map[i].point)

        }
        return res
};