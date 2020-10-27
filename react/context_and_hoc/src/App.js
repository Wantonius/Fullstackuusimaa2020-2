import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Navbar/>
		<Switch>
			<Route exact path="/" render={() => <ContactList/>}/>
			<Route path="/contact" render={() => <ContactForm/>}/>
		</Switch>
    </div>
  );
}

export default App;
