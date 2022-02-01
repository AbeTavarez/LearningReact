import { useState } from 'react'
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert}) => {
  const [searchText, setSearchText ] = useState('')

  const handleChange = (e) => setSearchText(e.target.value);
    
  const handleSubmit = e => {
      e.preventDefault();
      if (searchText === ''){
          setAlert('Please enter a name', 'light')
      } else {
        //   console.log(this.state.searchText);
        searchUsers(searchText);
        setSearchText('')
      }
  };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchText"
            placeholder="Search Users..."
            value={searchText}
            onChange={handleChange}
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

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
export default Search;
