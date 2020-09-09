import React from "react";

class SearchedPage extends React.Component {
  render() {
    const { dish } = this.props;
    return (
      <div className="contentWrap">
        {dish.poster_path ? (
          <div className="content">
            <img
              src={`http://i2.wp.com/image.tmdb.org/t/p/w780/${this.props.dish.poster_path}`}
              alt={this.props.dish.poster_path}
              className="imgsrc"
            />
            <p>{this.props.dish.original_title}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
export default SearchedPage;
