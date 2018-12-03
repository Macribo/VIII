import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,

} from 'reactstrap';
import Jumbo from './Jumbo';


const VIIItexts = {
  text1: "AI improved with user specific data. Clic here to calibr-8",

  text2: ""
}
const items = [
  {
    src: 'images/0.png',
    altText: function textDelivery(text) {

      alert('textDelivery');
    },
    caption: 'Project Proposal'

  },
  {
    src: 'images/1.png',
    altText: 'play("pool-cue-break.wav")',
    caption: '3D_animation_of_logo_rolling_away'
  },
  {
    src: 'images/2.png',
    altText: '100,000 Fáilte',
    caption: 'Muintir an t-Sír'
  },
  {
    src: 'images/3.png',
    altText: 'go',
    caption: 'Éir3 2'
  }, {
    src: 'images/3b.png',
    altText: 'A Big Place',
    caption: 'for small ideas'
  }, {
    src: 'images/3c.png',
    altText: '',
    caption: ''
  }, {
    src: 'images/4.png',
    altText: 'Let\'s get on with putting errors on the moon',
    caption: ''
  }, {
    src: 'images/5.png',
    altText: `    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
//box1 = new Box(200,100,50,50);
var options = {isStatic:true};
ground = Bodies.rectangle(200, height,width, 10,options);
World.add(world, ground);
}


`,
    caption: ''
  }, {
    src: 'images/6.png',
    altText: '',
    caption: ' createCanvas(400,400);'
  }, {
    src: 'images/7.png',
    altText: 'loadUserProfiles();',
    caption: ''
  }, {
    src: 'images/8.png',
    altText: 'createFlag(); ',
    caption: `alert("Choose colors for your flag");`


  },
  {
    src: 'images/9.png',
    altText: 'Color 1',
    caption: ''
  }, {
    src: 'images/9b.png',
    altText: 'Color 2',
    caption: ''
  }, {
    src: 'images/9d.png',
    altText: 'Color 3',
    caption: ''
  }, {
    src: 'images/9f.png',
    altText: 'Add Emblem?',
    caption: ''
  }, {
    src: 'images/9g.png',
    altText: 'Add Motto',
    caption: 'Add Country of Origin Name'
  }, {
    src: 'images/9h.png',
    altText: 'Welcome, citizen of',
    caption: 'ContryOfOrigin.name'
  }, {
    src: 'images/9i.png',
    altText: 'But what does it do?',
    caption: ''
  },

  {
    src: 'images/9j.png',
    altText: 'Part III',
    caption: 'Entscheidungshilfetool'
  },
  ,



  {
    src: 'images/9j1.png',
    altText: 'or be asked a question',
    caption: 'or ask a question'
  }
  ,

  {
    src: 'images/j2.png',
    altText: 'Cheating the Turing Test',
    caption: 'Is a way to pass.'
  }

];


class VIII extends Component {


  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{ minHeight: "100%", maxHeight: "100%" }} src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (<div>
      <Jumbo />
      <Carousel style={{ backgroundColor: 'black' }}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    </div>);
  }
}



export default VIII;