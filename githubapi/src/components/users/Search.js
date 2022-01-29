import { Component } from "react";
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    searchText: "",

  };

  handleChange = (e) => this.setState({[e.target.name]: e.target.value});
    
  handleSubmit = e => {
      e.preventDefault();
      if (this.state.searchText === ''){
          this.props.setAlert('Please enter a name', 'light')
      } else {
        //   console.log(this.state.searchText);
        this.props.searchUsers(this.state.searchText);
        this.setState({searchText: ""});
      }
  };
  
  render() {
      const { clearUsers, showClear } = this.props;

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

       { showClear &&  
       (<button onClick={ clearUsers } className="btn btn-light btn-block">Clear</button>
       )}
      </div>
    );
  }
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
export default Search;
