function doublearray(arr,callback){
    const doubledArray = [];
    for(let i=0;i<arr.length;i++){
        const doubledvalue = callback(arr[i]);
        doubledArray.push(doubledvalue);
    }
    return doubledArray;
}
function double(num){
    return num*2;
}
const inputarray = [1,2,3,4,5];
const doubledResult = doublearray(inputarray,double);
console.log(doubledResult);