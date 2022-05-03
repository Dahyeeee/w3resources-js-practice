//Write a JavaScript program to check whether a point lies strictly inside a given circle.

function solution(a,b,r,x,y){
    r *=r;
    return r > Math.sqrt(Math.pow(a-x,2)+Math.pow(b-y,2));
}