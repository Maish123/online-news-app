import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const newsUrl= ("http://localhost:3000/information")

function Home(){

// state for the mealcards
    const[newsData, setNewsData]=useState([])

//function that loads the items when the page loads

useEffect(()=>{    
    fetch(newsUrl)
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log(data)
        setNewsData(data)
    })
},[])

    return(
        <div className="container">
            <p>Hi, welcome to E-NEWS. An online platform where we stay informed with news in technology and science.</p>
            <div className="row row-cols-5">
            <NewsCard className="col" newsItems={newsData}/>
            </div>
            <br/>
        </div>
    )
}

export default Home;