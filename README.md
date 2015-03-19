jQuery-VideoSync
================

###Tiny jQuery plugin (<1KB minimized) that shows or hides page content based on video playback timer

Installation
------------

Load script file `jquery.videosync.js` or `jquery.videosync.min.js` in any place after jQuery script.

    <script src="/path/to/jquery.videosync.js"></script>

Alternatively, you may just copy contents of `jquery.videosync.js` to your code.


Usage
----

**Without customJS**

* Add `videosync` class to the <video> element: `<video class="videosync" autoplay loop>`
* For elements that you want to show/hide based on video time:
  * Add `videosync` class
  * Add `data-videosync-start` and optionally `data-videosync-end` attributes vith
    values of time in seconds relative to video start.
  `<div class="videosync" data-videosync-start="1" data-videosync-end=15>Hello</div>`

**Or with JS**

* Instead of adding `videosync` class to video element you can directly call its .videosync() method to make it the source for plugin timing: `$('#my-video').videosync()`
* Depending elements to show/hide are currently only settable through HTML class and data- attributes.


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
