class PStack { // Parent Class - this will act as an Interface! (mimicing the behavior of a strong OO language like Java!)
  #id; // this is defining it as a PRIVATE property!! 
  constructor() {
    this.#id = Math.floor(Math.random() * 100) + 1;
  }

  showId() {
    console.log(this);
    return this.#id;
  }

  push(p) {
    // implement in child class
  }

  pop() {
    // implement in child class
  }

}

class PStackImpl extends PStack { // this is the Child Class! Extends the "interface"
  #persons = [] // here we have another private variable
  constructor() {
    super(); // constructor must always call super, otherwise runtime exception
  }
  push(p) {
    return this.#persons.push(p) // overriding the parent class
  }

  pop() {
    return this.#persons.pop().age // overriding the parent class
  }

  show() {
    return this.#persons // extended operation, not in parent class!
  }

}

let pstack = new PStackImpl();
pstack.push({name: 'Jojo', age: 21});
pstack.push({name: 'Gabi', age: 29});
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.showId()); // this WORKS here even though pstack is a Child, trying to access a private field of the Parent class
                              // because of data encapsulation! This would NOT work if you move the showID method to the child class and 
                              // try to override it, it only works because the method is defined in the parent class. (this wouldnt be true if 
                              // you make the whole method private)
