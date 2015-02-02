(function($) {
    $.fn.videosync = function() {
        return this.each( function() {
            var video = this;
            var nodes = [];
            var time = 0;
              $('.videosync').not('video').each(function(){
                  var $this = $(this);
                  $this.hide();
                  nodes.push({
                      start: this.getAttribute('data-videosync-start'),
                      end: this.getAttribute('data-videosync-end'),
                      element: $this,
                      visible: $this.is(':visible')
                  });
              });
            video.addEventListener('timeupdate',function(){
                time = parseInt(video.currentTime);
                for (var i = 0; i < nodes.length; i++) {
                    var node = nodes[i];
                    if ((!node.visible) && (time >= node.start) && (node.end ? time < node.end : true)) {
                        node.element.show();
                        node.visible = true;
                    } else if ((node.visible) && ((time < node.start) || (node.end ? time >= node.end : false))) {
                        node.element.hide();
                        node.visible = false;
                    }
                }
            }, false);
        });
    };
}(jQuery));
