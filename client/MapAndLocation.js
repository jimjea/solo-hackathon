$(document).ready(function() {
  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {  

      var point = new google.maps.LatLng(position.coords.latitude, 
       position.coords.longitude);

    // Create map
    var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 16,
     center: point,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });

    // Place marker
    new google.maps.Marker({
      position: point,
      map: map,
      icon: 'assets/mypic.jpg'
    });
  }); 
  } 
  else {
    alert('W3C Geolocation API is not available');
  } 
});