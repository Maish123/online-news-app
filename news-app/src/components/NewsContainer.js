import React from "react";
import NewsCard from "./NewsCard";

function NewsContainer({newsItems}){
    return(
        <div className="News-container">
            <ul>
            {newsItems.map((newsItem)=>{
                return(
                    <NewsCard
                    key={newsItem.id}
                    news={newsItem}
                    />
                )
            })}
            </ul>
        </div>
    )
}

export default NewsContainer;