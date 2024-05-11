let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


* bepaal de rechthoek rondom het gebouw van AP */
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

* kleur de rechthoek in met de rode AP-kleur */
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);

* plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33" */
let marker = L.marker([51.23009, 4.41616]).addTo(map);
marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();


let coffeeIcon = L.icon({
    iconUrl: '../images/coffee-icon.png',
    shadowUrl: '../images/coffee-icon-shadow.png',

    iconSize:     [60, 60], 
    shadowSize:   [60, 60], 
    iconAnchor:   [0, 60], 
    shadowAnchor: [0, 60],
    popupAnchor:  [0, 0] 
});

L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);