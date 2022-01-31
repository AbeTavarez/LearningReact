# Lab Mini Movie App

1. Create a new directory -> Movie App

2.  Inside the new directory create n App.js and index.html file.

3. Copy the boilerplate HTML into your index.html file.

4. Create a new App component and setup the ReactDOM render function.

5. Set up your state in your App component:
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=00000000',
        query: '&t=',
        movieTitle: '',
        searchURL: '',
        movie: null
    }

6. Setup your form:
    - Create a new form element.

    - We need a label for the text input.
    - We need a text input for the title of the movie we're going to search.
        - In this input we need a type, value, name, and onChange.

    - We need a submit input to submit the form.
        - In this input we need a type and a value.

    - We need a onChange handler method for the text input.
        - This handler method will use setState to update the text to the movieTitle property on the state. *hint use console.log to test it*

    - Finally we need a submit handler for our submit input.
        - Remember we're submitting a *form*.  *use console.log to test it*

7. Create your search in the handleSubmit method and update the searchURL in the state.
    - `${baseURL}${apiKey}${query}${movieTitle}`

8. Right under the form create an anchor tag that display the link to the movie json data.

9. Let's pass a callback function to the setState function inside the handleSubmit method.

    this.setState({searchURL: `${baseURL}${apiKey}${query}${movieTitle}`}, () => {
           
        })

10. Inside the callback function let's use the fetch api to fetch some data.
    - Use a .then() to parse the response ro json.
    - Use another .then() to console.log the data and handle any errors.

11. Now instead of showing our data in the console let's update the movie property in the state, and also set movieTitle back to an empty string. 

12. Create a new component MovieInfo right below the App component.

13. Create all the element tags we want to show in the component.
    - Title, Year, Img, Genre, and Plot.

14. Let's render our new MovieInfo component inside App component.

15. Now let's pass the movie data from our state to the MovieInfo component as a prop.

16. Last Step! Let's wrap our MovieInfo component into a ternary expression and render the MovieInfo component *if this.state.movie else render empty string* .
