Cor.ApplicationView = Ember.View.extend({
    didInsertElement: function(window, document) {
        var panelTip = ('.generated-left-panel');
        jQuery(panelTip).tooltip();

        var line = ('footer');
        jQuery(line).onScreen({
            doIn: function() {
                jQuery('.col-md-3').removeClass('affix');
            },
            doOut: function() {
                jQuery('.col-md-3').addClass('affix');
            }
        });

        var map = L.map('map');
        map.locate({
            setView: true,
            maxZoom: 11
        });

        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
            L.circle(e.latlng, radius).addTo(map);
        }

        map.on('locationfound', onLocationFound);

        function onLocationError(e) {
            window.alert(e.message);
        }

        map.on('locationerror', onLocationError);

        var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/{styleId}/256/{z}/{x}/{y}.png';

        var minimal = L.tileLayer(cloudmadeUrl, {
            styleId: 22677
        }),
            midnight = L.tileLayer(cloudmadeUrl, {
                styleId: 999
            }),
            motorways = L.tileLayer(cloudmadeUrl, {
                styleId: 46561
            });

        var baseMaps = {
            "Minimal": minimal,
            "Night View": midnight
        };

        var overlayMaps = {
            "Motorways": motorways
        };

        L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
            maxZoom: 14,
            minZoom: 09,
            layers: [minimal, motorways]
        }).addTo(map);

        L.control.layers(baseMaps, overlayMaps).addTo(map);

        // settings for responsive left panel
        jQuery('#slide-nav.navbar .container').append(jQuery('<div id="navbar-height-col"></div>'));
        var toggler = '.navbar-toggle';
        var pagewrapper = '#main';
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