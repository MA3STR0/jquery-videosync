jQuery-VideoSync
================

###jQuery plugin that helps you animate elements based on video playback timer

Tiny (<1KB minimized), easy to use, CSS-animation friendly.

**DEMO**: http://MA3STR0.github.io/jquery-videosync

Installation
------------

Load script file `jquery.videosync.js` or `jquery.videosync.min.js` in any place after jQuery script.

    <script src="/path/to/jquery.videosync.js"></script>

Alternatively, you may just copy contents of `jquery.videosync.js` to your code.


Usage
----

**HTML**

* Add `videosync-source` class to the <video> element: `<video class="videosync-source" autoplay loop>`
* For elements that you want to update based on video playback time:
  * Add `videosync` class: `<div class="videosync">Hello</div>`
  * Add `data-videosync-start` attribute indicating time in seconds relative to video start: `<div class="videosync" data-videosync-start="1">Hello</div>`
  * Optinally add `data-videosync-end` attribute
  * Add `data-videosync-class` attribute containing class name to add or remove based on timer: `<div class="videosync" data-videosync-class="bounce" data-videosync-start="1">

**JS (optional)**

  * Instead of adding `videosync` class to video element you can directly call its .videosync() method to make it the source for plugin timing: `$('#my-video').videosync()`

**Show/hide content**

VideoSync is toggling desired element class for you, so using a class like "hidden" with style `display: none` will hide your element, and class with `display: block` will show it.

**Animations**

CSS animations are really easy to use with class toggling. The easiest way to get started is [Animate.css](https://github.com/daneden/animate.css/): just include animate.css, choose desired animation and add appropriate class to `data-videosync-class` attribute:

    <div class="videosync animated" data-videosync-class="bounce" data-videosync-start="5">Hello</div>


Compatibility
-------------

**Tested in:**
* Firefox 37
* Chrome 42
* Safari 8

Based on HTML5 <video> element, not youtube/vimeo/etc.

Should generally work in any modern browser.


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
