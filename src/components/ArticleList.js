import React from "react"
import Article from './Article.js'

function ArticleList(props) {
   
    return (
        <div>
            <main>
             {props.posts.map((post) => {
                 console.log(post) 
                return <Article key= {post.id} title= {post.title} date ={post.date} preview={post.preview}/>
        
        
    })}
            </main>
        </div>
        
    )
    
}

export default ArticleList;