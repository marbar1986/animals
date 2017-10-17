
import React from 'react';
import ReactDOM from 'react-dom';
import {Gallery} from './gallery.jsx';
import {Logo,StartElement,Clock,ClockDate,ClockTime} from './header.jsx';
import {Animals,StartPage,AnimalType} from "./animals.jsx";
import {NotFound} from "./notFound.jsx";
import {MiniGame} from "./minigame.jsx";
import {Rules,Level} from "./levels.jsx";
import {Questions} from "./questions.jsx";
import {Footer} from "./footer.jsx";
import {HighScores} from "./highscores.jsx";
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

class Template extends React.Component{

  render(){
    return(
      <div>
          <Logo/>
        <div className="clearfix"/>
        <ul className="menu">
          <li>
            <IndexLink to="/" activeClassName="active">Gallery</IndexLink>
          </li>
          <li>
            <IndexLink to="/animals" activeClassName="active">About Animals</IndexLink>
          </li>
          <li>
            <IndexLink to="/mini-game" activeClassName="active">MiniGame</IndexLink>
          </li>
          <li>
            <IndexLink to="/high-scores" activeClassName="active">HighScores</IndexLink>
          </li>
          <li>
            <IndexLink to="/questions" activeClassName="active">Questions</IndexLink>
          </li>
        </ul>
        <div className="menuButton show">Menu</div>
        <div className="clearfix"/>
        <div className="mainwidth" style={{height:'5px'}}/>
      {this.props.children}
      <div className="clearfix"/>
      <div className="mainwidth" style={{height:'5px'}}/>
      <Footer/>
    </div>
    )
  }
}


class App extends React.Component {
render() {
return  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
<Route path='/' component={Template}>
  <IndexRoute component={Gallery} />
  <Route path='/animals' component={Animals}>
  <IndexRoute component={StartPage}/>
  <Route  path="/animals/:name" component={AnimalType}/>
</Route>
  <Route path='/mini-game' component={MiniGame} >
  <IndexRoute component={Rules}/>
  <Route path="/mini-game/:level" component={Level} />
</Route>
  <Route path='/high-scores' component={HighScores} />
  <Route path='/questions' component={Questions} />
  <Route path='*' component={NotFound} />
</Route>
</Router>
}
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App/>
, document.getElementById('app'));
});
