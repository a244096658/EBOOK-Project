	var JA = {} || JA;

	//JA.titleIcon = '<i class="fa fa-share-alt"></i>';  // ultimately should be something created on the fly
	JA.TitleText1 = '<img src="img/logo.png" style="width:200px;height:150px; align:left; margin:0px; padding-left:0px"';
	JA.TitleText2 = 'FacilityManagement';

// Parent window GUI
	JA.addCSS = function () {

		var css = document.body.appendChild( document.createElement('style') );
		css.innerHTML = 'body { font: 600 12pt monospace; margin: 0; position:fixed; float:right; overflow: hidden; z-index: 1; }' +
			'h4 { margin: 0; }' +
			'a { opacity: 1; text-decoration: none; font-size: 10pt; color:#FF5733;z-index: 1 }' +
			'p { opacity: 1; text-decoration: none; font-size: 10pt; color:#FF5733;z-index: 1 }' +
			'#closerIcon p { margin: 0; opacity: 0.8; color:#1abc9c;z-index: 1}' +
			'#movable { background-color: #222222; opacity: 0.7	; cursor: auto;' +
				'height: ' + window.innerHeight + 'px; width: 220px;' +
				'overflow-x: hidden; overflow-y: auto; padding: 10px; position: fixed; top: 0px; z-index: 1; }' +
			'.button { opacity:1; background-color: #222; outline: 1px #FF5733 solid; padding: 10px; z-index: 10; }' +
			'.buttonFile {opacity:1; background-color: #222; cursor: pointer; outline: 1px #FF5733 solid; padding: 10px; z-index: 10; }' +
			'.buttonLibrary {opacity:1; background-color: #222; cursor: pointer; outline: 1px #FF5733 solid; padding: 10px; z-index: 10; }' +
		'';
	};

	JA.addMenu = function () {

		JA.menu = JA.container.appendChild( document.createElement( 'div' ) );
		JA.menu.id = 'movable';
		JA.menu.style.cssText = 'z-index:1;'
		JA.menu.title = 'Move the menu around or click here to close the menu';
		//JA.menu.addEventListener( 'mousedown', JA.mouseMove, false );
		JA.menu.innerHTML = '<a id=closerIcon href=JavaScript:JA.toggleMenu(); ><p><i class="fa fa-bars"></i></p></a>' +
			'<p>' +
				'<a href="" title=' + JA.TitleText2 + '>' + JA.TitleText1 + '' + JA.TitleText1 + '</a> ' +
			'</p>' +
			'<hr>' +
		'';

		
		window.addEventListener( 'mouseup', JA.mouseUp, false);

	};


// template
	JA.addAboutTab = function () {

		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Visualize Node-Link Form of Data';
		tab.style.cssText = 'z-index:10';
		tab.innerHTML =
			'<a style= "z-index:10" href=# onclick=JA.toggleDialogs(JA.aboutDialog); ><p style= "z-index:10" class=button >' +
				'<i class="fa fa-share-alt"></i> Visualize Data...' +
			'</p></a>';

		JA.aboutDialog = JA.container.appendChild( document.createElement( 'div' ) );
		// Node-link diagramina ait arka plan rengini buradan degistir
		JA.aboutDialog.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; z-index:10; ';
		JA.aboutDialog.innerHTML =
			'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
			'<p>This is all just template text. Replace with your own text.</p>' +
			'<h4>Features of the app include the following:</h4>' +
			'<ul>' +
				'<li>Pan, rotate and zoom in real-time</li>' +
				'<li>xxx</li>' +
			'</ul>' +

			'<small>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Read Me ~</a> ' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source Code ~ </a> ' +
				'Credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
				'copyright &copy; 2014 Jaanga authors ~ MIT license' +
			'</small><br><br>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleDialogs(JA.aboutDialog); >Close</a> ' +
			'</p>' +
		'';

	};

	JA.addAboutTab2 = function () {

		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.title = 'Visualize Node-Link Form of Data';
		tab.innerHTML =
			'<a href=# onclick=JA.toggleDialogs(JA.aboutDialog); ><p class=button >' +
				'<i class="fa fa-external-link"></i> IoT Sensor Data' +
			'</p></a>';

		JA.aboutDialog = JA.container.appendChild( document.createElement( 'div' ) );
		// Node-link diagramina ait arka plan rengini buradan degistir
		JA.aboutDialog.style.cssText = 'display: none; background-color: #ccc; left: 50px; opacity: 0.9; padding: 20px; ' +
			'bottom: 0; left: 0; height: 370px; margin: auto; position: absolute; right: 0; top: 0; width: 500px; z-index:10; ';
		JA.aboutDialog.innerHTML =
			'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
			'<p>This is all just template text. Replace with your own text.</p>' +
			'<h4>Features of the app include the following:</h4>' +
			'<ul>' +
				'<li>Pan, rotate and zoom in real-time</li>' +
				'<li>xxx</li>' +
			'</ul>' +

			'<small>' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Read Me ~</a> ' +
				'<a href="https://github.com/jaanga/xxxxxxxxxxxxxx" target="_blank">Source Code ~ </a> ' +
				'Credits: <a href="http://threejs.org" target="_blank">three.js</a> - ' +
				'<a href="http://khronos.org/webgl/" target="_blank">webgl</a> - ' +
				'<a href="http://jaanga.github.io" target="_blank">jaanga</a><br>' +
				'copyright &copy; 2014 Jaanga authors ~ MIT license' +
			'</small><br><br>' +
			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleIoT(JA.aboutDialog); >Close</a> ' +
			'</p>' +
		'';

	};

	JA.addMessageArea = function () {

		JA.msg = JA.menu.appendChild( document.createElement( 'div' ) );
		JA.msg.style.cssText = 'cursor: auto;';
		JA.msg.innerHTML =
			'<div id=divMsg1 ></div>' +
			'<div id=divMsg2 ></div>' +
			'<div id=divMsg3 ></div>' +
			'<div id=divMsg4 ></div>' +
			'<div id=divMsg5 ></div>' +
		'';

	};

// Toggles

	JA.toggleMenu = function () {

		var toggle = JA.menu.children[1].style.display === 'none' ? '' : 'none';
		for (var i = 1; i < JA.menu.children.length; i++) {
			JA.menu.children[i].style.display = toggle;
		}

	};

	JA.toggleTab = function ( tab ) {

		tab.style.display = tab.style.display === 'none' ? '' : 'none' ;

	};

	JA.toggleDialogs = function ( dialog ) {

		var toggle = dialog.style.display;
		for (var i = 1, len = JA.container.children.length; i < len; i++) {
			JA.container.children[i].style.display = 'none';
		}
		dialog.style.display = toggle === 'none' ? '' : 'none';

	};

//Events

	JA.mouseUp = function () {

		window.removeEventListener('mousemove', JA.divMove, true);

	};

	JA.mouseMove = function( event ){

		if ( event.target.id === 'movable' ) {
			event.preventDefault();

			offsetX = event.clientX - event.target.offsetLeft;
			offsetY = event.clientY - event.target.offsetTop;

			window.addEventListener('mousemove', JA.divMove, false);
		}

	};

	JA.divMove = function( event ){

		event.target.style.left = ( event.clientX - offsetX ) + 'px';
		event.target.style.top = ( event.clientY - offsetY ) + 'px';

	};
