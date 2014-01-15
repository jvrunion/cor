Cor.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return [
            '<a href="#" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="All about The Front End">Front End Matters</a>',
            '<a href="#matters" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="What is all the fuss about?">Modern Browsers</a>',
            '<a href="#data" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Info-Graphs and Charts have taken over!">Data Visualization</a>',
            '<a href="#mobile" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="You mean there are other devices besides my iPad?">Mobile First</a>',
            '<a href="#mvc" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Backend you have met your match!">JS MVC</a>',
            '<a href="#wcag" class="generated-left-panel" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Standards are what seperate success and failure">(WCAG) 2.0</a>'
        ];
    }
});