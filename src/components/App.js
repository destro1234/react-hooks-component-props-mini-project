import React from "react";
import blogData from "../data/blog";
import Header from './Header.js'
import About from './About.js'
import logo from "../assets/logo.svg"
import ArticleList from './ArticleList.js'



function App() {
  console.log(blogData.posts)
  return (
    <div className="App">
      <Header name="Underreacted"/>
      <About src= {logo} about={blogData.about}/>
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
