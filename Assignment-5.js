function greet(name){
    return new Promise((resolve) => {
        console.log(`Hello, ${name}!`);
    }
    );
}
greet("Avneesh");