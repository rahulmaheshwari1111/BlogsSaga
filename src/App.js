
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/projects/ProjectDetails';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';
import CreateProject from './component/projects/CreateProject';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>  
        <Route exact path = '/' component = {Dashboard}/>
        <Route  exact path ='/project/:id' component = {ProjectDetails}/>
        <Route exact path = '/signin' component = {Signin}/>
        <Route exact path = '/signup' component = {Signup}/>
        <Route exact path = '/create' component = {CreateProject}/>
         </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
