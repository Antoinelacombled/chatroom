import './App.css'
import Form from './Form/Form';
import Messages from './containers/Messages';
import Settings from './Settings/Settings';



const App = () => (
  <div className='app'>
    <Messages />
    <Form />
    <Settings />
  </div>

);


export default App
