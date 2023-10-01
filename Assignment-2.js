function manupulateString(str,callback){
    const upperString = callback(str);
    console.log("The manipulated string is: "+upperString);
}
function logString(string){
    return string.toUpperCase();
}
manupulateString("hello, world!",logString);