function ageInDays(person){
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age*365.25;
    return function(){
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    };
}
const personInfo = {
    firstName: "John",
    lastName: "Abraham",
    age: 22
};
const logAge = ageInDays(personInfo);
logAge();
