import React, { useState } from "react";

const newsUrl= ("http://localhost:3000/information")

function NewsCard({news}){
    const{author,content,imageUrl,title, id}= news

    const[contentVisible,setContentVisible]= useState(false)

    function handleShowContent(){
        console.log("I have been clicked!! Display news content")
        setContentVisible((contentVisible)=> !contentVisible)
    }

    return(
        // className="col" to return it to three per row grid
        <div className="col">
            <div className="card" style={{width: 18 + "rem"}}>
                <img src={imageUrl} className="card-img-top" alt=" "/>
                <div className="card-body">
                    <h5 className="card-title"> By -{author}</h5>
                    <p className="card-text">{title}</p>
                    <div className="buttons">
                        <button onClick={handleShowContent} className="button btn-1">More Info</button>                    </div>
                        <div>{contentVisible? content: null}</div>
                </div>
            </div>
        </div>
    )
};

export default NewsCard;