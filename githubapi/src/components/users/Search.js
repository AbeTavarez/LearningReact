import { Component } from "react";
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchText: "",

  };

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    
  handleSubmit = e => {
      e.preventDefault();
    //   console.log(this.state.searchText);
    this.props.searchUsers(this.state.searchText);
    this.setState({searchText: ""});
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchText"
            placeholder="Search Users..."
            value={this.state.searchText}
            onChange={this.handleChange}
          />
         
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
}
export default Search;
