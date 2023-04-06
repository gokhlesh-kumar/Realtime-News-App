import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=850a91e18cd14ecb8aa735b10be7df54&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNext = async () => {
    // if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){
    // }
    // else{
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container" style={{ margin: "80px" }}>
        <h2 className="text-center mt-4">NewsMonkey - Top headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsdetails={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}

          <div className="container d-flex justify-content-between my-2">
            <button
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              className="btn btn-dark"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
              type="button"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
