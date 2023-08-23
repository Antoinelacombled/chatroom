import './App.css'
import Form from './containers/Form';
import Messages from './containers/Messages';
import Settings from './containers/Settings';



const App = () => (
  <div className='app'>
    <Messages />
    <Form />
    <Settings />
  </div>

);


export default App
