import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

export class MiniGame extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  $(function() {
    var buttonTop = $(".backMinigame");
    $(window).on('scroll', function() {
      var scrollTop = $(window).scrollTop();
      if(scrollTop > 220 ) {
        buttonTop.removeClass('show');
      }
      else{
        buttonTop.addClass('show');
      }
})
})
}

  render(){
    return(
      <div>
                <div className="backMinigame show"><IndexLink to="/mini-game">&uarr;</IndexLink></div>
        <div className="choseLevel">
        <ul>
          <li>
            <IndexLink to="/mini-game" activeClassName="active">Rules</IndexLink>
          </li>
          <li>
            <IndexLink to="/mini-game/Easy" activeClassName="active">Easy</IndexLink>
          </li>
          <li>
            <IndexLink to="/mini-game/Medium" activeClassName="active">Medium</IndexLink>
          </li>
          <li>
            <IndexLink to="/mini-game/Hard" activeClassName="active">Hard</IndexLink>
          </li>
        </ul>
      </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
