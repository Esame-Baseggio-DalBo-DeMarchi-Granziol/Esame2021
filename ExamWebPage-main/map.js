
const mapLayer =  new ol.layer.Tile
(
  {
    source: new ol.source.OSM(),
    visible: true
  }
) 

const viewMap = new ol.View
(
    {
        center: ol.proj.fromLonLat([12.24, 45.665]),
        zoom: 16
    }
)


var map = new ol.Map({
    target: 'map',
    layers: 
    [
        mapLayer, 
        areaLayer,
        gatewayLayer,
        endnodeLayer
    ],
    view: viewMap
});