var Core = window.Core = Ember.Application.create();

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('bower_components/jquery/jquery.js');
require('bower_components/leaflet-dist/leaflet.js');

window.L.Icon.Default.imagePath = 'images';

Core.IndexView = Ember.View.extend({
    didInsertElement: function() {

    }
});

Core.ExperienceView = Ember.View.extend({
    didInsertElement: function() {

    }
});

Core.AppsView = Ember.View.extend({
    didInsertElement: function() {

    }
});

Core.InteractiveView = Ember.View.extend({
    didInsertElement: function() {

    }
});

Core.BuildView = Ember.View.extend({
    didInsertElement: function() {

    }
});

Core.PackageView = Ember.View.extend({
    didInsertElement: function() {

    }
});