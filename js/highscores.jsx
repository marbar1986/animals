import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';
export class HighScores extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      easy:[],
      medium:[],
      hard:[]
    }
    this.easy=[];
    this.medium=[];
    this.hard=[];
  }

componentDidMount(){

  fetch("http://localhost:3000/Easy").then(response => response.json())
  .catch(error=>console.log(error)).then(d=>{
    this.setState({
      easy:d
    })
  }),
  fetch("http://localhost:3000/Medium").then(response => response.json())
  .catch(error=>console.log(error)).then(d=>{
    this.setState({
      medium:d
    })
  }),
  fetch("http://localhost:3000/Hard").then(response => response.json())
  .catch(error=>console.log(error)).then(d=>{
    this.setState({
      hard:d
    })
  })

$(function() {
  var buttonTop = $(".backHighscore");
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
      this.easy = this.state.easy;
      this.easy.sort(function(a, b){
    var a1= a.score, b1= b.score;
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
    });
      this.medium = this.state.medium;
      this.medium.sort(function(a, b){
    var a1= a.score, b1= b.score;
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
    });
      this.hard = this.state.hard;
      this.hard.sort(function(a, b){
    var a1= a.score, b1= b.score;
    if(a1== b1) return 0;
    return a1> b1? 1: -1;
    });

      return(
        <div className="mainwidth highscoreWidth" >
          <div className="backHighscore show"><IndexLink to="/high-scores">&uarr;</IndexLink></div>
          <h1>In the case of the same result, the higher position is taken by the person who obtained it earlier</h1><br/>
          <div className = "highsoreLevel">
            <h2>highscore level Easy:</h2>
            <ol>
              {this.easy.map(element => <li key={element.id}>name:<span className="highscoreName">{element.name}</span>, score:<span className="highscoreScore">{element.score}</span></li>)}
            </ol>
          </div>
          <div className = "highsoreLevel">
            <h2>highscore level Medium:</h2>
            <ol>
              {this.medium.map(element => <li key={element.id}>name:<span className="highscoreName">{element.name}</span>, score:<span className="highscoreScore">{element.score}</span></li>)}
            </ol>
          </div>
          <div className = "highsoreLevel" style={{marginBottom:"30px"}}>
            <h2>highscore level Hard:</h2>
            <ol>
              {this.hard.map(element => <li key={element.id}>name:<span className="highscoreName">{element.name}</span>, score:<span className="highscoreScore">{element.score}</span></li>)}
            </ol>
          </div>
          <div className="clearfix" style={{marginBottom:"50px"}}/>
        </div>
      )

}
}
