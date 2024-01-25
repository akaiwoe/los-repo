function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  };

// Es2015 VERSION

function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        isHuman : true
    }
}

let favoriteNumber = 81;

const instructor = {
    firstName: 'Carlos',
    [favoriteNumber]: 'That is my favorite number!',
};

let professor = {
    firstName: 'Carlos',
    sayHi(){
        return "Hi!"
    },
    sayBye(){
        return [this.firstName] + "Says Bye!"
    },
}



const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  
const c = createAnimal("cat","pur","Meow!")
c.pur() 

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}