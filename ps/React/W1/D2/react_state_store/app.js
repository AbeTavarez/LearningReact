// test data
console.table(products);

//Wht is state
// App
class App extends React.Component {
  state = {
    products: products,
    name: "",
    price: 0,
    description: ''
  };

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(this); // refers to the App
    // we used the event.target.id with the value
    this.setState({ [event.target.id ]: event.target.value });
  };

  handleSubmit = (event) => {
      event.preventDefault()
      const newProduct = {
          name: this.state.name,
          price: this.state.price,
          description: this.state.description
      };

      this.setState({
          products: [newProduct, ...this.state.products],
          name: '',
          price: 0,
          description: ''
      })
  }



  render() {
    console.log(this); // refers to the App
    return (
      <div>
        <h1>Welcome To My Store</h1>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
              <legend>Input Box</legend>

            <label htmlFor="name">Enter a name </label>
            <input type="text" value={this.state.name} onChange={this.handleChange} id="name"/>
            <br />

            <label htmlFor="price">Enter a price </label>
            <input type="number" value={this.state.price} onChange={this.handleChange} id="price"/>
            <br />

            <label htmlFor="description">Enter a description </label>
            <input type="text" value={this.state.description} onChange={this.handleChange} id="description"/>
            <br />
            <input type="submit" />
          </fieldset>
        </form>

        <fieldset>
            <h2>Preview our new item</h2>
            <h3>{this.state.name}</h3>
            <h4>{this.state.price}</h4>
            <h5>{this.state.description}</h5>
        </fieldset>

        <ul>
          {this.state.products.map((product) => (
            <li>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
