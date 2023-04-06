import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsdetails, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'84%', zIndex:'1'}} >
                {source}
          </span>
          <img src={!imageUrl?"https://media.newyorker.com/photos/590970db019dfc3494ea21c1/master/w_1600,c_limit/Cassidy-Financial-Times-and-the-Future-of-Journalism.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <a href={newsdetails} target='_blank' rel="noreferrer" className="btn btn-dark">Read More...</a>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : 'Unknown'} on {new Date(date).toLocaleTimeString()}</small></p>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
