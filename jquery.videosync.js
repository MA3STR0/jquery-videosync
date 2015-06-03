/*! jQuery VideoSync
 *  https://github.com/MA3STR0/jquery-videosync
 *  Manipulates page content based on video playback time */
/*global document, jQuery*/

(function ($) {
    'use strict';
    $.fn.videosync = function () {
        return this.each(function () {
            var classIn = 'vs-in',
                classOut = 'vs-out',
                video = this,
                nodes = [],
                lastTime = -1,
                time;
            $('.vs').each(function () {
                var $this = $(this);
                nodes.push({
                    start: parseFloat($this.data('vs-in-time')),
                    end: parseFloat($this.data('vs-out-time')),
                    classIn: $this.data('vs-in-class'),
                    classOut: $this.data('vs-out-class'),
                    element: $this
                });
            });
            video.addEventListener('timeupdate', function () {
                var node, i;
                time = parseFloat(video.currentTime);
                if (Math.abs(time - lastTime) < 0.1) {
                    return;
                }
                lastTime = time;
                for (i = 0; i < nodes.length; i += 1) {
                    node = nodes[i];
                    if ((!node.element.hasClass(classIn)) && (time >= node.start) && (node.end ? time < node.end : true)) {
                        node.element.removeClass(classOut);
                        node.element.removeClass(node.classOut);
                        node.element.addClass(node.classIn);
                        node.element.addClass(classIn);
                    } else if ((node.element.hasClass(classIn)) && ((time < node.start) || (node.end ? time >= node.end : false))) {
                        node.element.removeClass(node.classIn);
                        node.element.removeClass(classIn);
                        node.element.addClass(classOut);
                        node.element.addClass(node.classOut);
                    }
                }
            }, false);
        });
    };
    $(document).ready(function () {
        $('video.vs-source').videosync();
    });
}(jQuery));
