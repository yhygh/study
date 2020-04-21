import React from 'react';
import logo from './logo.svg';
import './App.css';

import Books from './Books';

// function App() {
//   const [message, setMessage] = React.useState('my message');

//   function handleClick(){
//     setMessage('My new message!');
//   }

//   return (
//     <div className="App">
//           <div><Books /></div>
//           <p>Hello World in App.js!</p>
          
//           <h1>{message}</h1>
//           <button onClick={handleClick}>ClickMe</button>

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

//   // // return <div>Hello, World</div>
//   // return <div><Books /></div>
// }

const person = {
    name: 'Haiyan',
    twitterHandle: 'Haiyancode'
  };


// create an item
function Item(){
  return (
    <React.Fragment>
      <td> Whoa </td>
      <td> Yea </td>
    </React.Fragment>
  );
}



function LoginApp(){
  const isLoggedIn = true;

  return ( <div> 
      {isLoggedIn && <a href="./log out">Log out</a> }
    </div>
  );

}


function TestLists(){
  const people = [
    {name: 'Haiyan',
     pets: [
       {name: 'bella', type: 'dog'},
       {name: 'cocoa', type: 'dog'}
     ]
    },
    {name: 'Stuart',
     pets: [
       {name: 'hilo', type: 'cat'},
       {name: 'polly', type: 'cat'}
     ]    
    }
  ];


  return (
    <div>
      <p>Test lists ... ... </p>
      {people.map((person, index) => (
        <div key={index}>
          <h2>{person.name}'s pets</h2>
          <div>
          {person.pets.map((pet, i) => (
               <p key={i}>{pet.type}:{pet.name}</p> 
          ))}
          </div>
        </div>
        ))}
    </div>
  )
}


function TestObjectLoop(){
  const person = {
    name: 'Chris',
    twitter: 'chrisoncode',
    bio: 'The dude at scotch.io'
  };

  return (
    <div>
      <h2>Test Object Loop ... ... </h2>
      {Object.keys(person).map( (key, idx) => (
        <p key={idx}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
          {person[key]}
        </p>))}
    </div>
  );  
}


class App extends React.Component {
  state = {
    message: 'hello i am the message'
  }

  updateMessage = () => {
    this.setState({message: 'my new message'});
  }

  // person = {
  //   name: 'Haiyan',
  //   twitterHandle: 'Haiyancode'
  // };

  isActive = true;

  render(){
    return (
      <div>
         <h1>{this.state.message}</h1>
         <button onClick={this.updateMessage}>Update</button>

        <div> My name is {person.name} and my twitter handle is {person.twitterHandle}</div>

        {this.isActive && (<div>
          <p>first paragraph</p>
          <p>second paragraph: I am active</p>
          </div>)}
        
        <table>
          <tbody>
          <tr>
            <Item />
          </tr>
          </tbody>
        </table>

        <LoginApp />

        <TestLists />

        <TestObjectLoop />
      </div>
    )
  }
}

export default App;
