import React from "react";
import NewsContainer from "./NewsContainer";


function Home({newsData}){

    return(
        <div className="bg-none">
            <p>Hi, welcome to E-NEWS. An online platform where we stay informed with news in technology and science.</p>
            <div>
            <NewsContainer newsItems={newsData}/>
            </div>
            <br/>
        </div>
    )
}

export default Home;