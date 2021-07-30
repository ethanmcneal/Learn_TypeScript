

function add (num1 :number, num2 :number) :number { 
    return num1 + num2
}

add(5,10) //words good

// add(5, '10') //type error

// add() //intelesense will tell you param types and return type

//params are assumed to be required

//params can be made to be optional

function difference(num1 :number, num2? :number) {
    //now num2 will be undefined if not called in function
    return num1 - num2
}

difference(5) //no error

//you can also define what the default value should be if no value is passed

function quotient(num1 :number, num2 :number = 10) {
    //now num2 will be 10 if no num is passed
    return num1 - num2
}

quotient(20);
quotient(20, 5); //no errors!