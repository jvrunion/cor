Cor.ApplicationView = Ember.View.extend({
    didInsertElement: function(window, document) {
        var panelTip = ('.generated-left-panel');
        jQuery(panelTip).tooltip();
        // scrolling panel config
        var line = ('footer');
        jQuery(line).onScreen({
            doIn: function() {
                jQuery('.col-md-3').removeClass('affix');
            },
            doOut: function() {
                jQuery('.col-md-3').addClass('affix');
            }
        });

        // responsive left panel config
        jQuery('#slide-nav.navbar .container').append(jQuery('<div id="navbar-height-col"></div>'));
        var toggler = '.navbar-toggle';
        var pagewrapper = '.ember-super-wrapper';
        var navigationwrapper = '.navbar-header';
        var menuwidth = '100%';
        var slidewidth = '40%';
        var menuneg = '-100%';
        var slideneg = '-80%';

        jQuery("#slide-nav").on("click", toggler, function(e) {
            var selected = jQuery(this).hasClass('slide-active');
            jQuery('#slidemenu').stop().animate({
                left: selected ? menuneg : '0px'
            });

            jQuery('#navbar-height-col').stop().animate({
                left: selected ? slideneg : '0px'
            });

            jQuery(pagewrapper).stop().animate({
                left: selected ? '0px' : slidewidth
            });

            jQuery(navigationwrapper).stop().animate({
                left: selected ? '0px' : slidewidth
            });

            jQuery(this).toggleClass('slide-active', !selected);
            jQuery('#slidemenu').toggleClass('slide-active');
            jQuery('#main, .navbar, body, .navbar-header').toggleClass('slide-active');
        });

        var selected = '#slidemenu, #main, body, .navbar, .navbar-header';
        jQuery(window).on("resize", function() {
            if (jQuery(window).width() > 767 && jQuery('.navbar-toggle').is(':hidden')) {
                jQuery(selected).removeClass('slide-active');
            }
        });
    }
});