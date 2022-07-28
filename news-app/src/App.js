import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import NewsInfo from './components/NewsInfo';
import ContactUs from './components/ContactUs';
import AddNews from './components/AddNews';



function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/addnews"><AddNews/></Route>
        <Route exact path="/contactus"><ContactUs/></Route>
        <Route exact path="/news/:id"><NewsInfo/></Route>
      </Switch>
    </div>
  );
}

export default App;