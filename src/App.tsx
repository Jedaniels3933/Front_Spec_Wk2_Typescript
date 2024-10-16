


function App() {

  // typing our variable as a string and assigning it a string value
  let myName: string = "Joe Strings";

  // declaring variables with types without assigning them to a value
  let count: number;
  let isOctober: boolean;

  // assigning our variables
  count = 20;
  isOctober = true;

  // type string is not assignable to type number
  // count = "hiya!";

  // we already declared my name to be a string variable, we cannot set it equal to a number
  // myName = 10;
  myName = "10";

  // typescript infers the type of myNumber without an explicit type declaration
  //  because we set it equal to a number, TS knows that myNumber should be a number type
  let myNumber = 24;
  // myNumber = "new string"; CANT DO THIS!! has to be a number!
  let myNum = "test!";
  myNumber = 25;
  myNum = "myNum!"

  let anyVariable; // this is an any type variable
  anyVariable = 10;
  anyVariable = "string";
  anyVariable = true;

 
  return (
    <div>
     
    </div>
  )
}

export default App;



