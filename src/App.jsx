import React,{useState, useContext, useReducer} from 'react';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouters';
import { authReducer } from './reducers/authReducers';

function App() {
  const infoContextUser = {
    isLogged : true,
    userName : "PepeGuapo"
  }
  const initialRoleXD = {
    role : "admin",
    userName : "PepeGuapito"
  }
  const [roleXD, dispatch] = useReducer(authReducer, initialRoleXD);

  return (
    <AuthContext.Provider value ={{
      infoContextUser,
      roleXD, dispatch
    }}>
      <AppRouter/>
    </AuthContext.Provider>
    
  )
}

export default App
