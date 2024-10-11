
// 1
var arr = [2,3,4,5,6,7,8,9,10,11,12,13,14]

 var mul =  arr.map(function(val){
     return val*val
})
console.log(mul);


//2

var arr1 = [1,2,3,4,5,6,7,8]

 var di = arr1.map(function(val){
    return val % 2 === 0;
})

console.log(di)

//3

var letter = ['vikas','rohit','virat','hardik']

 var up = letter.map(function(val){
    return val.toUpperCase()
})
console.log(up);

//4

var arr3 = [1,2,3,4,5,]

 var st = arr3.map(function(val){
    return val.toString()
})
console.log(st);

//5

var arr4 = [1,2,3,4,5]


function arrval (val){
arr4.push(val)

}
arrval(1)
console.log(arr4);



