import React, { Component } from "react";
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    term: "",
    text: ""
  };

  onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
    e.target.value = ""
  }

  render() {
    return (
      <div className=" search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="video">Video Search</label>
            <input
              type="text"
              onChange={this.onInputChange}
              value={this.state.term}
              id="term"
            />
            <div  className="btn">
            <input className="ui primary button" type="submit" />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
