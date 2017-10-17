import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';
export class Questions extends React.Component{
  constructor(props){
    super(props);
      this.state={
        email:"",
        textarea:'',
        checkEmail:'',
        checkText:""
      }
  }

  componentDidMount(){
  $(function() {
    var buttonTop = $(".backQuestion");
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

handleEmail=(e)=>{
  this.setState({
    email:e.target.value,
  })
}

handleTextArea=(e)=>{
  this.setState({
    textarea:e.target.value,
  })
}

handleClick=()=>{
  if(this.state.email.length == 0 && this.state.textarea.length == 0 ){
    this.setState({
      checkEmail:"please write email addres",
      checkText:"please write question",
    })
  }
  else if(this.state.email.length == 0){
    this.setState({
      checkEmail:"please write email addres",
      checkText:"",
    })
  }
  else if(this.state.email.indexOf('@') == -1){
    this.setState({
      checkEmail:"email addres it must contain @"
    })
  }
  else if(this.state.textarea.length == 0){
    this.setState({
      checkEmail:"",
      checkText:"please write question",
    })
  }
  else{
    this.setState({
      checkEmail:'',
      checkText:"",
      pass: "Thanks, your message has been sent :) "
    })
    this.url = "http://localhost:3000/Question";
    this.data = {
      question:this.state.textarea,
      email:this.state.email
    }
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
  render(){
    return(
      <div className="questions">
        <div className="backQuestion show"><IndexLink to="/questions">&uarr;</IndexLink></div>
<div className="choseLevel">
        <h1>If you have any questions about this site please write to us :)</h1>
        <h2>{this.state.pass}</h2>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <h4>Please write your e-mail here , we write back :)</h4>
      <label>
        <input type="text" placeholder = "email" onChange={this.handleEmail} className="email"/>
      </label>
      <h4 style={{color:"red"}}>{this.state.checkEmail}</h4>
        <br/>
        <h4>Here enter your questions :P</h4>
        <label>
        <textarea onChange={this.handleTextArea} className="textarea"/>
      </label>
      <h4 style={{color:"red"}}>{this.state.checkText}</h4>
        <br/>
        <input type ="submit" value="submit" onClick = {this.handleClick} className="submit" />
      </form>
      </div>
    </div>
    )
  }
}
