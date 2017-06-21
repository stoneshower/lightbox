(function($){
    'use strict';
    var Lightbox = function(){
        this.el = undefined;
        this.window = undefined;
        this.getElements();
        this.setEvents();
        this.$document = undefined;
    }
    Lightbox.prototype = {
        getElements: function(){
            this.$elTarget = $('#lightboxContainer');
            this.$elOverlay = this.$elTarget.find('.lightboxOverlay');
            this.$elClose = this.$elTarget.find('.lightBoxClose');
            this.$elLoadingImg = this.$elTarget.find('.lightboxLoading');
            this.$el = $('.lightboxThumb');
            this.$body = $('body');
            this.$document = $(document);
        },
        setEvents: function(){
            this.$el.on('click', {that:this}, this.init);
            this.$elOverlay.on('touchend', {that:this}, this.closeLightbox);
            this.$elClose.on('click touchend', {that:this}, this.closeLightbox);
            this.$document.on('keyup', {that:this}, this.closeLightbox);
        },
        init: function(e){
            var that = e.data.that;
            var lightBoxSrc = $(this).attr('data-src');
            that.$elLoadingImg.fadeIn();
            that.$elTarget.show();
            that.$elTarget.find('.lightboxImg').attr('src', lightBoxSrc);
            that.$elTarget.find('.lightboxImg').on('load', function(){
                that.$elLoadingImg.fadeOut();
            });
        },
        closeLightbox: function(e){
            var that = e.data.that;
            e.stopPropagation();
            if(e.keyCode == 27){
                that.$elTarget.hide();    
            }
            that.$elTarget.hide();
        }
    }
    var lightbox = new Lightbox();
})(jQuery);