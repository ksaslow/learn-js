class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  // For data encapsulation: need getter and setters!!! 

  get persons() {
    return this._persons; // done KS Feb 6.
  }

  set persons(persons) {
    this._persons = persons; // done KS Feb. 6
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
// encapsulation: define a field called "persons", referring to property name _persons. 
// pstack.persons = [...] WITHOUT setters add these to an erronneous "persons", not "_persons". With a set method, this is fixed.
// *** BECAUSE when you do an equality (=) it calls the set method. This is the ensure that the client does not create new properties in your classes
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}] // this creates a new property "persons", NOT THE SAME as _persons. 
pstack.push({name: 'Dein', age: 19}); // this instantiates and pushes to _persons. SO there is only ONE item, we can't pop TWICE! Need get/set
console.log(pstack.pop());
console.log(pstack.pop()); // stack is EMPTY. 
console.log(pstack.persons);
