import React,{useState} from "react";

const newsUrl= ("http://localhost:3000/information")

function AddNews({onAddNews}){
    //    const{author,content,imageUrl,title, id}= news

    const[author, setAuthor]=useState("");
    const[content, setContent]= useState("")
    const[imageUrl, setImageUrl] = useState("")
    const[title, setTitle]= useState("")

    //each input field must have its own onChange event handler
    
    // define the function for the onsubmit event

    function handlePoemSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/information",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                author,
                content,
                imageUrl,
                title
            })
        })
        .then((resp)=> resp.json())
        .then((newNews)=>onAddNews(newNews))
    }
    return(
        <div>
            <h1>I am the Add news component</h1>
            <form className="bookForm" onSubmit={handlePoemSubmit}>
                <label>NEWS TITLE</label>
                <input
                onChange={(e)=>setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="input news title"
                />
                <label>NEWS AUTHOR</label>
                <input
                onChange={(e)=>setAuthor(e.target.value)}
                type="text"
                value={author}
                placeholder="input news author"
                />
                <label>NEWS CONTENT</label>
                <input
                onChange={(e)=>setContent(e.target.value)}
                id="newsContent"
                type="text"
                value={content}
                placeholder="input news content"
                />
                <label>NEWS IMAGE</label>
                <input
                onChange={(e)=>setImageUrl(e.target.value)}
                id="newsImage"
                type="text"
                value={imageUrl}
                placeholder="input image url"
                />
                <input id="submit" type="submit" value="ADD NEWS ARTICLE"/>
            </form>
        </div>
    )
}

export default AddNews;