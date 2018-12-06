import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class preabTeacs extends Component {



  /*
  uh, I just added 'this' to everything,
  to get the compiler to pipe-down so I could push a running version.
  I'm going to keep working on this component in another project folder.
  */
  // setTextTiming = () => {
  //   for (this.i = 0; this.i < this.words.length; this.i++) {

  //     let k = this.words[this.i];
  //     this.wordLengths[this.i] = k.length;
  //     console.log(this.wordLengths);

  //   }
  // }




  // nextDelay = 0;

  // timeout = () => {
  //   setTimeout(function () {
  //     this.nextDelay = this.wordLengths[this.currentWord] * 40;
  //     console.log(this.nextDelay);
  //     if (this.currentWord < this.words.length) {
  //       this.popText.innerHTML = this.words[this.currentWord];
  //       this.currentWord++;
  //       this.timeout();
  //       // console.log(timeOutValue);
  //     }
  //     else {
  //       this.currentWord = this.words.length - 1;
  //     }
  //   }, this.nextDelay)
  // }






  // startBtnPushed = () => {
  //   this.setTextTiming();
  //   this.currentWord = 0;
  //   this.timeout();
  // }

  // render() {

  //   // alert("works");


  //   var popText = document.getElementById('popText');

  //   let words = [''];
  //   let currentWord = 0;
  //   // btnStart.addEventListener('click', () => { this.startBtnPushed(); });
  //   let wordLengths = [];

  //   /* commented-out feature not working: set timeout timer according to word length */
  //   // let timeOutValue = 0;


  //   // function resetTextTimeoutValue() {
  //   //   timeOutValue = Math.floor(Math.random() * 4000);




  //   return (
  //     <div>

  //       <Button id="btnStart"><i class="fas fa-arrow-right "></i></Button>
  //     </div>
  //   )
  // }
}