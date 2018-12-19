import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,

} from 'reactstrap';
// import Jumbo from './Jumbo';


const VIIItexts = {
  text1: "AI improved with user specific data. Clic here to calibr-8",

  text2: ""
}
const items = [
  {
    src: 'images/1.png',
    altText: '',
    caption: ''

  },
  {
    src: 'images/j1.png',
    altText: '',
    caption: ''
  },
  {
    src: 'images/j3.png',
    altText: '',
    caption: ''
  },
  {
    src: 'images/j2.png',
    altText: '',
    caption: ''
  }, {
    src: 'images/j4.png',
    altText: '',
    caption: ''
  },
  {
    src: 'images/j5.png',
    altText: '',
    caption: ''
  },
  {
    src: 'images/j1.png',
    altText: '',
    caption: ''
  },
  {
    src: 'images/j6.png',
    altText: '',
    caption: ''
  }





];


class D extends Component {


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
    {
      var x = document.getElementById("./audio/8break.mp3");

      function playAudio() {
        x.play();
      }
    }
    return (<div>


      {/* <Jumbo /> */}
      <Carousel style={{ backgroundColor: 'black' }}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.playAudio} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.playAudio} />
      </Carousel>

    </div>);
  }


}




export default D;