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