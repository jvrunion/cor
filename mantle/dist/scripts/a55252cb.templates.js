Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n                            <li class="list-group-item">'),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                        "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">C<span class="brand-pure">O</span>RE<span class="brand-pure">U</span>I</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n            <ul class="mega-header">\n                <li class="mega-header-item">Mega</li>\n                <li class="mega-header-item">Menu</li>\n                <li class="mega-header-item">System</li>\n                <li class="mega-header-item">For</li>\n                <li class="mega-header-item">Site</li>\n                <li class="mega-header-item">Navigation</li>                \n            </ul>        \n        </div>\n    </nav>\n    <div class="container-fluid" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-3">\n                    <div class="well sidebar-nav">\n                        <strong class="routes-group">C<span class="brand-pure">O</span>REUI</strong>\n                        <ul class="list-group">\n                        '),h={},i={},g=c.each.call(b,"item","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-8">\n                    '),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('\n                </div>\n            </div>\n        </div>\n        <div class="row-fluid">\n        <footer>\n            <ul class="mega-footer">\n                <li class="mega-footer-item">Mega</li>\n                <li class="mega-footer-item">Menu</li>\n                <li class="mega-footer-item">System</li>\n                <li class="mega-footer-item">For</li>\n                <li class="mega-footer-item">Site</li>\n                <li class="mega-footer-item">Navigation</li>\n            </ul>\n            <div class="comment-container">\n                <div class="disqus-me">\n                    <div id="disqus_thread"></div>\n                    <script type="text/javascript">\n                        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */\n                        var disqus_shortname = \'freshjs\'; // required: replace example with your forum shortname\n\n                        /* * * DON\'T EDIT BELOW THIS LINE * * */\n                        (function() {\n                            var dsq = document.createElement(\'script\'); dsq.type = \'text/javascript\'; dsq.async = true;\n                            dsq.src = \'//\' + disqus_shortname + \'.disqus.com/embed.js\';\n                            (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\n                        })();\n                    </script>\n                    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n                    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>                    \n                </div>\n            </div>\n        </footer>\n        </div>\n    </div>\n</div>\n'),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n     <div class="panel">\n		<h1 class="content-brand" href="#">C<span class="brand-pure">O</span>REUI</h1>	\n     	<h2>Responsive Micro Site Template</h2>\n		<img src="images/green-led.jpg">\n     	<div class="panel-blurb">\n     		<span class="blurb-content">Full width images that scale when re-sized</span>\n     	</div>	     	\n     	<p>The beauty of working with a full life cycle product template is in it\'s distibtuion and testing.  CORE UI uses Grunt, Mocha and JSLint to give you all you need to see a concept through from inital planning phase to the delivery and project completion.</p>     	\n     	<h2>Built on Boostrap 3 so it\'s stable and modern</h2>\n		<img class="escalator" src="images/escalator-led.jpg">\n     	<div class="panel-blurb">\n     		<span class="blurb-content">Easy to understand Markup that makes sense...imagine that</span>\n     	</div>	     	\n     	<p>Our high quality LED lights have proven led chips, natural color, and they are ready to improve everything their light touches.</p>  \n     	<h2>Leverages Yeoman, Grunt and Bower for package managment</h2>\n		<img class="escalator" src="images/led-shower.jpg">\n     	<div class="panel-blurb">\n     		<span class="blurb-content">Yo! Make me a website...</span>\n     	</div>	     	\n     	<p>When you use a LED lighting system, it will give off colors that appear warmer and brighter, makes text easier to read, and your eyes less strained. While your energy costs are reduced up to 50%.</p>        	   	\n     </div>\n</div>\n\n')});