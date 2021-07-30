function fullName(person: { firstName: string; lastName: string }): string {
	return `${person.firstName} ${person.lastName} is a cool guy`;
}

let p = { 
    firstName: "Ethan", 
    lastName: "McNeal" 
};

fullName(p); //okay use, but interfaces better

interface Person {
    firstName :string,
    lastName :string,
}
interface Animal {
    firstName :string,
    lastName? :string,
}
// can make values optional


function fullNameWithInterface(person :Person) :string{
	return `${person.firstName} ${person.lastName} is a cool guy`;
}

const animalName = (animal :Animal) => {
    return `My dog is named ${animal.firstName} ${animal.lastName}`
}




fullNameWithInterface(p); //much cleaner! especially if objects have many values


let dog = {
    firstName: 'Cinder'
}

animalName(dog)