Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n                        <li class="list-group-item">'),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                        "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div>\n    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="slide-nav">\n      <div class="container">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">C<span class="brand-pure">&#213;</span>R</a>\n        </div>\n        <div id="slidemenu">\n           <ul class="nav navbar-nav mega-header affix">\n            <li class="mega-header-item">Launch-Pad <span class="end-of-line">{ Blog }</span></li>\n            <li class="mega-header-item">Architecture <span class="end-of-line">{ UX }</span></li>\n            <li class="mega-header-item">Generators <span class="end-of-line">{ JS }</span></li>\n            <li class="mega-header-item">Maps <span class="end-of-line">{ JS }</span></li>\n            <li class="mega-header-item">Build Tools <span class="end-of-line">{ JS }</span></li>\n            <li class="mega-header-item">Packages <span class="end-of-line">{ JS }</span></li>\n        </ul>  \n    </div>\n</div>\n</div>\n<div class="container-fluid" id="main">\n    <div class="row-fluid no-margin-top">\n        <div class="set-center">\n            <div class="col-md-3 affix">\n                <div class="well"> \n                    <h3>Trends</h3>              \n                    <ul class="list-group">\n                        '),h={},i={},g=c.each.call(b,"item","in","controller",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n                    </ul>\n                </div>      \n            </div>\n            <div class="col-md-9 pull-right">            \n                '),h={},i={},e.buffer.push(k(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push('                                \n            </div>\n        </div>\n    </div>\n</div>\n<div class="row-fluid">\n    <footer>\n        <h1>Where are You?</h1>   \n        <div id="map"></div>   \n        <ul class="mega-footer">\n            <li class="mega-footer-item active">Launch-Pad</li>\n            <li class="mega-footer-item">Architecture</li>\n            <li class="mega-footer-item">Generators</li>\n            <li class="mega-footer-item">Maps</li>\n            <li class="mega-footer-item">Build Tools</li>                \n            <li class="mega-footer-item">Packages</li>  \n        </ul>\n        <div class="comment-container"> \n            <h2 class="view-marker">Join the Discussion</h2>      \n            <div class="disqus-me">\n                <div id="disqus_thread"></div>\n                <script type="text/javascript">\n                        var disqus_shortname = \'freshjs\'; // required: replace example with your forum shortname\n                        /* * * DON\'T EDIT BELOW THIS LINE * * */\n                        (function() {\n                            var dsq = document.createElement(\'script\'); dsq.type = \'text/javascript\'; dsq.async = true;\n                            dsq.src = \'//\' + disqus_shortname + \'.disqus.com/embed.js\';\n                            (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\n                        })();\n                    </script>\n                    <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>\n                    <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>                    \n                </div>\n            </div>        \n        </footer>\n    </div>    \n</div>\n'),j}),Ember.TEMPLATES.carousel=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n	<ol class="carousel-indicators">\n		<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n		<li data-target="#carousel-example-generic" data-slide-to="1"></li>\n		<li data-target="#carousel-example-generic" data-slide-to="2"></li>\n	</ol>\n	<div class="carousel-inner">\n		<div class="item active">\n			<img src="images/html5-code.png" alt="Cor" class="hero-image">\n			<div class="carousel-caption">\n				C<span class="brand-pure">&#213;</span>R is a cure for bad code\n			</div>\n		</div>			\n		<div class="item">\n			<img src="images/flat5.png" alt="HTML5 Logo" class="hero-image">\n			<div class="carousel-caption">\n				HTML5 Rocks All Night Long!\n			</div>\n		</div>\n		<div class="item ">\n			<img src="images/yo.png" alt="HTML5 Logo" class="hero-image">\n			<div class="carousel-caption">\n				Yeoman makes work fun!\n			</div>\n		</div>\n	</div>\n	<a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\n		<span class="glyphicon glyphicon-chevron-left"></span>\n	</a>\n	<a class="right carousel-control" href="#carousel-example-generic" data-slide="next">\n		<span class="glyphicon glyphicon-chevron-right"></span>\n	</a>\n</div>\n'),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="well">\n	<div class="panel">\n		'),f={},g={},e.buffer.push(i(c.view.call(b,"Cor.CarouselView",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('\n		<!-- cor shoutout -->\n		<h2>C<span class="brand-pure">&#213;</span>R is a Responsive Ember Micro Framework</h2>		\n		<div class="alpha-content">\n			<img class="image-content" alt="CSS3 Logo" src="images/cheat-sheet-shout.png">\n		</div>\n		<h2>See what\'s new with HTML5</h2>\n		<section>\n			<hgroup>\n				<h3>Building a great mobile user experience</h3>\n			</hgroup>\n			<p>Creating an experience for a small screen requires different thinking. When done right, the mobile web can be as easy to use.</p>\n			<h3>Things to remember</h3>\n			<ul class="launch-pad-std">\n				<li class="html5-list-item">Use a <a href="/en/mobile/responsivedesign/">mobile-first responsive</a> web design</li>\n				<li class="html5-list-item">Build <a href="/en/mobile/touch/">touch friendly</a> interfaces</li>\n				<li class="html5-list-item">Make it easier for users to fill in <a href="/en/tutorials/forms/html5forms/" class="updateRequired">forms</a>, enter usernames or provide other information</li>\n				<li class="html5-list-item">Use <a href="/en/mobile/high-dpi/">high dpi images</a> for the appropriate devices</li>\n			</ul>\n		</section>\n		<section>\n			<h3>Paul Irish on Devtools</h3>\n			<p>Developing for mobile should be just as easy as it is developing for desktop. We\'ve been working hard in the Chrome DevTools to make things easier for you and it\'s time to unveil some new features that should dramatically improve your mobile web\n				development. First up, remote debugging and then we\'ll unveil proper mobile emulation...<a href="http://www.html5rocks.com/en/tutorials/developertools/mobile/">Paul Irish on Chrome Dev Tools for Mobile (See video)</a>\n			</p>\n		</section>\n		<!-- bootstrap shoutout -->\n		<section>\n			<div class="alpha-content">\n				<img class="image-content" alt="Bootstrap 3 Logo"src="images/bootstrap3.jpg">\n			</div>\n			<div class="bs-docs-section">\n				<h2>Stay up to date on the development of Bootstrap</h2>\n				<ul class="launch-pad-std">\n					<li class="html5-list-item">Read and subscribe to <a href="http://blog.getbootstrap.com/">The Official Bootstrap Blog</a>.</li>\n					<li class="html5-list-item">Have a question that\'s not a feature request or bug report? <a href="http://groups.google.com/group/twitter-bootstrap">Ask on the mailing list.</a>\n					</li>\n					<li class="html5-list-item">Chat with fellow Bootstrappers using IRC in the <code>irc.freenode.net</code> server, in the <a href="irc://irc.freenode.net/#twitter-bootstrap">##twitter-bootstrap channel</a>.</li>\n					<li class="html5-list-item">Find inspiring examples of people building with Bootstrap at the <a href="http://expo.getbootstrap.com">Bootstrap Expo</a>.</li>\n				</ul>\n			</div>\n		</section>\n		<!-- yo shoutout -->\n		<section>\n			<div class="alpha-content">\n				<img class="image-content" alt="Yeoman Logo" src="images/yo.png">\n			</div>\n			<h2>Yeoman is not a library, but a workflow of best practices</h2>\n			<p>\n				Yeoman 1.0 is more than just a tool. It\'s a workflow; a collection of tools and best practices working in harmony to make developing for the web even better.\n			</p>\n			<p>\n				Our workflow is comprised of three tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool) and bower (for package management).\n			</p>\n			<p>\n				Yo scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks that you might need for your build.\n			</p>\n			<h3>Pre-Requisites</h3>\n			<ul class="launch-pad-std">\n				<li class="html5-list-item">You have to have <a href="http://nodejs.org/">NPM</a> installed for Node.js package managment</li>\n				<li class="html5-list-item">You will also need to have <a href="http://www.gruntjs.com">Grunt</a> installed as your task runner</li>\n			</ul>	\n			<h3>Quick Install</h3>				\n			<pre>\n				<span class="classic-git">npm install -g grunt-contrib-compass</span>\n			</pre>\n			<ul class="launch-pad-std">\n				<li class="html5-list-item">Then install Yeoman via npm</li>			\n			</ul>\n			<pre>\n				<span class="classic-git">npm install -g yo</span>\n			</pre>	\n		</section>			\n		<!-- leaflet shoutout -->\n		<div class="alpha-content">\n			<img class="image-content" alt="Leaflet JS" src="images/leaflet-promo.png">\n		</div>\n		<h2>Leaflet.js is used by industry leaders</h2>\n		<ul class="launch-pad-std">\n			<li class="html5-list-item">Magellan</li>\n			<li class="html5-list-item">Motorola</li>		\n			<li class="html5-list-item">OpenMaps</li>		\n		</ul>\n		<p>\n			Leaflet is a modern open-source JavaScript library for mobile-friendly interactive maps. It is developed by Vladimir Agafonkin with a team of dedicated contributors. Weighing just about 33 KB of JS, it has all the features most developers ever need for\n			online maps.\n		</p>\n		<p>\n			Leaflet is designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms out of the box, taking advantage of HTML5 and CSS3 on modern browsers while still being accessible on older ones.\n			It can be extended with a huge amount of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to.\n		</p>\n	</div>\n</div>'),h});