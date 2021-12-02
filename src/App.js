import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import NavbarComponent from './components/NavbarComp';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
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
          <Dashboard />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
