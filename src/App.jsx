import './App.css'
import Form from './containers/Form';
import Messages from './containers/Messages';
import Settings from './containers/Settings';
import Login from './containers/Login';
import { useEffect } from 'react';





const App = ({ authentified, loading, connect }) => {

  useEffect(() => {
    console.log("apres le premier affichage");
    connect();
  }, []);

  return (
    <div className='app'>
      <Messages />
      {authentified && <Form />}
      {!authentified && <Login />}
      {loading && (<div> Veuillez Patienter...</div>)}
    </div>
  );
};


export default App;
