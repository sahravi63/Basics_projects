import {React,useContext}  from 'react';
import UserContext from '../Usecontext/UserContext';


function Profile() {
  const {user}= useContext(UserContext);
if (!user)  return <h1>Please Login</h1>

return <div>Welcome{user.username}</div>

}


export default Profile
