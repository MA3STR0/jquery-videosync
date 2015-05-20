/*! jQuery VideoSync
 *  https://github.com/MA3STR0/jquery-videosync
 *  Shows or hides page content based on video playback time */
(function($) {
    $.fn.videosync = function() {
        return this.each( function() {
            var video = this;
            var nodes = [];
            var lastTime = -1;
            var time;
              $('.videosync').each(function(){
                  var $this = $(this);
                  nodes.push({
                      start: parseFloat($this.data('videosync-start')),
                      end: parseFloat($this.data('videosync-end')),
                      class: $this.data('videosync-class'),
                      element: $this
                  });
              });
            video.addEventListener('timeupdate', function(){
                time = parseFloat(video.currentTime);
                if (Math.abs(time - lastTime) < 0.1) {
                    return
                }
                lastTime = time;
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];
                    if ((!node.element.hasClass(node.class)) && (time >= node.start) && (node.end ? time < node.end : true)) {
                        node.element.addClass(node.class);
                    } else if ((node.element.hasClass(node.class)) && ((time < node.start) || (node.end ? time >= node.end : false))) {
                        node.element.removeClass(node.class);
                    }
                }
            }, false);
        });
    };
    $('video.videosync-source').videosync();
}(jQuery));
