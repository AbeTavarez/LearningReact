import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ''
    }

//   onInputChange(e) {
//     console.log(e.target.value);
//   }

    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.term);

        // call the func that was passed on the props
        this.props.onSubmitProp(this.state.term)
    }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={ e => this.setState({term: e.target.value})}
              //   onChange={this.onInputChange}
              onClick={ () => console.log(`input was clicked!`)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
