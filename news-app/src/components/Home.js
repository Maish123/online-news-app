import React from "react";
import NewsCard from "./NewsCard";

function Home(){
    return(
        <div>
            <p>Hi, welcome to E-NEWS. An online platform where we stay informed with news in technology and science.</p>
            <NewsCard bookName=" The in Between" bookThumbnail="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png" bookId=" 5464"/>
        </div>
    )
}

export default Home;