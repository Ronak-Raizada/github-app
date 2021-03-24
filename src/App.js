import React from 'react'
import Auth from './Auth/Auth'


function App() {

  const tk = localStorage.getItem('token')
    const [token, setToken] = React.useState(tk)

  return (
   <Auth token = {token} setToken = {setToken}/>
  );
}

export default App;
