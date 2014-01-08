Core.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Ember.js', 'Leaflet.js'];
    }
  // model: function() {
  //   return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {
  //     return data.splice(0, 3);
  //   });
  // }    
});
