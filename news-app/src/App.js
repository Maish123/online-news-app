import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Info from './components/Info';
import Search from './components/Search';
import About from './components/About';



function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/info"><Info/></Route>
        <Route exact path="/search"><Search/></Route>
        <Route exact path="/about"><About/></Route>
      </Switch>
    </div>
  );
}

export default App;