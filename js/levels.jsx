
import React from 'react';
import ReactDOM from 'react-dom';
export class Rules extends React.Component{
  constructor(props){
    super(props);
    this.img1 = "url(images/goat/goat5.jpeg)";
    this.img2 = "url(images/goat/goat2.jpeg)";
  }
  render(){
    return(
      <div className="rules">
        <h1>Rules of the MiniGame</h1>
        <p className="text" style={{color:'#22672E'}}>The rules is very simply:</p>
        <p className="text" >The game will start when you click the start button<br/>From this point every second one point will be added to your score<br/>You need to find two elements that represent the same type of animal<br/>When you click one of the boxes, you will see a picture of the animal<br/>When you click the second item it will also be exposed<br/>Both elements will be visible for two seconds<br/>After this time, if you have identified the same items, they will be removed, otherwise they will be hidden behind.<br/>The game is over when you find all matching pairs of pictures<br/>The less points you get when completing the game, the better</p>
        <p className="text" style={{color:"#22672E",marginBottom:"15px"}}>Remember the matching pictures are not the same, for example:</p>
        <div>
          <div style={{width:"50%",margin:"0 auto"}}>
          <div className="examplePicture" style={{backgroundImage:this.img1}}/>
          <p>+</p>
          <div className="examplePicture" style={{backgroundImage:this.img2}}/>
          <p>=</p>
        </div>
          <p className="text2">It is good because both pictures show goats</p>
          <div className="clearfix"/>
          <h1>Good Luck !!</h1>
        </div>
      </div>
    )
  }
}

export class Level extends React.Component{
  constructor(props){
    super(props);
    let shuffle = function(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [
          a[i - 1],
          a[j]
        ] = [
          a[j],
          a[i - 1]
        ];
      }
    }
    this.state={
      check:[],
      complete:[],
      timer:0,
      text:"",
      disabled:false,
      text2:"",
    }

    function myFunction() {
      let arr = arguments;
      let newArr = [];
      for( let i=0;i<arr.length;i++){
        newArr.push(`url(images/${arr[i]}/${arr[i]}5.jpeg)` , `url(images/${arr[i]}/${arr[i]}${Math.floor((Math.random() * 4) + 1)}.jpeg)`,);
      }
      return newArr;
    }

    this.complete=[];
    this.check=[];
    this.arr=["antelope","bear","cat","cricket","frog","lion","pig","turtle","camel","cow","dolphin","kangaroo","mouse","parrot","snail","snake","squrriel","wasp","bison","bull","crocodile","dog","eagle","goat","hawk","horse","lemur","monkey","moose","ostrich","peacock","tiger"];
    shuffle(this.arr);
    this.pictureLevel = {
      Easy:{
        picture: myFunction(...this.arr.slice(0,8)),
      className:"minigameEasy",
      backgroundImage:"url(images/cards/cards.jpeg)",
      backgroundColor:"#0E2A0F",
      gameElement:"gameElementEasy",
    },

      Medium:{
        picture:myFunction(...this.arr.slice(0,18)),
          className:"minigameMedium",
          backgroundImage:"url(images/cards/cards2.jpeg)",
          backgroundColor:"#22672E",
            gameElement:"gameElementMedium",
        },

          Hard:{
            picture:myFunction(...this.arr.slice(0,32)),
              className:"minigameHard",
              backgroundImage:"url(images/cards/cards3.jpeg)",
              backgroundColor:"green",
                gameElement:"gameElementHard",
            },
    }
    this.level = this.props.params.level;
    this.objectLoad = this.pictureLevel[this.level];
    this.game = this.objectLoad['picture'];
    shuffle(this.game);
    this.background = this.objectLoad['backgroundImage'];
  }

  componentWillReceiveProps(nextProps) {
     if (this.props.params.level !== nextProps.params.level) {
      window.location.reload()
     }
  }

  playAgain=()=>{
    window.location.reload();
  }
  handleStartGame=()=>{
    this.interval = setInterval(() => {
      this.setState({
        timer: ++this.state.timer,
      })
    }, 1000)
  }

handleClick=(e)=>{
  if(this.check.length < 2 && this.state.timer > 0){
  this.name = e.target.getAttribute('data-name');
  if(this.check[0] != this.name || this.check.length == 0){
this.check.push(this.name)
  this.setState({
    check:this.check,
  })
}
    if(this.check.length == 2) {
      this.timerID = setTimeout(() => {
  if(this.check[0].slice(11,15) === this.check[1].slice(11,15)){
    this.complete.push(this.check[0],this.check[1]);
    this.setState({
      complete:this.complete,
    })
    this.check=[];
    this.setState({
      check:this.check,
    })
    if(this.complete.length === this.game.length){
      clearInterval(this.interval);
      this.yourName = prompt('Podaj swoje imie');
      this.setState({
        text: `Congratulations ${this.yourName} You Win :)`,
        button:<div className="playAgain" onClick={this.playAgain} style={{margin:"0 auto"}}>Play Again</div>,
        disabled:true
      })
      this.data={
        name:this.yourName,
        score:this.state.timer
      }
      this.url = "http://localhost:3000/" + this.props.params.level;
      fetch(this.url,{
       "method": "POST",
       headers: {
        'Content-Type':'application/json',
      },
       body: JSON.stringify(this.data)
     }).then(response => response.json())
     .catch(error => console.watch(error));
    }
  }
  else{
    this.check=[];
    this.setState({
      check:this.check,
    })
  }
},2000)
}
}
}

componentWillUnmount() {
clearInterval(this.interval);
clearTimeout(this.timerID);
this.complete=[];
this.game = [];
this.check=[];
this.setState({
  check:[],
  complete:[],
  timer:0,
  text:"",
  disabled:false,
})
}

  render(){
    return(
      <div>
        <div className="GameInfo">
          <button className="startGame" onClick={this.handleStartGame} style={{backgroundColor:this.objectLoad['backgroundColor']}} disabled={this.state.disabled}>Start</button>
          <h3>Your Score: {this.state.timer}</h3>
        </div>
        <div className="clearfix"/>
      <div className= {this.objectLoad['className']}>
        <div style={{marginBottom:"5px"}}><h1 style={{width:"80%",color:"red",texAlign:"center",fontSize:"22px",margin:"0 auto"}}>{this.state.text}</h1><div style={{width:"60%",margin:this.state.text.length > 0 ?"50px auto 0 auto": 0}}>{this.state.button}</div></div>
        {this.game.map(element => <div className = {this.objectLoad['gameElement']} key = {element} data-name = {element} style={{backgroundImage:this.state.check.indexOf(element) == -1 ? this.background : element,visibility:this.state.complete.indexOf(element) == -1? "block": "hidden"}} onClick={this.handleClick}></div>)}
      </div>
    </div>
    )
  }
}
