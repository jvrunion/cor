Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n                    <li class="list-group-item">'),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">C<span class="brand-pure">&#213;</span>R UI</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n            <ul class="mega-header">\n                <li class="mega-header-item">Mega</li>\n                <li class="mega-header-item">Menu</li>\n                <li class="mega-header-item active">System</li>\n                <li class="mega-header-item">For</li>\n                <li class="mega-header-item">Site</li>\n                <li class="mega-header-item">Navigation</li>\n            </ul>        \n        </div>\n    </nav>\n    <div class="container-fluid" id="main">\n        <div class="row-fluid">\n            <div class="set-center">\n                <div class="col-md-12">            \n                    '),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('                                    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="row-fluid">\n        <footer>\n            <div id="map"></div>           \n            <ul class="mega-footer">\n                <li class="mega-footer-item">Mega</li>\n                <li class="mega-footer-item">Menu</li>\n                <li class="mega-footer-item">System</li>\n                <li class="mega-footer-item">For</li>\n                <li class="mega-footer-item">Site</li>\n                <li class="mega-footer-item">Navigation</li>\n            </ul>\n            <div class="comment-container">       \n                <div class="disqus-me">\n                    <div id="disqus_thread"></div>\n                    <script type="text/javascript">\n                        var disqus_shortname = \'freshjs\'; // required: replace example with your forum shortname\n                        /* * * DON\'T EDIT BELOW THIS LINE * * */\n                        (function() {\n                            var dsq = document.createElement(\'script\'); dsq.type = \'text/javascript\'; dsq.async = true;\n                            dsq.src = \'//\' + disqus_shortname + \'.disqus.com/embed.js\';\n                            (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\n                        })();\n                    </script>\n                    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n                    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>                    \n                </div>\n            </div>\n            <div class="well">               \n                <ul class="list-group">\n                '),h={},i={},g=c.each.call(b,"item","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n                </ul>\n            </div>              \n        </footer>\n    </div>    \n</div>\n<script type=\"text/javascript\">\n    \n    var map = L.map('map');\n\n    map.locate({setView: true, maxZoom: 12});\n\n    function onLocationFound(e) {\n        var radius = e.accuracy / 2;\n        L.marker(e.latlng).addTo(map)\n            .bindPopup(\"You are within \" + radius + \" meters from this point\").openPopup();\n        L.circle(e.latlng, radius).addTo(map);\n    }\n\n    function onLocationError(e) {\n        alert(e.message);\n    }\n\n    map.on('locationfound', onLocationFound);  \n    map.on('locationerror', onLocationError);            \n\n    L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {\n       maxZoom: 12,\n       minZoom: 12\n    }).addTo(map);\n\n</script>"),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n     <div class="panel">     \n          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n            <ol class="carousel-indicators">\n              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n              <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n              <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n            </ol>\n            <div class="carousel-inner">\n              <div class="item active">\n                <img src="images/HTML5_sticker.png" class="hero-image">\n                <div class="carousel-caption">\n                    HTML5 makes things simple!                  \n                </div>\n              </div>\n              <div class="item">\n                <img src="images/HTML5_sticker.png" class="hero-image">\n                <div class="carousel-caption">\n                    HTML5 makes things simple!                  \n                </div>\n              </div>\n              <div class="item ">\n                <img src="images/HTML5_sticker.png" class="hero-image">\n                <div class="carousel-caption">\n                    HTML5 makes things simple!                  \n                </div>\n              </div>                            \n            </div>\n            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\n              <span class="glyphicon glyphicon-chevron-left"></span>\n            </a>\n            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">\n              <span class="glyphicon glyphicon-chevron-right"></span>\n            </a>\n          </div>     \n     	<h2>Responsive Micro Site Template</h2>\n          <div class="alpha-content">\n		   <img class="image-content" src="images/html5_and_css3_logos_1.png">\n          </div>\n     	<div class="panel-blurb">\n     		<span class="blurb-content">CSS3...HTML5\'s best freind</span>\n     	</div>	     	\n     	<p>The beauty of working with a full life cycle product template is in it\'s distibtuion and testing.  C<span class="brand-pure">&#213;</span>R UI uses Grunt, Mocha and JSLint to give you all you need to see a concept through from inital planning phase to the delivery and project completion.</p>\n     	<h2>Built on Boostrap 3 so it\'s stable and modern</h2>\n          <div class="alpha-content">\n             <img class="image-content" src="images/bootstrap3.png">\n          </div>\n     	<div class="panel-blurb">\n     		<span class="blurb-content">Easy to understand Markup that makes sense...imagine that</span>\n     	</div>	     	\n     	<p>Originally created by a designer and a developer at Twitter, Bootstrap has become one of the most popular front-end frameworks and open source projects in the world.</p>  \n     	<h2>Leverages Yeoman, Grunt and Bower for package managment</h2>\n          <div class="alpha-content">\n             <img class="image-content" src="images/yo-bundle.png">\n          </div>\n     	<div class="panel-blurb">\n     		<span class="blurb-content">Yeo-Man! Make me a website son!</span>\n     	</div>	     	\n          <p>\n              Yeoman 1.0 is more than just a tool. It\'s a workflow; a collection of tools and best practices working in harmony to make developing for the web even better.\n          </p>\n          <p>\n              Our workflow is comprised of three tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool) and bower (for package management).\n          </p>\n          <p>\n              Yo scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks that you might need for your build.\n          </p>\n     </div>\n</div>')});