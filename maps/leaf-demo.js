// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map( 'map', {
  center: [51.5074, 0.1278],
  minZoom: 10,
  zoom: 10
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + '/pin24.png',
  iconRetinaUrl: myURL + '/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

for ( var i=0; i < markers.features.length; ++i )
{
 L.marker( [markers.features[i].geometry.coordinates[1], markers.features[i].geometry.coordinates[0]], {icon: myIcon} )
  .bindPopup( '<a href="' + markers.features[i].properties.amenity + '" target="_blank">' + markers.features[i].properties.name + '</a>' )
  .addTo(map);
}

