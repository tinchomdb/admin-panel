import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useSelector } from "react-redux";

function App() {
  /* let admin = false;
  if (localStorage.getItem("persist:root") !== null) {
    if (
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser !== null
    ) {
      admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.isAdmin;
    }
  } */

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <Router className="App">
      <Switch>
        <Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {admin ? <Redirect to="/" /> : <Register />}
        </Route>
        {admin && (
          <>
            <TopBar />
            <div className="container">
              <Sidebar />

              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newuser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
