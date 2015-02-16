var medievalMaps = {};

//---------------------------------------------------------------------------------------------------------------
// Współrzędne dla małych map
// Gry w systemie Średniowiecze wydane w pudełkach.
/*medievalMaps['puszczyka'] = {
  radius: 12345,
  center: new google.maps.LatLng(52.158097, 21.022692),
  func: function puszczyka(event) {	infoWindow.setContent(
		'<b>TiS HQ</b><br><span class="nobr">Centrum dowodzenia wszechświatem.</span><br><a href="http://taktykaistrategia.pl/" target="_blank">Strona TiS</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
*/
medievalMaps['grunwald1410'] = {
  radius: 12345,
  center: new google.maps.LatLng(53.531810, 20.103500),
  func: function grunwald1410(event) {	infoWindow.setContent(
		'<b>Grunwald 1410</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2057" target="_blank">Forum Grunwald 1410</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['legnica1410'] = {
  radius: 12345,
  center: new google.maps.LatLng(51.2046913,16.1603306),
  func: function legnica1410(event) {	infoWindow.setContent(
		'<b>Legnica 1241</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2330" target="_blank">Forum Legnica 1241</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['kosowePole1389'] = {
  radius: 12345,
  center: new google.maps.LatLng(42.6377242,21.0909109),
  func: function kosowePole1389(event) {	infoWindow.setContent(
		'<b>Kosowe Pole 1389</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2326" target="_blank">Forum Kosowe Pole 1389</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Bannocburn1314'] = {
  radius: 12345,
  center: new google.maps.LatLng(56.090991, -3.907598),
  func: function Bannocburn1314(event) {	infoWindow.setContent(
		'<b>Bannocburn 1314</b><br><b>Falkirk 1298</b><br><b>Stirling 1297</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2035" target="_blank">Forum Bannocburn 1314</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3916" target="_blank">Forum Falkirk 1298</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1327" target="_blank">Forum Stirling 1297</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Falkirk1298'] = {
  radius: 12345,
  center: new google.maps.LatLng(56.0048829,-3.7990217),
  func: function Bannocburn1314(event) {	infoWindow.setContent(
		'<b>Bannocburn 1314</b><br><b>Falkirk 1298</b><br><b>Stirling 1297</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2035" target="_blank">Forum Bannocburn 1314</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3916" target="_blank">Forum Falkirk 1298</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1327" target="_blank">Forum Stirling 1297</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Stirling1297'] = {
  radius: 12345,
  center: new google.maps.LatLng(56.1187053,-3.9396984),
  func: function Bannocburn1314(event) {	infoWindow.setContent(
		'<b>Bannocburn 1314</b><br><b>Falkirk 1298</b><br><b>Stirling 1297</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2035" target="_blank">Forum Bannocburn 1314</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3916" target="_blank">Forum Falkirk 1298</a><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1327" target="_blank">Forum Stirling 1297</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Warna1444'] = {
  radius: 12345,
  center: new google.maps.LatLng(43.2048411,27.9429086),
  func: function Warna1444(event) {	infoWindow.setContent(
		'<b>Warna 1444</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4047" target="_blank">Forum Warna 1444</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['KulikowePole1380'] = {
  radius: 12345,
  center: new google.maps.LatLng(53.9030861,37.4246475),
  func: function KulikowePole1380(event) {	infoWindow.setContent(
		'<b>Kulikowe Pole 1380</b><br><span class="nobr">Wydanie pudełkowe</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2326" target="_blank">Forum Kulikowe Pole 1380</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
//---------------------------------------------------------------------------------------------------------------
// Gry w systemie Średniowiecze z TiSów.
medievalMaps['Crecy1346'] = {
  radius: 8765,
  center: new google.maps.LatLng(50.2408148,1.8397035),
  func: function Crecy1346(event) {	infoWindow.setContent(
		'<b>Crecy 1346</b><br><span class="nobr">TiS 40</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=4172&postdays=0&postorder=asc&start=0" target="_blank">Forum TiS 40</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Chmielnik1241'] = {
  radius: 8765,
  center: new google.maps.LatLng(50.6114984,20.7486056),
  func: function Chmielnik1241(event) {	infoWindow.setContent(
		'<b>Chmielnik 1241</b><br><span class="nobr">TiS 35</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3517" target="_blank">Forum Chmielnik 1241</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Pejpus'] = {
  radius: 8765,
  center: new google.maps.LatLng(58.6170778,27.4137803),
  func: function Pejpus(event) {	infoWindow.setContent(
		'<b>Jezioro Pejpus 1242</b><br><span class="nobr">TiS 34</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=3372" target="_blank">Forum Jezioro Pejpus 1242</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Plowce1331'] = {
  radius: 8765,
  center: new google.maps.LatLng(52.6177391,18.6389065),
  func: function Plowce1331(event) {	infoWindow.setContent(
		'<b>Płowce 1331</b><br><span class="nobr">TiS 27</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2823" target="_blank">Forum Płowce 1331</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Chojnice1454'] = {
  radius: 8765,
  center: new google.maps.LatLng(53.7000948,17.5577066),
  func: function Chojnice1454(event) {	infoWindow.setContent(
		'<b>Chojnice 1454</b><br><span class="nobr">TiS 25</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2646" target="_blank">Forum Chojnice 1454</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Kurzetnik1410'] = {
  radius: 8765,
  center: new google.maps.LatLng(53.3986718,19.5719868),
  func: function Kurzetnik1410(event) {	infoWindow.setContent(
		'<b>Kurzętnik 1410</b><br><span class="nobr">TiS 24</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2683" target="_blank">Forum Kurzętnik 1410</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['Koronowo1410'] = {
  radius: 8765,
  center: new google.maps.LatLng(53.3154901,17.9498951),
  func: function Koronowo1410(event) {	infoWindow.setContent(
		'<b>Koronowo 1410</b><br><span class="nobr">TiS 22</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=2417" target="_blank">Forum Koronowo 1410</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
medievalMaps['swiecino1462'] = {
  radius: 8765,
  center: new google.maps.LatLng(54.7360696,18.1730181),
  func: function swiecino1462(event) {	infoWindow.setContent(
		'<b>Świecino 1462</b><br><span class="nobr">TiS 16</span><br><a href="http://taktykaistrategia.pl/forum/viewtopic.php?t=1458" target="_blank">Forum Świecino 1462</a>'); infoWindow.setPosition(event.latLng); infoWindow.open(map);},
};
