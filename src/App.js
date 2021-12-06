import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Routes } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import NavbarComponent from './components/NavbarComp';
import AddUmkm from './components/AddUmkm';
import DetailUmkm from './components/DetailUmkm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/beranda-logged">
          <NavbarComponent />
          <Dashboard />
        </Route>
        <Route path="/beranda">
          <NavbarComponent />
          <Dashboard />
        </Route>
        <Route path="/form-umkm">
          <NavbarComponent />
          <AddUmkm />
        </Route>
        <Route path="/list-umkm">
          <Dashboard />
        </Route>
        <Route path="/detail/:id" component={DetailUmkm}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
