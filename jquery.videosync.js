$('video').each( function() {
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
          });
      });
    video.addEventListener('timeupdate',function(){
        time = parseInt(video.currentTime);
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if ((time >= node.start) && (node.end ? time < node.end : true)) {
                node.element.show();
            } else if (((time < node.start) || (node.end ? time >= node.end : false))) {
                node.element.hide();
            }
        }
    }, false);
});
