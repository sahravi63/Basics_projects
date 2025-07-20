import React from 'react';
import Nav from "./components/Nav-Bar/nav";
import UserContextProvider from './components/Usecontext/userContextProvider';
import Login from './components/login/login';     // Adjust the path if needed
import Profile from './components/profile/profile'; // Adjust the path if needed



function App() {


 
  return (
    <div className="App">
      <Nav/>
     <h1>Hello this is RAVI SAH</h1>
     <UserContextProvider>
      <h2>Welcome to the UserContextProvider </h2>
      <Login/>
      <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default App;
