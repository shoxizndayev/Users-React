import React from 'react'
import './App.css';

import AuthenticatedApp from './components/AuthendicatedApp/Authendicated';
import UnauthenticatedApp from './components/Unauthendicatedpp/Unauthendicated';

import useToken from './Hooks/useToken'

function App() {
 const isLoggedIn = useToken();

 if(isLoggedIn){

  return <AuthenticatedApp />;
}
else{
  return <UnauthenticatedApp />;
}


}

export default App;
