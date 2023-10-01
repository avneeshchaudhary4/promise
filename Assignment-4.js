const books = [
    {title: "Descrete mathemathics", autor: "P.D Saxena",year: 1951},
    {title: "MIS", autor: "Dr.Manish",year: 1985},
    {title: "Javascript Funfdamentals", autor: "Anjali",year: 1999},
    {title: "Advance Mathematics", autor: "R.D Sharma",year: 1971},
];
function logbooks(title){
title.sort();
title.forEach((title) => {
    console.log(title);
});
}
function passbook(booklist,callback){
    const title = booklist.map((book) => book.title);
    callback(title);
}
passbook(books,logbooks);