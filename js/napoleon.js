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

napoleonMaps['marengo1800'] = {
  w: 0.20,
  h: 0.10,
  lat: 45.256558, 
  lng: 10.735312,
  func: function marengo1800(event) {	infoWindow.setContent(
		'<b>Marengo 1800</b><br><span class="nobr">TiS 29</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3077" target="_blank">Forum Marengo 1800</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['montebello1800'] = {
  w: 0.20,
  h: 0.10,
  lat: 44.998888, 
  lng: 9.102743,
  func: function montebello1800(event) {	infoWindow.setContent(
		'<b>Montebello 1800, 1859</b><br><span class="nobr">TiS 30</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3190" target="_blank">Forum Montebello 1800, 1859</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['smolensk1812'] = {
  w: 0.20,
  h: 0.10,
  lat: 54.785876, 
  lng: 32.021247,
  func: function smolensk1812(event) {	infoWindow.setContent(
		'<b>Smoleńsk 1812</b><br><span class="nobr">TiS 32</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3341" target="_blank">Forum Smoleńsk 1812</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['boreml1812'] = {
  w: 0.20,
  h: 0.10,
  lat: 50.476289, 
  lng: 25.182876,
  func: function boreml1812(event) {	infoWindow.setContent(
		'<b>Boreml 1812</b><br><span class="nobr">TiS 33</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3359" target="_blank">Forum Boreml 1812</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['brandy1863'] = {
  w: 0.20,
  h: 0.10,
  lat: 38.501808, 
  lng: -77.893563,
  func: function brandy1863(event) {	infoWindow.setContent(
		'<b>Brandy Station 1863</b><br><span class="nobr">TiS 33</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3358" target="_blank">Forum Brandy Station 1863</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['bullrun1861'] = {
  w: 0.20,
  h: 0.10,
  lat: 38.767130,
  lng: -77.504538,
  func: function bullrun1861(event) {	infoWindow.setContent(
		'<b>Bull Run/Manassas 1861</b><br><span class="nobr">TiS 35</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3518" target="_blank">Forum Bull Run/Manassas 1861</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['zielence1792'] = {
  w: 0.20,
  h: 0.10,
  lat: 49.886549, 
  lng: 27.127289,
  func: function zielence1792(event) {	infoWindow.setContent(
		'<b>Zieleńce 1792</b><br><span class="nobr">TiS 37</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4048" target="_blank">Forum Zieleńce 1792</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['dubienka1792'] = {
  w: 0.20,
  h: 0.10,
  lat: 51.048705,
  lng: 23.892498,
  func: function dubienka1792(event) {	infoWindow.setContent(
		'<b>Dubienka 1792</b><br><span class="nobr">TiS 37</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4048" target="_blank">Forum Dubienka 1792</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['maciejowice1794'] = {
  w: 0.20,
  h: 0.10,
  lat: 51.693251,
  lng: 21.540041,
  func: function maciejowice1794(event) {	infoWindow.setContent(
		'<b>Maciejowice 1794</b><br><span class="nobr">TiS 38</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4111" target="_blank">Forum Maciejowice 1794</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};

napoleonMaps['raclawice1794'] = {
  w: 0.20,
  h: 0.10,
  lat: 50.325763, 
  lng: 20.237049,
  func: function raclawice1794(event) {	infoWindow.setContent(
		'<b>Racławice 1794</b><br><span class="nobr">TiS 38</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4111" target="_blank">Forum Racławice 1794</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
