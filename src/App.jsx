import './App.css'
import Form from './containers/Form';
import Messages from './containers/Messages';
import Settings from './containers/Settings';
import Login from './containers/Login';



const App = ({ authentified, loading }) => (
  <div className='app'>
    <Messages />
    {authentified && <Form />}
    {authentified && <Settings />}
    {!authentified && <Login />}
    {loading && (<div> Veuillez Patienter...</div>)}
  </div>
);


export default App;
