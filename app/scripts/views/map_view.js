Cor.MapView = Ember.View.extend({
    templateName: 'map',
    didInsertElement: function(window, document) {
        // leaflet config
        // map = L.map('map');
        console.log(map);

        function onLocationFound(e) {
            var radius = e.accuracy / 2;
            L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
            L.circle(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            window.alert(e.message);
        }

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
    }
});