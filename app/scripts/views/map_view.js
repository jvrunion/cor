Cor.MapView = Ember.View.extend({
    templateName: 'map',
    didInsertElement: function(window, document) {
        // leaflet config
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

        function onLocationError(e) {
            window.alert(e.message);
        }
        map.on('locationfound', onLocationFound);
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
            }),
            streets = L.tileLayer(cloudmadeUrl, {
                styleId: 977
            });

        var baseMaps = {
            "Minimal": minimal,
            "Night View": midnight,
            "Streets": streets
        };
        var overlayMaps = {
            "Motorways": motorways
        };

        var fullScreen = new L.Control.FullScreen();

        L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
            updateWhenIdle: true,
            touchZoom: false
        }).addTo(map);
        L.control.layers(baseMaps, overlayMaps).addTo(map);

        map.touchZoom.disable();
        map.scrollWheelZoom.disable();
        map.addControl(fullScreen);
    }
});