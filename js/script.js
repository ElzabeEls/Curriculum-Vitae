function initMap() {
          var myLatLng = {lat: -34.075691, lng: 18.843266};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: myLatLng,
      mapId:'da1bff2d63c7a5de',
      disableDefaultUI: true
      });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon:"images/Webp.net-resizeimage.png"
    });

  }


        google.maps.event.addDomListener(window, 'load', initialize);
