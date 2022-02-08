// test data
console.table(products);

//Wht is state
// App
class App extends React.Component {
  state = {
    products: products,
    name: "",
    price: 0,
    description: '',
    cartItems: []
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

  addToCart = item => this.setState({cartItems: [item, ...this.state.cartItems]})



  render() {
    return (
      <div>
        <h1>Welcome To My Store</h1>

        <form onSubmit={this.handleSubmit}>
          <fieldset>
              <legend>Add New Item</legend>

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

        <h2>Products</h2>
        <ul>
          {this.state.products.map((product) => (
            // <li>{product.name} - {product.price}</li>
            <ProductList product={product} addToCart={this.addToCart}/>
          ))}
        </ul>

        <ShoppingCart cartItems={this.state.cartItems}/>
      </div>
    );
  };
}

// Create a new component to render each product inside App component
class ProductList extends React.Component {
  // state = {
  //   inShoppingCart: false
  // }

  // toggleCart = () => this.setState({inShoppingCart: !this.state.inShoppingCart});

  render() {
    // we user arrow function here bc we're padding an argument to the function
    return(
      <li onClick={() => this.props.addToCart(this.props.product)}
      > {this.props.product.name} {this.props.product.price} {this.state.inShoppingCart ? <span>is in the shopping cart!</span>: ''}</li> 
    )
  }
}

// Shopping Cart
class ShoppingCart extends React.Component {
  render() {
    return (
     <div>
       <h2>Shopping Cart</h2>
       {this.props.cartItems.map(product => <li>{product.name} - {product.price}</li>)}
     </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
