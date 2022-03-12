// Imp Topic in react is components-
// We can create many differenct components in react and then import them in larger components
// Component is a piece of code returns or renders some jsx
// we can call component by its name
// We can duplicate component ones it is declared 
// Every component has a built in props object.

// Props in react -- props means properties.
// Props allows you to pass dynamic data through react components
// props are just arguments that you pass it to react components
// They are passed via attributes.
// props.name is a used because that's the method by which we can call name.
// If you're passing dynmic expressions in props then use {} like age={6+9}
// Otherwise you can pass simple expressions like name ="lionel"


// state in react - 
// state in a react is plain javascript object used by react to represent a piece of information about the component's current situation.
// It is completely managed by component itself
// In order to use react we have to import a hook --- import {useState} from 'react';
// This is going to allow us to use state
// we cannot use react states without using react hooks
// Imp rule in react = Never modify state manually
// react state can only be changed using its own react set function

// Events in React
// An event is an action that can be triggered as a result of the user action or it can be some system generated event
// we can handle events in react 
// for example in button we can provide <button onClick={() => {}}
// on above we example we're handling button event by providing onClick function.


// Hooks in react 
// They let you use state and other React features without writing a class.
// You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.



// callback functions in react 
// a callback function is a function that doesn't have a name, and it's just wait for some kind of command.






import { useState, useEffect } from 'react';
import './App.css';

// On below line we're creating component
// const Person = (props) =>{
//   return (
//     <>
//     {/* <h2> Name: Jonathan</h2> */}
//     <h2> Name: {props.name}</h2>
//     <h2> Last Name: {props.lastname}</h2>
//     <h2> Age: {props.age}</h2>
//     </>
//   )
// }


const App = () => {
  // whenever you call something as a function and it starts with use we called it a hook 
  // as we're doing on below line useState();.
  // Now the first parameter in [] will be name of that state
  // and second part will be "setter" function
  // inside useState you're going to provide initial value
  const [counter, setCounter] = useState(0);    
  // const name = "Jonathan";
  // const isNameShowing = false;


// second parameter that useEffects take is independecy array
useEffect(()=> {
  // alert('Reload')
  // setCounter = (100);
  alert("You've changed the counter to" + counter)
}, [counter]);

  return (
    <div className="App">


    {/* state in react  */}
      {/* <button onClick={() => alert('clicked')}>-</button> */}
      {/* <button onClick={() => setCounter(-88)}>-</button> */}
      {/* prevCount is a name of the state */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>


















      {/* // Calling Person Component here by just </> */}    
      {/* <Person 
      name ={"Jake"} 
      lastname={"Doe"} 
      age={30}/>
      
      <Person name ={"Leo"} lastname={"Messi"} age={34}/>  */}
      {/* <Person name ={"Suarez"} lastname={"Luis"} age={39}/> 
      <Person name ={"Neymar"} lastname={"Jr."} age={35}/>  */}





      {/* <h1> Hey hello there this is number {10+7}</h1> */}
      {/* <h1> Hello JSm {isNameShowing ? name : "someone"} </h1>        */}
     {/* {name ? (
      // the empty block here below represents react fragment
      <>  
       <h1>{name}</h1>
      </>
    ):(
        <h1> Test</h1>
        // <h2> If we try to render 2 different elements in react, you need to wrap them in different react fragments </h2>
    )}
     */}
    </div>
  );
}

export default App;
