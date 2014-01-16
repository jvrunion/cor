var Core = window.Core = Ember.Application.create();

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');

Core.ApplicationView = Ember.View.extend({
    didInsertElement: function() {
        var panelTip = ('.generated-left-panel');
        this.$(panelTip).tooltip();
    }
});