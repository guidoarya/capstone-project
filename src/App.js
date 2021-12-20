import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Routes } from 'react-router';
import Login from "./components/page/Login";
// import Register from './components/Register';
import Dashboard from "./components/Dashboard";
import NavbarComponent from "./components/NavbarComp";
import AddUmkm from "./components/AddUmkm";
import DetailUmkm from "./components/DetailUmkm";
import Register from "./components/page/Register";
import NavBar from "./components/NavBar";
import Home from "./components/page/Home";
import Footer from "./components/Footer";
import NavBarLogged from "./components/NavBar-Logged";
import HomeLogged from "./components/page/Home-Logged";
import DetailUMKM from "./components/page/DetailUMKM";
import LihatUMKM from "./components/page/LihatUMKM";
import DetailUMKM2 from "./components/page/DetailUMKM2";

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
          <Login />
          <Footer />
        </Route>
        <Route path="/register">
          <Register />
          <Footer />
        </Route>
        <Route path="/beranda">
          <NavBarLogged />
          <HomeLogged />
          <Footer />
        </Route>
        <Route path="/form-umkm">
          <NavBarLogged />
          <AddUmkm />
          <Footer />
        </Route>
        <Route path="/list-umkm">
          <NavBar />
          <LihatUMKM />
          <Footer />
        </Route>
        <Route path="/list-umkm2">
          <NavBarLogged />
          <LihatUMKM />
          <Footer />
        </Route>
        <Route path="/listUmkm-logged">
          <NavBarLogged />
          <LihatUMKM />
          <Footer />
        </Route>
        <Route path="/detail/:id" component={DetailUMKM}></Route>
        <Route path="/detail-log/:id" component={DetailUMKM2}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
