import React, {  useEffect, useState } from "react";

const newsUrl= ("http://localhost:3000/information")

function NewsInfo(){
    //store the state of each element{key} in our object(title,content, author,image)
    const[newsItems, setNewsItems]= useState([])
    const[myTitle, setMyTitle]= useState("")
    const[myContent, setMyContent]= useState("")
    const[myaAuthor, setMyAuthor]= useState("")
    const[image, setImage]= useState("")

    // set the state of the items
    const fetchData=()=>{
        fetch(newsUrl)
            .then((resp)=> resp.json())
            .then((data)=>{
                setNewsItems(data)
            })
    }
    useEffect(fetchData,[])
    let news= newsItems;

    const{author,content,imageUrl,title, id}= news;

    useEffect(()=>{
    setMyTitle(title)
    setMyContent(content)
    setMyAuthor(author)
    setImage(imageUrl)
    },[author, content,imageUrl, title])



    return(
        <div>
            <center>
                <img src={image} alt="" style={{height: 200 + 'px', width: 200 + 'px'}}/>
                <h4 className="badge bg-secondary">{myTitle}</h4>
                <h6>{myaAuthor}</h6>
                <p>{myContent}</p>
            </center>
        </div>
    )
}

export default NewsInfo;