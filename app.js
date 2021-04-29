function initMap(){

    //map option

    var options={
        center:{lat: 60.2517244 , lng:25.224804},
        zoom: 10
    }
     //new map
    map = new google.maps.Map(document.getElementById("map"),options)

    //marker
    const marker = new google.maps.Marker({
        position:{lat:60.98267, lng:25.66151},
        map:map
    });

    

}