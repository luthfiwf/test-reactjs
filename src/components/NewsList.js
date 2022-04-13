import React, { useState, useEffect } from "react";
import axios from "axios";
// import NewsItem from "./NewsItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] =useState('everything')
  const [Loading, setIsLoading] =useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${term}&apiKey=e5fc66791fd246acb6ff06c3295b461f`
      );
      console.log(response);
      setArticles(response.data.articles);
      setIsLoading(false)
    };
    getArticles();
  }, [term]);
  return (
    <div>
        
        <Search searchText={(text) => setTerm(text)}/>
      {Loading ? <h1 className="mt-5">Loading ....</h1> : <div className="container">
        <div className="row">
          {articles.map((article) => {
            return (
              <div className="col-4 mt-5">
                <div className="card" style={{ height:"500px" }}>
                  <img src={article.urlToImage}  alt={article.urlToImage} style={{ height:"300px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                    {article.description}
                    </p>
                    <a href={article.url} className="btn btn-primary" target="_blank">
                     Detail
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      }
    </div>
    
  );
};

export default NewsList;
