import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/page/Login";
import AddUmkm from "./components/AddUmkm";
import Register from "./components/page/Register";
import NavBar from "./components/NavBar";
import Home from "./components/page/Home";
import Footer from "./components/Footer";
import NavBarLogged from "./components/NavBar-Logged";
import HomeLogged from "./components/page/Home-Logged";
import DetailUMKM from "./components/page/DetailUMKM";
import LihatUMKM from "./components/page/LihatUMKM";
import DetailUMKM2 from "./components/page/DetailUMKM2";
import LoginAdmin from "./components/page/LoginAdmin";
import AddUmkmAdmin from "./components/AddUmkmAdmin";
import Dashboard from "./components/Dashboard";

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
        <Route path="/list-umkm-log">
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

        <Route path="/loginAdmin">
          <NavBar />
          <LoginAdmin />
          <Footer />
        </Route>
        <Route path="/admin-dashboard">
          <Dashboard />
          <Footer />
        </Route>
        <Route path="/addUmkmAdmin">
          <AddUmkmAdmin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
