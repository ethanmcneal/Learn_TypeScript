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


function fullNameWithInterface(person :Person) :string{
	return `${person.firstName} ${person.lastName} is a cool guy`;
}


fullNameWithInterface(p); //much cleaner! especially if objects have many values