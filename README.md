jQuery-VideoSync
================

###jQuery plugin that toggles page content based on video playback timer

####Tiny (<1KB minimized), easy to use, animation-friendly.

**DEMO**: http://MA3STR0.github.io/jquery-videosync

Installation
------------

Load script file `jquery.videosync.js` or `jquery.videosync.min.js` in any place after jQuery script.

    <script src="/path/to/jquery.videosync.js"></script>

Alternatively, you may just copy contents of `jquery.videosync.js` to your code.


Usage
----

**HTML**

* Add `videosync` class to the <video> element: `<video class="videosync" autoplay loop>`
* For elements that you want to show/hide based on video time:
  * Add `videosync` class
  * Add `data-videosync-start` and optionally `data-videosync-end` attributes vith
    values of time in seconds relative to video start.
  `<div class="videosync" data-videosync-start="1" data-videosync-end=15>Hello</div>`

**JS (optional)**

* Instead of adding `videosync` class to video element you can directly call its .videosync() method to make it the source for plugin timing: `$('#my-video').videosync()`
* Depending elements to show/hide are currently only settable through HTML class and data- attributes.

**Animations**

It's pretty easy to animate the way elements appear on the page. For example, get [Animate.css](https://github.com/daneden/animate.css/) and just add appropriate classes to your animated elements, eg

    <div class="videosync animated bounceInRight" data-videosync-start="5">Hello</div>


Compatibility
-------------

**Tested in:**
* Firefox 37
* Chrome 42
* Safari 8

Should generally work in any browser that supports HTML5 video


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
