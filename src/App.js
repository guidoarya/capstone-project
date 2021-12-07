import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/page/Login";
import Register from "./components/page/Register";
import Dashboard from "./components/page/Dashboard";
import NavbarComponent from "./components/NavbarComp";
import Home from "./components/page/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LihatUMKM from "./components/page/LihatUMKM";
import DetailUMKM from "./components/page/DetailUMKM";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/login">
          <NavBar />
          <Login />
          <Footer />
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
          <Footer />
        </Route>
        <Route path="/beranda-logged">
          <NavbarComponent />
          <Dashboard />
          <Footer />
        </Route>
        <Route path="/beranda">
          <NavbarComponent />
          <Dashboard />
          <Footer />
        </Route>
        <Route path="/form-umkm">
          <Dashboard />
          <Footer />
        </Route>
        <Route path="/list-umkm">
          <NavBar />
          <LihatUMKM />
          <Footer />
        </Route>
        <Route path="/detail-umkm">
          <NavBar />
          <DetailUMKM />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
