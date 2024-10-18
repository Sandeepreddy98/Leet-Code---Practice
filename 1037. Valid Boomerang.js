// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

 

// Example 1:

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: false
 

// Constraints:

// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100

var isBoomerang = function(points) {
    if(points.length !== 3){
        return false
    }
    for(let point of points){
        if(point.length !== 2){
            return false
        }
    }
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    // Check if the points are not in a straight line (slope is not equal)
    return (y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1);
};

console.log(isBoomerang([[1,1],[2,3],[3,2]]));
