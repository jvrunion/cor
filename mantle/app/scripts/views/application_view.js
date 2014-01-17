Core.ApplicationView = Ember.View.extend({
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

        L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
            maxZoom: 14,
            minZoom: 09
        }).addTo(map);
    }
});