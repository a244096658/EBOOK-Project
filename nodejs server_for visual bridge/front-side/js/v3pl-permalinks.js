	var V3PL = [] || V3PL;

// defaults & values all lower case to make editing the URL by hand easier
	V3PL.defaultScene = {
		camx: 100,
		camy: 100,
		camz: 100,
		tarx: 0,
		tary: 0,
		tarz: 0,
		name: ''
	};

	V3PL.defaultObject = {
		posx: 0,
		posy: 0,
		posz: 0,
		rotx: 0,
		roty: 0,
		rotz: 0,
		sclx: 1,
		scly: 1,
		sclz: 1,
		scl: 1,

		mat: 'PhongRandom',
		name: 'vA3C',
		src: 'template-basic.html'
	};

	V3PL.addPermalinksTab = function () {

		var tab = JA.menu.appendChild( document.createElement( 'div' ) );
		tab.innerHTML =
			'<a id=tabPermalinks title="Save and re-open the current scene using URLs" ><p class=buttonFile >' +
				'<i class="fa fa-external-link"></i> IoT Sensor Data ' +
			'</p></a>';
		tabPermalinks.onclick = function() { V3PL.updatePermalinksTab(); JA.toggleTab( V3PL.permalinksTab ); };

		V3PL.permalinksTab = tab.appendChild( document.createElement( 'div' ) );
		V3PL.permalinksTab.style.cssText = 'cursor: auto; display: none; ' ;

	};

	V3PL.updatePermalinksTab = function () {

		var fileList = '<br>';
		var file, boilerplate, fname;
		for ( var i = 0, len = V3PL.files.length; i < len; i++ ) {
			file = V3PL.files[ i ];

			if ( file[0] === 'Title' ) {
				fileList += '<h3 style=margin-bottom:0; >' + file[1] + '</h3>' +
				'<p><small>Click link below then reload web page</small></p>';
			} else {

				title = 
				scale = file[1];
				title = file[2] ? file[2] : '';

				fileList += 
				'<a href="' + file[0] + '" title="' + title + '" >' + title + '</a><br>' ;
//				'<a href=JavaScript:' +
//				'JAFO.appendUrl("' + file[0] + '",' + scale + '); title="' + title + '" >' + file[0].substr( 1 + file[0].lastIndexOf( '/' ) ) + '</a><br>';
			}

		}

		var txt =
		'<div>' +

			'<p><small><i><a href="http://en.wikipedia.org/wiki/Permalink" target="_blank">Permalinks</a> ' +
			'enable you to save a scene you have created and send it as a link you can share...</i></small></p>' +

			'<details><summary>Notes</summary>Not yet creating permalinks to binary files.</details>' +

			'<p><a href=JavaScript:V3PL.createPermalinks(); title="Send current scene parameters to the address bar" >Create Permalinks</a></p>' +

			'<p><a href=JavaScript:V3.init(); title="Read data from the address bar and display the results" >Parse Permalinks</a></p>' +

			'<p><a href=JavaScript:location.hash="autocrapdoodle";V3.init(); title="Each reload brings randomly generated data files" >Generate AUTOcrapdoodle</a></p>' +

			'<p><a href=JavaScript:V3PL.clearPermalink(); title="Reset address bar to the default URL" >Clear Permalink</a></p>' +

			'<p><a href="http://goo.gl/" target="_blank">Google URL Shortener</a></p>' +

			'<div >' + fileList + '</div>' +

			'<p style=text-align:right; >' +
				'<a class=button href=JavaScript:JA.toggleTab(V3PL.permalinksTab); >Close</a> ' +
			'</p>' +

		'</div>';

		V3PL.permalinksTab.innerHTML = txt;

	};

	V3PL.files = [

		[ 'Title','Permalink Samples'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=56#camy=23#camz=61#tarx=-14#tary=-5#tarz=-66#name=Robie House + Wright Flyer&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/robie-house/untitled/robie-house.js#mat=PhongRandom#name=robie-house.js#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=50#scly=50#sclz=50&#src=http://va3c.github.io/fgx-aircraft/data/wrightFlyer1903/WrightFlyer-pb-jw.js#mat=PhongRandom#name=WrightFlyer-pb-jw.js#override=true#posx=17#posy=20#posz=5#rotx=0.1#roty=3.14#rotz=0.1#sclx=3#scly=3#sclz=3', 1, 'Robie House + Wright Flyer'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=83#camy=109#camz=230#tarx=-6#tary=72#tarz=18#name=Template - Basic&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/schroder-house/untitled/schroder-house.js#mat=PhongRandom#name=schroder-house.js#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=10#scly=10#sclz=10&#src=http://va3c.github.io/fgx-aircraft/data/fkdr1/dr1.js#mat=PhongRandom#name=dr1.js#override=true#posx=46#posy=130#posz=0#rotx=0.4985#roty=1.9985#rotz=-0.0015#sclx=10#scly=15#sclz=15', 1, 'Schroder House + Fokker DR3'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=2097#camy=697#camz=-852#tarx=61#tary=143#tarz=-321#name=Template - Basic&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/villa-savoye/models/villa-savoye.dae#mat=PhongRandom#name=villa-savoye.dae#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/fgx-aircraft/data/Bugatti/bugatti.js#mat=PhongRandom#name=bugatti.js#override=true#posx=550#posy=500#posz=-800#rotx=-0.0015#roty=1#rotz=-0.0015#sclx=100#scly=100#sclz=100', 1, 'Villa Savoie + Bugatti'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=-888#camy=985#camz=2338#tarx=100#tary=100#tarz=-99#name=Template - Basic&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/barcelona-pavilion/barcelona-pavilion.dae#mat=PhongRandom#name=barcelona-pavilion.dae#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/fgx-aircraft/data/BV-170/bv170.js#mat=PhongRandom#name=bv170.js#override=true#posx=1000#posy=800#posz=-200#rotx=0#roty=0.3#rotz=0.3#sclx=50#scly=50#sclz=50', 1, 'Barcelona Pavilion + BV-170'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=2629#camy=451#camz=-97#tarx=664#tary=296#tarz=-100#name=Template - Basic&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/glass-house/glass-house.dae#mat=PhongRandom#name=glass-house.dae#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/fgx-aircraft/data/Lockheed1049/Lockheed1049.js#mat=PhongRandom#name=Lockheed1049.js#override=true#posx=0#posy=800#posz=-100#rotx=0#roty=0#rotz=0#sclx=30#scly=30#sclz=30', 1, 'Glass House + Lockheed 1049'],

		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=101#camy=133#camz=538#tarx=5#tary=0#tarz=0#name=Klein Bottle *&#src=http://va3c.github.io/algesurf/parametric-equations/equation-files/klein-bottle/klein-bottle.html#mat=PhongRandom#name=klein-bottle.html#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/3d-warehouse-samples/schroder-house/untitled/schroder-house.js#mat=PhongRandom#name=schroder-house.js#posx=150#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=10#scly=10#sclz=10',1,'trefoil + schroder'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=398#camy=398#camz=327#tarx=0#tary=0#tarz=-71#name=Dini\'s Surface *&#src=http://va3c.github.io/algesurf/parametric-equations/equation-files/dini-surface/dini-surface.html#mat=PhongRandom#name=dini-surface.html#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/three.js/examples/models/animated/stork.js#mat=PhongRandom#name=stork.js#posx=100#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/three.js/examples/models/animated/parrot.js#mat=PhongRandom#name=parrot.js#posx=0#posy=64#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1',1,'dino + parrot + stork'],
		['http://va3c.github.io/viewer/va3c-viewer-html5/r6/va3c-viewer-r6.html#camx=200#camy=200#camz=-200#tarx=0#tary=0#tarz=0#name=Revit House + AS232 Helicopter&#src=template-basic.html#mat=PhongRandom#name=basic template mesh#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=http://va3c.github.io/RvtVa3c/models/rac_basic_sample_project_obj.rvt.js#mat=PhongRandom#name=rac_basic_sample_project_obj.rvt.js#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=0.01#scly=0.01#sclz=0.01&#src=http://va3c.github.io/fgx-aircraft/data/as332/as332.js#mat=PhongRandom#name=as332.js#posx=24#posy=80#posz=-100#rotx=0.1#roty=1#rotz=0.2#sclx=10#scly=10#sclz=10', 1, ' Revit Hose + AS232 helicopter']

	]


// The word 'crapdoodle' almost exists: https://www.wordnik.com/words/Crapdoodle
// http://www.sparkpeople.com/myspark/team_messageboard_thread.asp?board=0x33873x37834164x102

	V3PL.getAutoCrapdoodle = function () {
		var items, item, index;
		var mats = [
			'BasicRedFlat','LambertRandomSmooth','NormalFlat','NormalSmooth','NormalWireframe','PhongBlueFlat','PhongBlueRefractPisa','PhongDefault',
			'PhongDefaultReflectDenim','PhongDefaultReflectWhite','PhongDefaultReflectionBasic','PhongDefaultRefractDenim','PhongGoldRefLectWhite',
			'PhongGreenSmooth','PhongPurpleFlat','PhongRandom','PhongRandomReflectCadillac','PhongRandomReflectDenim','PhongRandomReflectDisturb',
			'PhongRandomReflectGrid','PhongRandomReflectLavatile','PhongRandomReflectUVGrid','PhongRandomReflectWhite','PhongRandomReflectWire',
			'PhongRedPlastic','PhongWhiteReflectPisa','PhongWhiteReflectWhite','PhongWhiteRelectPalace'
		];

// camera position
		var radius = 250;
		var lat = Math.PI * Math.random();
		var lon = Math.PI * Math.random();
		var cx = radius * Math.sin( lat ) * Math.cos( lon );
		var cy = radius * Math.cos( lat );
		var cz = radius * Math.sin( lat ) * Math.sin( lon );

// Meier's parametric equations
		items = [ 1, 11, 12, 14, 33, 42, 54, 58, 62, 131, 151, 155 ];
		item = items[ Math.floor( items.length * Math.random() ) ];
		var fileTitle = V3MH.files[ item ][ 1 ];
		var meierBasePath = V3MH.basepath + V3MH.files[ item ][ 0 ] + '/';
		var meierFile = V3MH.files[ item ][ 0 ] + '.html';
console.log( 'meier', meierBasePath + meierFile );

// vA3C Objects
		items = [
			'../../../json-r2/DrMajentaKlein.json',
			'../../../nasa-samples/stl/Stardust_35.stl',
			'../../../nasa-samples/stl/cassini.stl'
		];
		item = items[ Math.floor( items.length * Math.random() ) ];
		var va3cFile = item;

// FGx Aircraft  V3FA.files
		item = V3FA.files[ Math.floor( V3FA.files.length * Math.random() ) ];
		var aircraftFile = V3FA.basepath + item[ 0 ];
		var aircraftScale = 3 * item[ 1 ];

// Three.js models
		items = [ ['animated/elderlyWalk.js',100],['animated/flamingo.js',1],['animated/horse.js',1],['animated/parrot.js',1.5],
			['animated/monster/monster.js',0.05],['animated/ogro/ogro-light.js',3],
			['animated/ratamahatta/ratamahatta.js',2],['gltf/duck/duck.dae',100],['skinned/marine/m4.js',2],
			['skinned/marine/marine.js',0.5]
		];
		index = Math.floor( items.length * Math.random() );

		var threeModelFile = V3TM.basepath + items[ index ][ 0 ];
		var threeModelScale = items[ index ][ 1 ];

		var d1 = 100, dim2 = 50;
		var txt = '' +
			'#camx=' + cx + '#camy=' + cy + '#camz=' + cz +
			'#tarx=0#tary=0#tarz=0' +
			'#name=' + fileTitle + // meierBasePath + meierFile +

		'&' +
			'#posx=0#posy=0#posz=0' +
			'#rotx=0#roty=0#rotz=0' +
			'#sclx=1#scly=1#sclz=1#mat=' + mats[ Math.floor( mats.length * Math.random() ) ] +
			'#src=' + meierBasePath + meierFile +

		'&' +
			'#posx=' + ( d1 * Math.random() - dim2 ) + '#posy=' +( d1 * Math.random() - dim2 ) + '#posz=' + ( d1 * Math.random() - dim2 ) +
			'#rotx=' + ( 6 * Math.random()) + '#roty=' + ( 6 * Math.random()) + '#rotz=' + ( 6 * Math.random()) +
			'#sclx=' + threeModelScale + '#scly=' + threeModelScale + '#sclz=' + threeModelScale + '#mat=' + mats[ Math.floor( mats.length * Math.random() ) ]  +
			'#src=' + threeModelFile +

/*
		'&' +
			'#posx=' + ( d1 * Math.random() - dim2 ) + '#posy=' +( d1 * Math.random() - dim2 ) + '#posz=' + ( d1 * Math.random() - dim2 ) +
			'#rotx=' + ( 6 * Math.random()) + '#roty=' + ( 6 * Math.random()) + '#rotz=' + ( 6 * Math.random()) +
			'#sclx=1#scly=1#sclz=1#mat=' + mats[ Math.floor( mats.length * Math.random() ) ] +
			'#src=../../../../three.js/examples/models/animated/flamingo.js' +
*/

		'&' +
			'#posx=' + ( d1 * Math.random() - dim2 ) + '#posy=' +( d1 * Math.random() - dim2 ) + '#posz=' + ( d1 * Math.random() - dim2 ) +
			'#rotx=' + ( 6 * Math.random()) + '#roty=' + ( 6 * Math.random()) + '#rotz=' + ( 6 * Math.random()) +
			'#sclx=3#scly=3#sclz=3#mat=' + mats[ Math.floor( mats.length * Math.random() ) ] +
			'#src=../../../../three.js/examples/models/animated/ratamahatta/ratamahatta.js' +

		'&' +
			'#posx=' + ( d1 * Math.random() - dim2 ) + '#posy=' +( d1 * Math.random() - dim2 ) + '#posz=' + ( d1 * Math.random() - dim2 ) +
			'#rotx=' + ( 6 * Math.random()) + '#roty=' + ( 6 * Math.random()) + '#rotz=' + ( 6 * Math.random()) +
			'#sclx=' + aircraftScale + '#scly=' + aircraftScale + '#sclz=' + aircraftScale + '#mat=' + mats[ Math.floor( mats.length * Math.random() ) ] +
			'#src=' + aircraftFile +

		'&' +
			'#posx=' + ( d1 * Math.random() - dim2 ) + '#posy=' +( d1 * Math.random() - dim2 ) + '#posz=' + ( d1 * Math.random() - dim2 ) +
			'#rotx=' + ( 6 * Math.random()) + '#roty=' + ( 6 * Math.random()) + '#rotz=' + ( 6 * Math.random()) +
			'#sclx=1#scly=1#sclz=1#mat=' + mats[ Math.floor( mats.length * Math.random() ) ] +
			'#src=' + va3cFile +

		'';

		location.hash = txt;
//		V3PL.parsePermalinks();

console.log( 'getAutoCrapdoodle', txt );

		V3.getPermalinkBundles();
	};


	V3PL.createPermalinks = function () {
		var c = camera.position;
		var t = controls && controls.target ? controls.target : { x: 0, y: 9, z: 0 } ;
		var d = V3PL.defaultObject;
		var txt = '';
/*

// Create a sparse set of hashes

// camera
		if ( c.x !== d.camx ) txt += '#camx=' + parseInt( c.x, 10 );
		if ( c.y !== d.camy ) txt += '#camy=' + parseInt( c.y, 10 );
		if ( c.z !== d.camz ) txt += '#camz=' + parseInt( c.z, 10 );

// target
		if ( t.x !== d.tarx ) txt += '#tarx=' + parseInt( t.x, 10 );
		if ( t.y !== d.tary ) txt += '#tary=' + parseInt( t.y, 10 );
		if ( t.z !== d.tarz ) txt += '#tarz=' + parseInt( t.z, 10 );
*/

// camera
		txt += '#camx=' + parseInt( c.x, 10 );
		txt += '#camy=' + parseInt( c.y, 10 );
		txt += '#camz=' + parseInt( c.z, 10 );

// target
		txt += '#tarx=' + parseInt( t.x, 10 );
		txt += '#tary=' + parseInt( t.y, 10 );
		txt += '#tarz=' + parseInt( t.z, 10 );

		if ( V3PL.permalinks[0].name ) {
			txt += '#name=' + V3PL.permalinks[0].name;
		}
		txt += '&';

		for (var i = 0, len = scene.children.length; i < len; i++) {
			var obj = scene.children[i];
			if ( obj.geometry || obj.src ) {
//				if ( obj.name === 'basic template mesh' ) { continue; }

				obj.src = obj.src ? obj.src : d.src ;
				txt += '#src=' + obj.src;
//console.log( 'createPermalinks1', obj.src );
				if ( obj.materialKey && obj.materialKey !== 'undefines' ) {
					txt += '#mat=' + obj.materialKey;
				} else {
					txt += '#mat=' + d.mat;
				}

				obj.name = obj.name ? obj.name : d.name ;
				txt += '#name=' + obj.name;

				txt += '#posx=' + obj.position.x;
				txt += '#posy=' + obj.position.y;
				txt += '#posz=' + obj.position.z;

				txt += '#rotx=' + parseFloat( obj.rotation.x );
				txt += '#roty=' + parseFloat( obj.rotation.y );
				txt += '#rotz=' + parseFloat( obj.rotation.z );

				txt += '#sclx=' + parseFloat( obj.scale.x );
				txt += '#scly=' + parseFloat( obj.scale.y );
				txt += '#sclz=' + parseFloat( obj.scale.z );

/*

// To create a sparse set of hashes, use the following...

				if ( obj.materialKey !== d.mat ) txt += '#mat=' + obj.materialKey;

				if ( obj.position.x !== d.posx ) txt += '#posx=' + obj.position.x;
				if ( obj.position.y !== d.posy ) txt += '#posy=' + obj.position.y;
				if ( obj.position.z !== d.posz ) txt += '#posz=' + obj.position.z;

				if ( obj.rotation.x !== d.rotx ) txt += '#rotx=' + parseFloat( obj.rotation.x );
				if ( obj.rotation.y !== d.roty ) txt += '#roty=' + parseFloat( obj.rotation.y );
				if ( obj.rotation.z !== d.rotz ) txt += '#rotz=' + parseFloat( obj.rotation.z );

				if ( obj.scale.x !== d.sclx ) txt += '#sclx=' + parseFloat( obj.scale.x );
				if ( obj.scale.y !== d.scly ) txt += '#scly=' + parseFloat( obj.scale.y );
				if ( obj.scale.z !== d.sclz ) txt += '#sclz=' + parseFloat( obj.scale.z );
*/

				txt += '&';
			}
		}

		window.location.hash = txt.slice( 0, -1 );
//console.log( 'createPermalinks', txt );

	};

	V3PL.setDefaults = function ( defaultSource ) {

		var defaults = {};
		for ( var key in defaultSource ) {
			defaults[ key ] = defaultSource [ key ];
		}
		return defaults;

	};

	V3PL.buildPermalink = function ( src, scale, name ) {

		var permalink = V3PL.setDefaults( V3PL.defaultObject );
		permalink.name = name ? name : src.split('/').pop(); 
//		permalink.name = src.split('/').pop();
		permalink.scl =  scale ? scale : 1;
		permalink.src = src;

		V3PL.permalinks.push( permalink );
//console.log( 'buildPermalink', permalink );

		return permalink;

	};

	V3PL.clearPermalink = function () {

		window.history.pushState( '', '', window.location.pathname );

	};


/*

lee + walt
http://va3c.github.io/viewer/va3c-viewer-html5/r4/va3c-viewer-html5-r4.html#camx=576#camy=970#camz=-406#tarx=0#tary=9#tarz=0#src=http://va3c.github.io/three.js/examples/webgl_materials_bumpmap_skin.html&#src=http://va3c.github.io/three.js/examples/webgl_materials_bumpmap_skin.html#mat=PhongRandom#posx=0#posy=-50#posz=0#rotx=0.1385#roty=0.0985#rotz=0#sclx=100#scly=100#sclz=100&#src=http://va3c.github.io/three.js/examples/obj/walt/WaltHead_slim.js#mat=PhongRandom#posx=0#posy=50#posz=14#rotx=-0.0015#roty=0#rotz=0#sclx=8#scly=8#sclz=8&#src=http://va3c.github.io/three.js/examples/obj/walt/WaltHead_slim.js#mat=PhongRandom#posx=0#posy=50#posz=14#rotx=-0.0015#roty=0#rotz=0#sclx=8#scly=8#sclz=8&

http://va3c.github.io/viewer/va3c-viewer-html5/r4/va3c-viewer-html5-r4.html#camx=576#camy=970#camz=-406#tarx=0#tary=9#tarz=0#src=http://va3c.github.io/three.js/examples/webgl_materials_bumpmap_skin.html&#src=http://va3c.github.io/three.js/examples/webgl_materials_bumpmap_skin.html#mat=PhongRandom#posx=0#posy=-50#posz=0#rotx=0.1385#roty=0.0985#rotz=0#sclx=100#scly=100#sclz=100&
#src=http://va3c.github.io/three.js/examples/obj/walt/WaltHead_slim.js#mat=PhongRandom#posx=0#posy=50#posz=14#rotx=-0.0015#roty=0#rotz=0#sclx=8#scly=8#sclz=8&



http://va3c.github.io/viewer/va3c-viewer-html5/r4/va3c-viewer-html5-r4.html
#camx=4000#camy=1500#camz=2000#tarx=20#tary=1300#tarz=200#src=boilerplate-simple.html&
#src=../../../json/revit/rac_basic_sample_project.rvt.js#mat=PhongRandom#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&
#src=../../../../three.js/examples/models/animated/ratamahatta/ratamahatta.js#mat=PhongRandom#posx=0#posy=1100#posz=1200#rotx=0#roty=0#rotz=0#sclx=50#scly=50#sclz=50&
#src=../../../../three.js/examples/obj/Suzanne.js#mat=PhongRandom#posx=-8000#posy=1100#posz=-10000#rotx=1.75#roty=0#rotz=-1.57#sclx=900#scly=900#sclz=900&


http://va3c.github.io/viewer/va3c-viewer-html5/r4/va3c-viewer-html5-r4.html
#camx=4000#camy=1500#camz=2000#tarx=20#tary=1300#tarz=200#src=boilerplate-simple.html&
#src=../../../json/revit/rac_basic_sample_project.rvt.js#mat=PhongRandom#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&
#src=../../../../three.js/examples/models/animated/ratamahatta/ratamahatta.js#mat=PhongRandom#posx=0#posy=1100#posz=1200#rotx=0#roty=0#rotz=0#sclx=50#scly=50#sclz=50&
#src=../../../../three.js/examples/obj/Suzanne.js#mat=PhongRandom#posx=-8000#posy=1100#posz=-10000#rotx=1.75#roty=0#rotz=-1.57#sclx=900#scly=900#sclz=900&




http://va3c.github.io/viewer/va3c-viewer-html5/r4/va3c-viewer-html5-r4.html#camx=57#camy=57#camz=57#tarx=0#tary=0#tarz=0#src=boilerplate-simple.html&

#camx=233#camy=169#camz=163#tarx=0#tary=0#tarz=0#tmpl=../../../../jaanga.github.io/projects/algesurf/parametric-equations/equation-files//jeener-klein-surface/jeener-klein-surface.html&#url=../../../../jaanga.github.io/projects/algesurf/parametric-equations/equation-files//jeener-klein-surface/jeener-klein-surface.html#mat=NormalSmooth#posx=0#posy=-35#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=../../../../three.js/examples/models/animated/horse.js#mat=NormalSmooth#posx=0#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=../../../../three.js/examples/models/animated/ratamahatta/ratamahatta.js#mat=PhongRedPlastic#posx=82#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=../../../../three.js/examples/models/animated/flamingo.js#mat=PhongGreenSmooth#posx=38#posy=78#posz=46#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=../../../../fgx-repos/fgx-aircraft/data/C-160-Transall/c160.js#mat=PhongRandom#posx=74#posy=56#posz=-42#rotx=-0.0015#roty=2.5285#rotz=-0.0015#sclx=5#scly=5#sclz=5&

#camx=-226#camy=-24#camz=-22#tarx=-6#tary=16#tarz=24#tmpl=../../../../jaanga.github.io/projects/algesurf/parametric-equations/equation-files//tranguloid-trefoil/tranguloid-trefoil.html&#src=../../../../fgx-repos/fgx-aircraft/data/zzz-operations/jeep/jeep.js#mat=PhongRandom#posx=-88#posy=-36#posz=34#rotx=-0.0015#roty=-0.0015#rotz=0#sclx=20#scly=20#sclz=20&#src=../../../../fgx-repos/fgx-aircraft/data/wrightFlyer1903/WrightFlyer-pb-jw.js#mat=PhongRandom#posx=-52#posy=20#posz=8#rotx=-0.0015#roty=0#rotz=0#sclx=20#scly=20#sclz=20&

#camx=84#camy=275#camz=197#tarx=0#tary=0#tarz=0#tmpl=../../../../jaanga.github.io/projects/algesurf/parametric-equations/equation-files//hyperbolic-octahedron/hyperbolic-octahedron.html&#src=../../../../three.js/examples/models/animated/horse.js#mat=PhongRandom#posx=-42#posy=0#posz=0#rotx=0#roty=0#rotz=0#sclx=1#scly=1#sclz=1&#src=../../../../three.js/examples/obj/WaltHeadLo.js#mat=PhongPurpleFlat#posx=32#posy=42#posz=50#rotx=-0.5615#roty=0.4485#rotz=-0.0015#sclx=2#scly=2#sclz=2&#src=../../../../three.js/examples/models/animated/ratamahatta/ratamahatta.js#mat=PhongRandom#posx=68#posy=70#posz=-6#rotx=-0.0015#roty=-0.0015#rotz=-0.0015#sclx=3#scly=3#sclz=3&

*/
