import './App.css'
import Form from './containers/Form';
import Messages from './containers/Messages';
import Settings from './containers/Settings';
import Login from './containers/Login';



const App = ({ authentified }) => (
  <div className='app'>
    <Messages />
    {authentified && <Form />}
    {authentified && <Settings />}
    {!authentified && <Login />}
  </div>

);


export default App;
