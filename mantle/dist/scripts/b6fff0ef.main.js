!function(){window.Core=Ember.Application.create()}(),function(){Core.Store=DS.Store.extend(),Core.ApplicationAdapter=DS.FixtureAdapter}(),function(){Core.ApplicationRoute=Ember.Route.extend({model:function(){return['<a href="#" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="All About The Front End">Front End Matters</a>','<a href="#matters" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="What Is All This Modern Browser Talk About?">Modern Browsers</a>','<a href="#data" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Infographics And Charts Have Taken Over!">Big Data Visualization</a>','<a href="#mobile" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="You Mean There Is Another Device Out There Besides My iPad?">Mobile First Design</a>','<a href="#mvc" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Backend...You Sir Have Met Your Match!">Front End MVC</a>','<a href="#wcag" class="generated-left-panel" data-toggle="tooltip" data-placement="right" title="" data-original-title="Standards Are What Seperate The Successfull From The Failures">(WCAG) 2.0</a>']}})}(),function(){Core.ApplicationView=Ember.View.extend({didInsertElement:function(a){function b(a){var b=a.accuracy/2;L.marker(a.latlng).addTo(f).bindPopup("You are within "+b+" meters from this point").openPopup(),L.circle(a.latlng,b).addTo(f)}function c(b){a.alert(b.message)}var d=".generated-left-panel";jQuery(d).tooltip();var e="footer";jQuery(e).onScreen({doIn:function(){jQuery(".col-md-3").removeClass("affix")},doOut:function(){jQuery(".col-md-3").addClass("affix")}});var f=L.map("map");f.locate({setView:!0,maxZoom:11}),f.on("locationfound",b),f.on("locationerror",c),L.tileLayer("http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png",{maxZoom:14,minZoom:9}).addTo(f)}})}(),function(){window.L.Icon.Default.imagePath="images",Core.IndexView=Ember.View.extend({didInsertElement:function(){}}),Core.ExperienceView=Ember.View.extend({didInsertElement:function(){}}),Core.AppsView=Ember.View.extend({didInsertElement:function(){}}),Core.InteractiveView=Ember.View.extend({didInsertElement:function(){}}),Core.BuildView=Ember.View.extend({didInsertElement:function(){}}),Core.PackageView=Ember.View.extend({didInsertElement:function(){}})}();