import 'bootstrap';
import $ from 'jquery';

import './fontawesome-all.min';
import './svg-inject';
import './progress-bar';
import './smooth-scroll';
import './navbar-bg';

import '../styles/screen.scss';

/*
 * I didn't use arrow callback because in the current version of webpack
 * on production build it returns an error.
 */
$(function onReady() { // eslint-disable-line prefer-arrow-callback
  if (document.body.classList.contains('homepage')) {
    $('.people header')
      .click((e) => {
        e.preventDefault();
        const $scrollbox = $('.scrollbox');
        $scrollbox.animate({
          scrollLeft: '+=300',
        }, 500);
      });
  }
});
