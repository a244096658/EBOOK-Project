
	var V3 = {} || V3;

	V3.titleBase = document.title;

	V3.addLibrariesTab = function() {

		// var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		// tab.title = 'View available libraries';
		// tab.innerHTML =
		// 	'<a JA.toggleTab(V3.librariesTab); id=librariesTab ><p class=buttonLibrary >' +
		// 		'<span id=libOpen ><i class="fa fa-chevron-down"></i></span> ' +
		// 		'<span id=libClose style=display:none; ><i class="fa fa-chevron-right"></i></span> ' +
		// 		'About' +
		// 	'</p></a>'; 
		// librariesTab.onclick = function() { JA.toggleTab( libOpen ); JA.toggleTab( libClose ); JA.toggleDialogs( V3.librariesTab ); };

		//V3.librariesTab = JA.menu.appendChild( document.createElement( 'div' ) );
		//V3.librariesTab.style.cssText = 'cursor: auto; display: ""; z-index: 10 ' ;
		// V3.librariesTab.innerHTML =
		// 	'<p>' +
		// 		'A work in progress. Much broken. ' +
		// 		'Nonetheless <b><i><a href="http://va3c.github.io/viewer/va3c-viewer-html5/r5/va3c-viewer-r5.html#autocrapdoodle" title="launches the \'autocrapdoodle\' feature">some aspects</a></i></b> worth exploring. ' +
		// 	'</p>' +
		// 	'<p>' +
		// 		'<b><a href="http://va3c.github.io/viewer/va3c-viewer-html5/readme-reader.html" title="lots of good stuff here..." target="_blank">Read Me w/ Features, Issues, Road Map</a></b>' +
		// 	'</p>' +
		// 	'<p>' +
		// 		'Click on a blue tab below to access the Library.<br>Key: [O] = Open in new scene<br>' +
		// 	'</p><p>' +
		// 		'Best to keep the <b><a href="http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers" title="Watch the bugs appear..." target="_blank">JavaScript console</a></b> open.' +
		// 	'</p>' +
		// '';
		// V3.librariesTab.innerHTML = '<p style="color:white">VisualCOBie is an interactive facility data visualization and navigation platform based on Construction Operation Building information exchange (COBie) standard.</p>' +
		// 		'<p style="color:white">COBie data of each facility is interactivly linked with the 3D models as a node-link diagram. Hence, VisualCOBie provides a platform to visualize and navigate multiple datasets in one platform.</p>' +
		// 		'<p style="color:white">The Graph-Based model of COBie dataset allows the user to discover not only a specific data entity, but also its semantic relationships with other data entities.</p>' +
		// 		'<p style="color:white">VisualCOBie is a PhD Research development project of <a style="color:#1abc9c" href="https://people.aalto.fi/index.html#mehmet_yalcinkaya" target="_blank">Mehmet Yalcinkaya</a> supervised by <a style="color:#1abc9c" href="https://people.aalto.fi/index.html#vishal_singh" target="_blank">Vishal Singh</a> </p>';

	};

	V3.addAboutVa3cTab = function() {

		JA.addAboutTab();

		JA.aboutDialog.style.height = '710px';
		JA.aboutDialog.style.width = '800px';
		// JA.aboutDialog.innerHTML =
		// 	'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
		// 		'<p>VisualCOBie is an interactive facility data visualization and navigation platform based on Construction Operation Building information exchange (COBie) standard.</p>' +
		// 		'<p>COBie data of each model is interactive linked with the 3D models as a node-link diagram. Therefore, VisualCOBie provides a platform to visualize and navigate multiple COBie datasets in one platform.</p>' +
		// 		'<p>The Graph-Based model of COBie dataset allows the user to discover not only a specific data entity, but also its semantic relationships with other data entities.</p>' +
		// 		'<p>VisualCOBie is a PhD Research development project by <a href="https://people.aalto.fi/index.html#mehmet_yalcinkaya" target="_blank">Mehmet Yalcinkaya</a> supervised by <a href="https://people.aalto.fi/index.html#vishal_singh" target="_blank">Vishal Singh</a> </p>' +
		// 	'</small><br><br>' +
		// 	'<p style=text-align:right; >' +
		// 		'<a class=button href=JavaScript:JA.toggleDialogs(JA.aboutDialog); >Close</a> ' +
		// 	'</p>' +
		// '';
				JA.aboutDialog.innerHTML =
			//'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
				'<iframe style="width:800px; height:700px" src="http://localhost:8085/graph_model.html"></iframe>'+
			// '<p style=text-align:right; >' +
			// 	//'<a class=button href=JavaScript:JA.toggleDialogs(JA.aboutDialog); >Close</a> ' +
			// '</p>' +
		'';

	};

	V3.addAboutVa3cTab2 = function() {

		JA.addAboutTab2();

		JA.aboutDialog.style.height = '710px';
		JA.aboutDialog.style.width = '800px';

				JA.aboutDialog.innerHTML =
			//'<h3>' + document.title + ' ' + JA.titleIcon + '</h3>' +
				'<iframe style="width:800px; height:700px" src="http://localhost:8085/graph_model.html"></iframe>'+
			// '<p style=text-align:right; >' +
			// 	'<a class=button href=JavaScript:JA.toggleIoT(JA.aboutDialog); >Close</a> ' +
			// '</p>' +
		'';

	};

	V3.init = function () {
//console.log( 'init' );

		if ( !location.hash ) { 

			V3.getSplashScreen();

		} else if ( location.hash.toLowerCase().indexOf('auto') >  0 ){

			if ( location.hash.toLowerCase().indexOf('autocrap') >  0 ){

				V3.getAutoCrapdoodle(); 

			} else {

				V3.loadScript( 'autoScript' + '.js' );

			}

		} else {

			V3.getPermalinkBundles ();

		}

	};

	V3.loadScript = function ( fileName ) {
		var js = document.body.appendChild( document.createElement( 'script' ) );
		js.setAttribute( 'src', fileName );
	};


	V3.getSplashScreen = function () { // Call a Meier parametric equation

// 		var items, item, basepath, fileName;

// 		V3PL.permalinks = [];
// 		V3PL.permalinks.push( V3PL.setDefaults( V3PL.defaultScene ) );

// 		items = [ 1, 11, 12, 14, 33, 42, 54, 58, 62, 131, 151, 155 ];
// 		item = items[ Math.floor( items.length * Math.random() ) ];
// 		basepath = V3MH.basepath + V3MH.files[ item ][ 0 ] + '/';
// 		fileName = V3MH.files[ item ][ 0 ] + '.html';
// 		src = basepath + fileName;
// 		name = V3MH.files[ item ][ 1 ];
// 		V3PL.buildPermalink( src, 1, name );

// //		V3PL.permalinks[ 1 ].mat = 'PhongRandom';
// //		V3PL.permalinks[ 1 ].mat = 'PhongDefault';
// 		V3PL.permalinks[ 1 ].mat = 'NormalSmooth';

// 		V3PL.permalinks[ 1 ].override = true; // see JAFO.updateObject
// 		JAFO.openPermalinks( V3PL.permalinks );
	};

	V3.getAutoCrapdoodle = function () {

		V3PL.getAutoCrapdoodle();
		location.hash = 'autocrapdoodle';

	};

	V3.getPermalinkBundles = function () {

		var hashes, defaults, src, name;
		var items, item, basepath, fileName;

		hashes = decodeURIComponent( location.hash );  // because goo.gl encodes hashes
		hashes = hashes.split('&');

		V3PL.permalinks = [];
		V3PL.permalinks.push( V3PL.setDefaults( V3PL.defaultScene ) );

//console.log( 'getPermalinkBundles', hashes );

		var permalink = V3PL.permalinks[0];
		items = hashes[0].slice(1).split( '#' );
		for (var i = 0, len = items.length; i < len; i++) {
			item = items[i].split( '=' );
			if ( isNaN( item[1] ) ) {
				permalink[ item[0] ] = item[1];
			} else {
				permalink[ item[0] ] = parseFloat( item[1] );
			}
		}

		for ( i = 1; i < hashes.length; i++ ) {
			defaults = V3PL.setDefaults( V3PL.defaultObject );
			items = hashes[i].slice(1).split( '#' );
			for ( var j = 0; j < items.length; j++ ) {
				item = items[j].split( '=' );
				if ( item[0] === 'mat' || item[0] === 'name' || item[0] === 'override' || item[0] === 'src' ) {
					defaults[ item[0] ] = item[1];
				} else {
					defaults[ item[0] ] = parseFloat( item[1] );
				}
			}
			V3PL.permalinks.push( defaults );
		}

//console.log( 'getPermalinkBundles', V3PL.permalinks );
		JAFO.openPermalinks( V3PL.permalinks );

	}
