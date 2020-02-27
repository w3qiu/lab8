function initMap() {
	// add your code here
    L.mapquest.key = '5XGGuWTV3KhLtP9k1i7Wka0ukO3v5rvD';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
      center: [32.878958, -117.235924],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12,
    zoomControl: false
    });
    
    L.marker([32.878958, -117.235924]).addTo(map);
    
}
