export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

function printWriters(writerObj: any) {
  for (let i = 0; i < writerObj.length; i++) {
    let isAlive = writerObj[i].alive;

    if (isAlive === true) {
      let firstName = writerObj[i].firstName;
      let lastName = writerObj[i].lastName;
      let age = writerObj[i].age;
      let occupation = writerObj[i].occupation;
      console.log(
        `Hi, my name is ${firstName} ${lastName}. I am ${age} years old, and work as a ${occupation}.`
      );
    }
  }
}

printWriters(writers);
