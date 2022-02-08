import { useContext, useState } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../context/github/githubContext';

const Search = ({ showClear, clearUsers, setAlert}) => {
  const githubContext = useContext(GithubContext)

  const [searchText, setSearchText ] = useState('')

  const handleChange = (e) => setSearchText(e.target.value);
    
  const handleSubmit = e => {
      e.preventDefault();
      if (searchText === ''){
          setAlert('Please enter a name', 'light')
      } else {
        //   console.log(this.state.searchText);
        githubContext.searchUsers(searchText);
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
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
export default Search;
