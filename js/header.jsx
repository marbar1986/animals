import React from 'react';
import ReactDOM from 'react-dom';

export class Logo extends React.Component{
  constructor(props){
    super(props);
    this.logoimage = "url(images/logoimage.jpg)";
}

  render(){
    function myFunction(name,number) {
      let counter = 1;
      let newArr = [];
        newArr.push(`url(images/${name}/${name}${counter}.jpeg)`,`url(images/background/bg${Math.floor((Math.random() * 30) + 1)}.png)`, `url(images/${name}/${name}${++counter}.jpeg)`,`url(images/background/bg${Math.floor((Math.random() * 30) + 1)}.png)`,
        `url(images/${name}/${name}${++counter}.jpeg)`,`url(images/background/bg${Math.floor((Math.random() * 30) + 1)}.png)`,`url(images/${name}/${name}${++counter}.jpeg)`,`url(images/background/bg${Math.floor((Math.random() * 30) + 1)}.png)`,`url(images/${name}/${name}${++counter}.jpeg)`,`url(images/background/bg${number}.png)`);
      return newArr;
    };

    return(
      <div className="mainwidth">
        <div className="logoimage" style={{backgroundImage:this.logoimage}}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("lemur",1)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("lion",2)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("crocodile",3)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("parrot",4)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("cat",5)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("cow",6)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("tiger",7)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("dog",8)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("squrriel",9)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("kangaroo",10)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("horse",11)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("peacock",12)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("monkey",13)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("pig",14)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("antelope",15)}/>
        <Clock/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("bison",16)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("mouse",17)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("frog",18)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("dolphin",19)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("turtle",20)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("snake",21)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("camel",22)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("snail",23)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("cricket",24)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("ostrich",25)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("eagle",26)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("wasp",27)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("bear",28)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("hawk",29)}/>
        <StartElement frequency = {Math.floor((Math.random() * 500) + 250)} images = {myFunction("moose",30)}/>
      </div>
    )
  }
}

export class StartElement extends React.Component{
  constructor(props){
    super(props);
    this.images = this.props.images;
    this.state = {
      image:this.images[0],
    }
this.counter = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        image: this.images[++this.counter],
      })
      if (this.images.length - 1 === this.counter) {
        clearInterval(this.interval);
      }
    }, this.props.frequency)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <div className = "StartElement" style ={{backgroundImage:this.state.image}}></div>
    )
  }
}

export class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (

      <div className = "Clock">
        <h3 className= "date">date:</h3>
        <h3 className= "date"><ClockDate date={this.state.date}/></h3><br/><br/>
        <h3 className= "time">time:</h3>
        <h3 className= "time"><ClockTime date={this.state.date}/></h3>
      </div>
    )
  }
}

export class ClockTime extends React.Component {
  render() {
    return (
      <div>{this.props.date.toLocaleTimeString()}</div>
    )
  }
}

export class ClockDate extends React.Component {
  render() {
    return (
      <div>{this.props.date.toLocaleDateString()}</div>
    )
  }
}
