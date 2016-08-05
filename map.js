function sendAddressForm(){
  var address1 = document.getElementById("address1").value;
  var address2 = document.getElementById("address2").value;

  $.ajax({
    url:"http://maps.googleapis.com/maps/api/geocode/json?address="+address1+"&sensor=false",
    type: "POST",
    success:function(res){
       console.log(res.results[0].geometry.location.lat);
       console.log(res.results[0].geometry.location.lng);
    }
  });

  $.ajax({
    url:"http://maps.googleapis.com/maps/api/geocode/json?address="+address2+"&sensor=false",
    type: "POST",
    success:function(res){
       console.log(res.results[0].geometry.location.lat);
       console.log(res.results[0].geometry.location.lng);
    }
  });

}
