Cor.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return [
            '<a href="#matters" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="All About The Front End">Front End Matters</a>',
            '<a href="#browsers" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="What Is All This Modern Browser Talk About?">Modern Browsers</a>',
            '<a href="#data" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Infographics And Charts Have Taken Over!">Data Visualization</a>',
            '<a href="#mobile" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="You Mean There Is Another Device Out There Besides My iPad?">Mobile First Design</a>',
            '<a href="#mvc" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Backend...You Sir Have Met Your Match!">Front End MVC</a>',
            '<a href="#wcag" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Standards Are What Seperate The Successfull From The Failures">(WCAG) 2.0</a>'
        ];
    }
});