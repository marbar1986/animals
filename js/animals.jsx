import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

export class Animals extends React.Component{
  constructor(props){
    super(props);
    this.state={
      animals:["Antelope","Bear","Bull","Camel","Cat","Cow","Crocodile","Dog","Dolphin","Eagle","Frog","Goat","Horse","Kangaroo","Lion","Monkey","Moose","Ostrich","Parrot","Peacock","Pig","Snail","Snake","Squrriel","Tiger","Turtle"],
    }
  }

  componentDidMount(){
  $(function() {
    var buttonTop = $(".backAnimals");
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
      <div className="mainwidth">
        <div className="backAnimals show"><IndexLink to="/animals">&uarr;</IndexLink></div>
        <div className="listAnimals">
        <ul>
          {this.state.animals.map(element => <li key = {element}><IndexLink to={"animals/"+ element} activeClassName="active">{element}</IndexLink></li>)}
        </ul>
      </div>
        <div className="info">
          {this.props.children}
        </div>
      </div>

    )
  }
}
export class StartPage extends React.Component{
  constructor(props){
    super(props);
    this.arr = ["Antelope","Bear","Bull","Camel","Cat","Cow","Crocodile","Dog","Dolphin","Eagle","Frog","Goat","Horse","Kangaroo","Lion","Monkey","Moose","Ostrich","Parrot","Peacock","Pig","Snail","Snake","Squrriel","Tiger","Turtle"];
    function myFunction() {
      let arr = arguments;
      let newArr = [];
      for( let i=1;i<arr.length;i++){
        newArr.push(`url(Drawings/${arr[i]}.jpeg)`,);
      }
      return newArr;
    }
    this.state={
      drawings: myFunction(...this.arr)
    }
  }
  render(){
    return(
      <div className="startPage">
        <h1>Hello, talk to us, We are in the tabs :P</h1>
        <div>
        {this.state.drawings.map(element=><div key={element} className="drawingsElements" style={{backgroundImage:element,}} />)}
      </div>
      </div>
    )
  }
}

export class AnimalType extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text:'',
    }
    this.Animals = {
      Antelope:{
      first:"HI, I am an atelope belong to mammals of the beef family",
      second:"I live in africa, asia and north america",
      third:"I can reach up to 1.75 meters and weigh 950 kilos"
    },
  Bear:{
    first:"HI, I am beer belong to the predatory mammal family of the bear family",
    second:"Most of us can meet in the northern hemisphere, one of my species you can meet also in Poland",
    third:"The smallest of our family malay bear weighs 35-60 kilos, while the largest of us reach up to 800 kilograms"
  },
Bull:{
  first:"Hi, I am a bull, I belong to the stunted mammal of the deer family",
  second:"I am bred everywhere except antarctica",
  third:"In African countries, the number of bovine animals attests to social status"
},
Camel:{
  first:"Hi, I am a camel belonging to large mammals of the camel family",
  second:"In the wild state only occurs in central Asia and Africa",
  third:"I have a very long and curved neck my body achieves up to 3 meters in length"
},
Cat:{
  first:"Hi, I am a cat belonging to domesticated predatory mammals of the feline family",
  second:"I was domesticated more than 9500 years ago and you will meet me in homes all over the world",
  third:"Living in homes we reach the age of up to 20, while in the wild only up to 8 years"
},
Cow:{
  first:"Hi, I am a cow and I am a female of the bovine speciesy",
  second:"I am bred everywhere except antarctica",
  third:"In India I consider myself a saint, I am also the holy animal of the Egyptian goddess"
},
Crocodile:{
  first:"Hi, I am a crocodile belong to the predatory reptiles of the family of spottedrops",
  second:"You can meet me mainly in the tropics, but also in the US and the Chinese Yangtze River",
  third:"Unlike most reptiles I take care of my offspring"
},
Dog:{
  first:"Hi, I am a dog and I am a domesticated predatory mammal from the canine family",
  second:"Because I'm a domesticated animal you can meet me in homes all over the world",
  third:"I have an excellent sense of smell that I use from my puppy years, thanks to him I work in the police"
},
Dolphin:{
  first:"Hi, I am a dolphin belonging to the aquatic mammals of the families Delphinidae and Platanistidae",
  second:"You can meet me on both hemispheres and equatorial rivers",
  third:"I am a social animal and my intelligence is twice as high as that of a chimpanzee"
},
Eagle:{
  first:"Hi, I am an eagle and I am a bird of prey from the hawk family",
  second:"You can meet me on rock shelves in the mountains and on the trees in the lowlands",
  third:"During flight I reach speeds of up to 160 kph, but on average I fly at 48 kph"
},
Frog:{
  first:"Hi, I am a frog and I belong to amphibians from the frog family",
  second:"You can meet me in most parts of Europe and adjacent parts of Asia",
  third:"Some of us are nail size, while the largest ones reach up to 40 centimeters"
},
Goat:{
  first:"Hi, I am a goat domesticated form of wild goat and therefore a mammal from the beef family",
  second:"As a breeding animal you can meet me anywhere except Antarctica",
  third:"What are we herbivores and we live from 15 to 18 years, the maximum weight is 140 kilograms"
},
Horse:{
  first:"Hi, I am a horse of equine mammal",
  second:"As I am a domesticated animal, I can be found all over the world",
  third:"I once used to be a drag animal, today less often. Today it is used for recreational and sports purposes"
},
Kangaroo:{
  first:"Hi, I am a kangaroo type marsupial of the kangaroo family",
  second:"Meet me in the Australian geographic region",
  third:"My lower limbs are able to move independently, so jump up to 10 meters"
},
Lion:{
  first:"Hi, I am a carnivorous lion species of predatory mammal from the feline family",
  second:"Today you can only meet me in africa, and in India indistinguishably",
  third:"I am the only cat that lives and hunts in the herd"
},
Monkey:{
  first:"Hi, I am a monkey, a primitive animal from the primates",
  second:"You can meet me in both america and africa and asia",
  third:"We live in family groups with an extensive social structure"
},
Moose:{
  first:"Hi, I am a moose, I belong to the deer family",
  second:"You can meet me in eurasia and north america",
  third:"We weigh between 200 and 400 kilograms, but the largest of us can exceed half a ton"
},
Ostrich:{
  first:"Hi, I am a carnivorous lion species of predatory mammal from the feline family",
  second:"Today you can only meet me in africa, and in India indistinguishably",
  third:"I am the only cat that lives and hunts in the herd"
},
Parrot:{
  first:"Hi, I am an ostrich, I belong to a bird family of a subspecies of modern birds",
  second:"You will meet me in the semi-deserts and African savannah and syrii and the Arabian peninsula.",
  third:"I can run at a speed of 70 kilometers per hour, and my wing span is 2 meters"
},
Peacock:{
  first:"Hi, I'm a peacock, I'm a bird species of the genus Pavo and Afropavo of the kufat family",
  second:"You will meet me on the Indian peninsula, indonesia, vietnam and the republic of konga",
  third:"I live from 10 to 25 years and I deposit from 4 to 8 eggs"
},
Pig:{
  first:"Hi, I am a pig animal, I belong to the mammals of the swine family",
  second:"As a breeding animal, you can meet me right around the world",
  third:"I'm from a wild boar that was domesticated more than 7,000 years ago"
},
Snail:{
  first:"Hi, I am a snail, I belong to the most diverse group of molluscs",
  second:"You will meet me both in water and on land",
  third:"The largest shell found was 91 centimeters"
},
Snake:{
  first:"Hi, I am a snake belong to the reptiles of the order of ossicular",
  second:"You will meet me on all continents except Antarctica",
  third:"I am carnivorous and swallow whole victims, although they are often larger than me"
},
Squrriel:{
  first:"Hi, I am a squirrel, I belong to a rodent family of squirrels",
  second:"You will meet me in the woods of Europe and Asia",
  third:"My pregnancy lasts from 36 to 39 days, in one litter I give birth to 3 to 7 young"
},
Tiger:{
  first:"Hi, I am a tiger, I belong to predatory mammals of the feline family",
  second:"You can meet me in eastern and southern Asia",
  third:"females reach maturity about 3 - 4 years old and males one year later"
},
Turtle:{
  first:"Hi, I am a turtle, I belong to the reptiles of the order of amniotic species",
  second:"Meet me on all continents except Antarctica",
  third:"We are all oviparous and we put them on land"
}
}
    this.counter=1;
  }

handleClick=(e)=>{
  this.name = this.props.params.name;
  this.object = this.Animals[this.name];
  this.id = e.target.getAttribute("data-id");
    clearInterval(this.interval)
        this.counter=1;
  this.interval = setInterval(() => {
    this.setState({
      text: this.object[this.id].substring(0, this.counter++)
    })
    if (this.object[this.id].length < this.counter) {
      clearInterval(this.interval);
    }
  }, 200)
}

componentWillUnmount() {
  clearInterval(this.interval);
}

  render(){
    return(
      <div>
        <div className="mainwidth"/>
        <div className="QuestionAnimal">
            <h3>Ask the animal about:</h3>
            <div className="Question1" onClick={this.handleClick} data-id="first">
            Who are you?
            </div>
            <div className="Question2" onClick={this.handleClick} data-id="second">
            Where are you from?
            </div>
            <div className="Question3" onClick={this.handleClick} data-id="third">
              tell me something about yourself?
            </div>
        </div>
        <div className="AllHaze">
          <div className="Haze1"><h1>{this.props.params.name == this.name?this.state.text:clearInterval(this.interval)}</h1></div>
          <div className="clearfix"/>
          <div className="Haze2"></div>
          <div className="Haze3"></div>
          <div className="Haze4"></div>
        </div>
        <div className="clearfix"/>
        <div className="drawings" style={{backgroundImage:`url(Drawings/${this.props.params.name}.jpeg)`}}/>
      </div>
    )
  }
}
