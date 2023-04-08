import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
const News = (props) =>{
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  
  // constructor(props) {
    //   super(props);
    //   state = {
  //     loading: true,
  //     articles: [],
  //     page: 1,
  //     totalResults: 0,
  //   };


  
  
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // async componentDidMount() {
    //   updateNews();
    // }
    
    useEffect(() =>{
      document.title = `${capitalize(props.category)} - News`;
      updateNews();
  }, []);

  const updateNews = async() =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setState({ loading: true });
    // setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }

  

  // handleNext = async () => {
  //   // if(page+1 > Math.ceil(totalResults/20)){
  //   // }
  //   // else{
  //   // }
  //   setState({ page: page + 1 });
  //   updateNews();
  // };

  // handlePrevious = async () => {
  //   setState({
  //     page: page - 1,
  //   });
  //   updateNews();
  // };

  const fetchMoreData = async() => {
    // setState({page: page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    // setTotalResults(parsedData.totalResults);
    // setState({
    // articles: articles.concat(parsedData.articles),
    // totalResults: parsedData.totalResults,
    // })
  };

  // render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "80px 0px 0px 30px" }}>
          NewsMonkey - Top {capitalize(props.category)} headlines
        </h2>
        {loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 80): "" }
                      imageUrl={element.urlToImage}
                      newsdetails={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}

              {/* <div className="container d-flex justify-content-between my-2">
              <button className="btn btn-dark" disabled={page <= 1} type="button" onClick={handlePrevious}>
                &larr; Previous
              </button>
              <button className="btn btn-dark" disabled={page + 1 > Math.ceil(totalResults / 20)} type="button" onClick={handleNext}>
                Next &rarr;
              </button>
            </div> */}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  // }
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
