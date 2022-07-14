import NavBar from "../layout/NavBar";

const Home = ({user}) => {
  return (
    <div>
      <NavBar user={user}/>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
