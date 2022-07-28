import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import NewsInfo from './components/NewsInfo';
import ContactUs from './components/ContactUs';
import AddNews from './components/AddNews';
import React, {useState, useEffect} from 'react';

const newsUrl= ("http://localhost:3000/information")

function App() {
  const[newsData, setNewsData]=useState([])

  useEffect(()=>{    
    fetch(newsUrl)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        setNewsData(data)
    })
},[])

// make a POST request to the server(for new news)

function addNewsToList(newNews){
  setNewsData([...newsData,newNews])
}

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/"><Home newsData={newsData}/></Route>
        <Route exact path="/addnews"><AddNews onAddNews={addNewsToList}/></Route>
        <Route exact path="/contactus"><ContactUs/></Route>
        <Route exact path="/news/:id"><NewsInfo/></Route>
      </Switch>
    </div>
  );
}

export default App;