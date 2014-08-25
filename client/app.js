$(document).ready(function() {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {  

    var point = new google.maps.LatLng(position.coords.latitude, 
                                       position.coords.longitude);

    // Initialize the Google Maps API v3
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
      center: point,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Place a marker
    new google.maps.Marker({
      position: point,
      map: map
    });
  }); 
  } 
  else {
    alert('W3C Geolocation API is not available');
  } 
});