import React from "react";

function NewsInfo({news}){
    //store the state of each element{key} in our object(title,content, author,image)
    console.log(news)
    const{author,content,imageUrl,title, id}= news;

    const NewsDetails = news.map((news)=>{
        return(
            <div key={news.id}>
                 <img src={imageUrl} alt="" style={{height: 200 + 'px', width: 200 + 'px'}}/>
                 <h4 className="badge bg-secondary">{title}</h4>
                <h6>{author}</h6>
                <p>{content}</p>
            </div>
        )
    })
    return(
        <div>
            <center>
                {NewsDetails}
            </center>
        </div>
    )
}

export default NewsInfo;