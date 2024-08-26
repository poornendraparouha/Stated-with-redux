
// single function with multiple arguments
function sum(x , y , z){
    return x + y + z;
}
console.log(sum(10,20,30))


// multiple functions with individual arguments thats what currying suggests
function sumX(x){
    return function sumY(y){
        return function sumZ(z){
            return x + y + z;
        }
    }
}
const resultX = sumX(20);
console.log(resultX);
const resultY = resultX(30);
console.log(resultY);
const result = resultY(50);
console.log(result);