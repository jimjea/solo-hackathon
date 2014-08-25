var map;
var placesAroundLocation;
var infoWindow;


// HELPER FUNCTIONS FOR PLACES
// creates marker for places
var createMarker = function(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: placeLoc
  });

  // add click event listener for infoWindow here
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(place.name);
    infoWindow.open(map, this);
  })
};
// on a successful places retrieval, calls createMarker on each place in the array
var getPlacesData = function(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
};



$(document).ready(function() {
  // REAL TIME LOCATION
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {  

      var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    // CREATE MAP
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: point,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // CREATE LOCATION MARKER FOR USER
    new google.maps.Marker({
      position: point,
      map: map,
      icon: 'assets/mypic.jpg'
    });

    // PLACES API
    var request = {
      location: point,
      radius: 100,
      types: ['bar']
    };
    infoWindow = new google.maps.InfoWindow();
    placesAroundLocation = new google.maps.places.PlacesService(map);
    // returns an array of the results
    placesAroundLocation.nearbySearch(request, getPlacesData);

  }); 
    // IF GEOLOCATION FAILS
  } else {
    alert('W3C Geolocation API is not available');
  } 
});