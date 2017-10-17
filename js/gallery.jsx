import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

export class Gallery extends React.Component{
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
    this.arr=["antelope","bear","cat","cricket","frog","lion","pig","turtle","camel","cow","dolphin","kangaroo","mouse","parrot","snail","snake","squrriel","wasp","bison","bull","crocodile","dog","eagle","goat","hawk","horse","lemur","monkey","moose","ostrich","peacock","tiger"];
    function myFunction() {
      let arr = arguments;
      let newArr = [];
      for( let i=0;i<arr.length;i++){
        newArr.push(`url(images/${arr[i]}/${arr[i]}1.jpeg)`,`url(images/${arr[i]}/${arr[i]}2.jpeg)`,`url(images/${arr[i]}/${arr[i]}3.jpeg)`,`url(images/${arr[i]}/${arr[i]}4.jpeg)`,`url(images/${arr[i]}/${arr[i]}5.jpeg)`,);
      }
      return newArr;
    }
    this.gallery = myFunction(...this.arr);
    shuffle(this.gallery);
    this.state={
      gallery:this.gallery,
      display:"none"
    }
  }

  componentDidMount(){
  $(function() {
    var nav = $('.menu');
    var menuButton = $('.menuButton');
    var buttonTop = $(".backGallery");
    var top = nav.position().top;
    function top_update() {
      $(window).on('resize', function() {
        location.reload();
        top = nav.position().top;
        return top;
      })
    }

    $(window).on('scroll', function() {
      top_update();
      var scrollTop = $(window).scrollTop();
      if(scrollTop > (top + 50)) {
        menuButton.removeClass('show');
        nav.addClass('show');
        buttonTop.removeClass('show');
      }
      if (scrollTop > top) {
        nav.addClass('sticky');
      }
    if(scrollTop < top) {
        nav.removeClass('sticky');
        nav.removeClass('show');
        menuButton.addClass('show');
        buttonTop.addClass('show')
      }
    })

  menuButton.on("click",function(){
  nav.toggleClass("show");
  nav.addClass('sticky');
  menuButton.addClass('show');
  })
})
}

componentWillUnmount(){
window.location.reload()
}

handleClick=(e)=>{
  this.data = e.target.getAttribute('data-key');
  this.fullScreen = this.state.gallery[this.data];
  this.setState({
    fullScreen: this.fullScreen,
    display:"block"
  })
}

handleClick1=(e)=>{
  this.setState({
    fullScreen:'',
    display:"none"
  })
}

    render(){
      return(
        <div className= "mainwidth">
          <div className="backGallery show"><IndexLink to="/">&uarr;</IndexLink></div>
          {this.state.gallery.map((element,index) => <div onClick = {this.handleClick} className = "gallery"  style ={{backgroundImage:element}} key = {index} data-key = {index}></div>)}
          <div onClick= {this.handleClick1} className = "fullScreen" style={{display:this.state.display,backgroundImage:this.state.fullScreen}}></div>
        </div>
      )
  }
}
