import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListActorsComponent from './components/ListActorsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListLanguageComponent from './components/ListLanguageComponent';
import AddLanguage from './components/AddLanguage';
import UpdateActor from './components/UpdateActor';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path= "/" exact component = {ListActorsComponent}></Route>
                <Route path= "/Actors" component = {ListActorsComponent}></Route>
                <Route path= "/Languages" component = {ListLanguageComponent}></Route>
                <Route path= "/AddLanguage" component = {AddLanguage}></Route>
                <Route path= "/UpdateActor/:id" component = {UpdateActor}></Route>
              </Switch>
    </div>
    </Router>
  <FooterComponent/>

  </div>
  );
}

export default App;
