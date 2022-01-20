function updateMap() {
    console.log("Updating map with realtime data")
    fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.forEach(element => {
                latitude = element.countryInfo.lat;
                longitude = element.countryInfo.long;

                cases = element.cases;
                if (cases>200000){
                    color = "rgba(255, 0, 0,0.5)";
                }

                else if(cases<200000 && cases>100000){
                    color = "rgb(0, 200, 0,0.5)";
                }
                else if(cases<100000 &&cases>50000){
                    color="rgba(0,0,200,0.5)";
                }
                else if(cases<50000 && cases>10000){
                    color="rgba(200,200,200,0.5)";
                }
                else if(cases<10000 && cases>1000){
                    color="rgba(100,100,100,0.5)";
                }
                else{
                    color="rgba(255, 234, 167,0.5)"
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 
// https://corona.lmao.ninja/v2/jhucsse
// latitude = element.coordinates.latitude;
// longitude = element.coordinates.longitude;
// cases = element.stats.confirmed;