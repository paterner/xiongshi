"use strict";

var Index = {
  init: function () {
    this._bindEvent();
  },
  _bindEvent: function () {
    var tankSwitch = pageSwitch('wrapper', {
      duration: 800,
      direction: 1,
      start: 0,
      loop: false,
      ease: 'ease',
      transition: 'scroll',
      mouse: true,
      autoplay: false,
      interval: 3000
      
    });    
  }
}

$(function() {
  Index.init();
});