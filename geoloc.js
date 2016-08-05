function showMap()
{
  // center the map on the average between the two points
  latlng = new google.maps.LatLng((location1.lat(),location1.lng());

  // set map options
  var mapOptions =
  {
    zoom: 1,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };

  // create a new map object
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  // show route between the points
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer(
  {
    suppressMarkers: true,
    suppressInfoWindows: true
  });
  // create the markers for the two locations
  var marker1 = new google.maps.Marker({
    map: map,
    position: location1,
    title: "Départ"
  });

  // create the text to be shown in the infowindows
  // add action events so the info windows will be shown when the marker is clicked
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow1.open(map,marker1);
  });

    document.getElementById("distance_direct").innerHTML = "<br/>Distance à vol d'oiseau: "+d;
}
