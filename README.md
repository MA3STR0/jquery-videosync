jQuery-VideoSync
================

###jQuery plugin that helps you animate elements based on video playback timer

Tiny (<1KB minimized), easy to use, CSS-animation friendly.

**DEMO**: http://MA3STR0.github.io/jquery-videosync

TL;DR
-----
    <video class="vs-source">
      <source src="demo.mp4" type="video/mp4">
    </video>
    <h3 class="vs animated" data-vs-in-time="3" data-vs-in-class="bounce">I will bounce on 3rd second of video</h3>
      

Installation
------------

1. Include script file `jquery.videosync.js` or `jquery.videosync.min.js` to your html in any place after jQuery.
    <script src="/path/to/jquery.videosync.js"></script>

2. You proabably want to use [Animate.css](https://github.com/daneden/animate.css/), so include it too


Usage
-----

**HTML**

* Add `vs-source` class to the main <video> element: `<video class="vs-source" autoplay loop>`
* For elements that you want to update based on playback:
  * Add `vs` class: `<div class="vs">Hello</div>`
  * Add `data-vs-in-time` attribute indicating animation start time in seconds relative to the video: `<div class="vs" data-vs-in-time="2">Hello on second 2</div>`
  * Add `data-vs-in-class` attribute with class name to add when timer fires. If using Animate.css, this will be your animation name: `<div class="vs" data-vs-in-class="bounce" data-vs-in-time="2">
  * Optinally set `data-vs-out-time` and `data-vs-out-class` attributes to add something like fade-out animation


Example
-------
A very minimal page can look like:

    <body>
      <video class="vs-source" autoplay controls>
        <source src="demo.mp4" type="video/mp4">
      </video>
      <h3 class="vs animated" data-vs-in-time="1" data-vs-in-class="bounce">I will bounce on 1st second</h3>
      <h3 class="vs animated pre-hide" data-vs-in-time="3" data-vs-in-class="fadeIn">I will fadeIn on 3rd second</h3>
      <h3 class="vs animated pre-hide" data-vs-in-time="6" data-vs-in-class="fadeInDown" data-vs-out-time="9" data-vs-out-class="fadeOutDown">I will fade in on 6th second and fade out on 9th</h3>
    </body>

See same working example on codepen: http://codepen.io/MA3STR0/pen/PqpqQd

**JS (optional)**

  * Instead of adding `vs-source` class to video element you can directly call its .videosync() method to make it the source for plugin timing: `$('#my-video').videosync()`

**Animations**

CSS animations are really easy to use with class toggling. The easiest way to get started is [Animate.css](https://github.com/daneden/animate.css/): just include animate.css, choose desired animation and add appropriate class to `data-vs-in-class` attribute:

    <div class="vs animated" data-vs-in-class="bounce" data-videosync-start="3">I will bounce in 3rd second of video</div>


Compatibility
-------------

**Tested in:**
* Firefox 37
* Chrome 42
* Safari 8

Based on HTML5 <video> element, will not work with youtube/vimeo/etc.

Should generally run in any modern browser.


License
-------

Project has a MIT License. It basically means: "do whatever you want with it".


Contributing
------------
**Issues**

Feel free to report issues or feature requests on GitHub Issues.
If reporting a bug, please add a simplified example.

**Pull requests**

Code contributions are appreciated, just make sure to test your changes in major
browsers and doublecheck the code in jshint.

Authors
-------
jQuery-VideoSync was implemented by [MA3STR0](https://github.com/MA3STR0/)
