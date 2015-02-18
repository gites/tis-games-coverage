var wb95Maps = {};
// Gry w systemie WB-95 wydane przez Mirage
wb95Maps['smolensk1941'] = {
    coords : [
		new google.maps.LatLng(55.496898, 30.047672), 
		new google.maps.LatLng(53.216881, 30.047672),
		new google.maps.LatLng(53.216881, 33.555900),
		new google.maps.LatLng(55.496898, 33.555900)
	],
	color: '#880000',
	func:  function smolensk1941(event) {
				var contentString = '<b>Smoleńsk 1941</b><br><span class="nobr">Wydanie pudełkowe. Mirrage Hobby.</span><br>' +
				'<!--a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2572" target="_blank">Forum Moskwa 1941</a-->';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['budapeszt1945'] = {
    coords : [
		new google.maps.LatLng(48.263425, 17.156747),
		new google.maps.LatLng(46.022157, 17.156747),
		new google.maps.LatLng(46.022157, 19.479651),
		new google.maps.LatLng(48.263425, 19.479651)
	],
	color: '#880000',
	func:  function budapeszt1945(event) {
				var contentString = '<b>Budapeszt 1945</b><br><span class="nobr">Wydanie pudełkowe. Mirrage Hobby.</span><br>' +
				'<a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=195" target="_blank">Forum Budapeszt 1945</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

//--------------------------------------------------------------------------------
// Gry w systemie WB-95 wydane w pudełkach.
wb95Maps['moskwa1941'] = {
    coords : [
		new google.maps.LatLng(56.962024, 35.607712),
		new google.maps.LatLng(55.238550, 36.154329),
		new google.maps.LatLng(55.439272, 38.451844),
		new google.maps.LatLng(57.184025, 37.886049)
	],
	color: '#FF0000',
	func:  function moskwa1941(event) {
		var contentString = '<b>Moskwa 1941</b><br>Wydanie pudełkowe.<br>' +
		'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2572" target="_blank">Forum Moskwa 1941</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['charkow1942'] = {
    coords : [
		new google.maps.LatLng(50.308318, 34.773615), 
		new google.maps.LatLng(48.302439, 35.768474),
		new google.maps.LatLng(48.705783, 37.874590),
		new google.maps.LatLng(50.702625, 36.925040)
	],
	color: '#FF0000',
	func:  function charkow1942(event) {
				var contentString = '<b>Charków 1942/43</b><br><span class="nobr">Wydanie pudełkowe.</span><br>' +
				'<a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3891" target="_blank">Forum Charków 1942/43</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['stalingrad1943'] = {
    coords : [
		new google.maps.LatLng(49.664146, 42.626155), 
		new google.maps.LatLng(47.304410, 42.626155),
		new google.maps.LatLng(47.304410, 44.882942),
		new google.maps.LatLng(49.664146, 44.882942)
	],
	color: '#FF0000',
	func:  function stalingrad1943(event) {
				var contentString = '<b>Stalingrad 1942/43</b><br><span class="nobr">Wydanie pudełkowe.</span><br>' +
				'<a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=24" target="_blank">Forum Stalingrad 1942/43</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['kursk1943'] = {
    coords : [
		new google.maps.LatLng(52.526566, 35.608166), 
		new google.maps.LatLng(50.355780, 35.608166),
		new google.maps.LatLng(50.355780, 37.169982),
		new google.maps.LatLng(52.526566, 37.169982)
	],
	color: '#FF0000',
	func:  function kursk1943(event) {
				var contentString = '<b>Kursk 1943</b><br><span class="nobr">Wydanie pudełkowe.</span><br>' +
				'<a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3305" target="_blank">Forum Kursk 1943</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['normandia1944'] = {
    coords : [
			new google.maps.LatLng(49.723117, -1.940624),
			new google.maps.LatLng(48.522891, -1.940624),
			new google.maps.LatLng(48.522891, 0.249783),
			new google.maps.LatLng(49.429814, 0.249783),
			new google.maps.LatLng(49.429814, -1.219730),
			new google.maps.LatLng(49.723117, -1.219730)
	],
	color: '#FF0000',
	func:  function normandia1944(event) {
				var contentString = '<span class="nobr"><b>Normandia 1944</b></span><br><span class="nobr">Wydanie pudełkowe</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=922" target="_blank">Forum Normandia 1944</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['korsun1944'] = {
    coords : [
			new google.maps.LatLng(50.026006, 30.598960),
			new google.maps.LatLng(49.157019, 29.854887),
			new google.maps.LatLng(48.560554, 31.812806),
			new google.maps.LatLng(49.437317, 32.537596)
	],
	color: '#FF0000',
	func:  function korsun1944(event) {
				var contentString = '<span class="nobr"><b>Korsun 1944</b></span><br><span class="nobr">Wydanie pudełkowe</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2865" target="_blank">Forum Korsun 1944</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['ardeny1944'] = {
    coords : [
			new google.maps.LatLng(50.6800099, 4.3561299),
			new google.maps.LatLng(49.79, 4.3561299),
			new google.maps.LatLng(49.79, 6.499383),
			new google.maps.LatLng(50.6800099, 6.499383)
	],
	color: '#FF0000',
	func:  function ardeny1944(event) {
				var contentString = '<span class="nobr"><b>Ardeny 1944</b></span><br><span class="nobr">Wydanie pudełkowe</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1190" target="_blank">Forum Ardeny 1944</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['budziszyn1945'] = {
    coords : [
			new google.maps.LatLng(51.800000, 12.539517),
			new google.maps.LatLng(50.969538, 12.539517),
			new google.maps.LatLng(50.969538, 15.000000),
			new google.maps.LatLng(51.800000, 15.000000)
	],
	color: '#FF0000',
	func:  function budziszyn1945(event) {
				var contentString = '<b>Budziszyn 1945</b><br>Wydanie pudełkowe<br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1337" target="_blank">Forum Budziszyn 1945</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['berlin1945'] = {
    coords : [
				new google.maps.LatLng(52.856505, 12.539517),
				new google.maps.LatLng(51.800000, 12.539517),
				new google.maps.LatLng(51.800000, 15.000000),
				new google.maps.LatLng(52.859480, 15.000000)
	],
	color: '#FF0000',
	func:  function berlin1945(event) {
				var contentString = '<b>Berlin 1945</b><br><span class="nobr">Wydanie pudełkowe (kwiecień 2015 ?)<br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3603" target="_blank">Forum Berlin 1945</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

//--------------------------------------------------------------------------------
// Gry w systemie WB-95 z TiSów.
wb95Maps['tula1941'] = {
    coords : [
		new google.maps.LatLng(55.238550, 36.154329),
		new google.maps.LatLng(53.340540, 36.734799),
		new google.maps.LatLng(53.613975, 39.032565),
		new google.maps.LatLng(55.439272, 38.451844)
	],
	color: '#FF0000',
	func:  function tula1941(event) {
			var contentString = '<b>Tula 1941</b><br>TiS 33, TiS 34<br>' +
			'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2572" target="_blank">Forum Moskwa 1941</a></span>';
			infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};
wb95Maps['lukdonu1943'] = {
    coords : [
		new google.maps.LatLng(50.198652, 40.263682), 
		new google.maps.LatLng(48.345056, 40.263682),
		new google.maps.LatLng(48.345056, 42.626155),
		new google.maps.LatLng(50.198652, 42.626155)
	],
	color: '#FF0000',
	func:  function lukdonu1943(event) {
				var contentString = '<b>Łuk Donu 1943</b><br><span class="nobr">TiS 13</span><br>' +
				'<a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=679" target="_blank">Forum Łuk Donu 1943</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['kursk2armia'] = {
    coords : [
		new google.maps.LatLng(52.526566, 34.547596), 
		new google.maps.LatLng(50.355780, 34.547596),
		new google.maps.LatLng(50.355780, 35.608166),
		new google.maps.LatLng(52.526566, 35.608166)
	],
	color: '#FF0000',
	func:  function kursk2armia(event) {
				var contentString = '<b>Kursk 1943. 2 Armia</b><br><span class="nobr">TiS 36</span><br>' +
				'<a href="http://www.taktykaistrategia.pl/forum/viewtopic.php?t=3513" target="_blank">Forum TiS 36</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['kutzowwsch'] = {
    coords : [
		new google.maps.LatLng(53.584483, 35.908134), 
		new google.maps.LatLng(52.634862, 35.908134),
		new google.maps.LatLng(52.634862, 37.116630),
		new google.maps.LatLng(53.584483, 37.116630)
	],
	color: '#FF0000',
	func:  function kutzowwsch(event) {
				var contentString = '<b>Kutuzow Wschód</b><br><span class="nobr">TiS 38</span><br>' +
				'<a href="http://www.taktykaistrategia.pl/forum/viewtopic.php?t=3647" target="_blank">Forum TiS 38</a><br>' +
				'<a href="http://www.taktykaistrategia.pl/forum/viewtopic.php?t=4124" target="_blank">Forum TiS 39</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};
wb95Maps['kutzowzach'] = {
    coords : [
		new google.maps.LatLng(53.901023, 34.699638), 
		new google.maps.LatLng(52.951402, 34.699638),
		new google.maps.LatLng(52.951402, 35.908134),
		new google.maps.LatLng(53.901023, 35.908134)
	],
	color: '#FF0000',
	func:  function kutzowzach(event) {
				var contentString = '<b>Kutuzow Zachód</b><br><span class="nobr">TiS 39</span><br>' +
				'<a href="http://www.taktykaistrategia.pl/forum/viewtopic.php?t=3647" target="_blank">Forum TiS 38</a><br>' +
				'<a href="http://www.taktykaistrategia.pl/forum/viewtopic.php?t=4124" target="_blank">Forum TiS 39</a>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};
wb95Maps['bagration1944'] = {
    coords : [
		new google.maps.LatLng(52.348133, 20.511809),
		new google.maps.LatLng(51.243119, 21.792283),
		new google.maps.LatLng(51.786645, 22.981553),
		new google.maps.LatLng(52.863436, 21.741472)
	],
	color: '#FF0000',
	func:  function bagration1944(event) {
				var contentString = '<b>Bagration 1944</b><br>TiS 25, TiS 26<br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=288" target="_blank">Forum Bagration 1944</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['holandia1944'] = {
    coords : [
		new google.maps.LatLng(51.573092, 4.3561299),
		new google.maps.LatLng(50.6800099, 4.3561299),
		new google.maps.LatLng(50.6800099, 6.499383),
		new google.maps.LatLng(51.573092, 6.499383)
	],
	color: '#FF0000',
	func:  function holandia1944(event) {
				var contentString = '<span class="nobr"><b>Holandia 1944</b></span><br><span class="nobr">TiS 17 + TiS 18</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1659" target="_blank">Forum Holandia 1944</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['wroclaw1945'] = {
    coords : [
			new google.maps.LatLng(51.279807, 16.100255),
			new google.maps.LatLng(50.465365, 16.100255),
			new google.maps.LatLng(50.465365, 18.020212),
			new google.maps.LatLng(51.279807, 18.020212)
	],
	color: '#FF0000',
	func:  function wroclaw1945(event) {
				var contentString = '<span class="nobr"><b>Wroclaw 1945</b></span><br><span class="nobr">TiS 23</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2419" target="_blank">Forum Wrocław 1945</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['colmar1945'] = {
    coords : [
			new google.maps.LatLng(48.546530, 6.624716),
			new google.maps.LatLng(47.858830, 6.624716),
			new google.maps.LatLng(47.858830, 8.227338),
			new google.maps.LatLng(48.546530, 8.227338)
	],
	color: '#FF0000',
	func:  function colmar1945(event) {
				var contentString = '<b>Colmar 1945</b><br><span class="nobr">TiS 28</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2930" target="_blank">Forum TiS 28</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};

wb95Maps['nordwind1945'] = {
    coords : [
			new google.maps.LatLng(49.257848, 6.624716),
			new google.maps.LatLng(48.546530, 6.624716),
			new google.maps.LatLng(48.546530, 8.227338),
			new google.maps.LatLng(49.257848, 8.227338)
	],
	color: '#FF0000',
	func:  function nordwind1945(event) {
				var contentString = '<span class="nobr"><b>Nordwind 1945</b></span><br><span class="nobr">TiS 21</span><br>' +
				'<span class="nobr"><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2172" target="_blank">Forum TiS 21</a></span>';
				infoWindow.setContent(contentString); infoWindow.setPosition(event.latLng); infoWindow.open(map); },
};