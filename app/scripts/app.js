var Cor = window.Cor = Ember.Application.create();

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('bower_components/jquery/jquery.js');
require('bower_components/leaflet-dist/leaflet.js');

window.L.Icon.Default.imagePath = 'images';