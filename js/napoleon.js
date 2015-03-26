var napoleonMaps = {};

//---------------------------------------------------------------------------------------------------------------
// Współrzędne dla małych map
// Gry w systemie Napoleon wydane w pudełkach.

napoleonMaps['borodino1812'] = {
  w: 0.25,
  h: 0.15,
  lat: 55.526058,
  lng: 35.819666,
  func: function borodino1812(event) {	infoWindow.setContent(
		'<b>Borodino 1812</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2635" target="_blank">Forum Borodino 1812</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
//Ostrołęka 1831, 1806
napoleonMaps['ostroleka1831'] = {
  w: 0.25,
  h: 0.15,
  lat: 53.081436, 
  lng: 21.571431,
  func: function ostroleka1806(event) {	infoWindow.setContent(
		'<b>Ostrołęka 1831</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2040" target="_blank">Forum Ostrołęka 1831</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['pultusk1806'] = {
  w: 0.20,
  h: 0.10,
  lat: 52.706750, 
  lng: 21.082863, 
  func: function pultusk1806(event) {	infoWindow.setContent(
		'<b>Pułtusk 1806</b><br><span class="nobr">TiS 21</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2122" target="_blank">Forum Pułtusk 1806</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['albuera1811'] = {
  w: 0.20,
  h: 0.10,
  lat: 38.713562,
  lng:  -6.827753, 
  func: function albuera1811(event) {	infoWindow.setContent(
		'<b>Albuera 1811</b><br><span class="nobr">TiS 26</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2786" target="_blank">Forum Albuera 1811</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['gettysburg1863'] = {
  w: 0.20,
  h: 0.10,
  lat: 39.832325, 
  lng:  -77.233847,
  func: function gettysburg1863(event) {	infoWindow.setContent(
		'<b>Gettysburg 1863</b><br><span class="nobr">TiS 28</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2786" target="_blank">Forum Gettysburg 1863</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
