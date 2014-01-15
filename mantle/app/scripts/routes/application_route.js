Core.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function() {
        return ['Front End Matters', 'Modern Browsers', 'Data Visualization', 'Mobile First', 'JS MVC', '(WCAG) 2.0'];
    }
});