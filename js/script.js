function initMap(){
  map = new google.maps.Map(document.getElementById("map"),options);

    var options = {
      center: {lat: 38.3460, lng:-0.4907},
      zoom: 8,
      mapId:'da1bff2d63c7a5de'
    };

    var marker = new google.maps.Marker({
      position:{lat:37.9922, lng: -1.1307},
      map:map,
      icon:"https://img.icons8.com/nolan/2x/marker.png"
    });

    //marker.addListerner("mouseover", () => {
    //  detailWindow.open(map, marker);
  //  });
  }
