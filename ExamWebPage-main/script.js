window.onload = init;


map.on('moveend', function (e) {
  if (map.getView().getZoom() >= 16.5) endnodeLayer.setVisible(true);
  else endnodeLayer.setVisible(false);
  if (map.getView().getZoom() >= 15.5) gatewayLayer.setVisible(true);
  else gatewayLayer.setVisible(false);
});

var temp1 = null;
var temp2 = null;
var temp3 = null;
function displayLayerName(e, overlayLayer) {

  if (temp1 !== null) temp1.setStyle(normalarea);
  if (temp2 !== null) temp2.setStyle(normalEndnode);
  if (temp3 !== null) temp3.setStyle(normalGateway);

  map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    temp1 = feature;
    feature.setStyle(highligtharea);
  },
    {
      layerFilter: function (layerCandidate) {
        return layerCandidate.get('title') === 'area';
      }
    });

  function formatCoordinate(coordinate, id) {
    return ("<table><tbody><tr><th>ID</th><td>" + String(id) + "</td></tr><tr><th>lon</th><td>" + coordinate[0].toFixed(10) + "</td></tr><tr><th>lat</th><td>" + coordinate[1].toFixed(10) + "</td></tr></tbody></table>");
  }

  map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    overlayLayer.setPosition(e.coordinate);
    console.log(feature);
    document.getElementById('popup-content').innerHTML = "<div class='labelEndnode'>" + layer.get('title') + "</div>" + "<div>" + formatCoordinate(ol.proj.toLonLat(feature.getGeometry().getCoordinates()),feature.id_) + "</div>";
    temp2 = feature;
    feature.setStyle(highligthEndnode);
  },
    {
      layerFilter: function (layerCandidate) {
        return layerCandidate.get('title') === 'Endnode';
      }
    });

  map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    overlayLayer.setPosition(e.coordinate);
    document.getElementById('popup-content').innerHTML = "<div class='labelEndnode'>" + layer.get('title') + "</div>" + "<div>" + formatCoordinate(ol.proj.toLonLat(feature.getGeometry().getCoordinates()),feature.id_) + "</div>";
    temp3 = feature;
    feature.setStyle(highligthGateway);
  },
    {
      layerFilter: function (layerCandidate) {
        return layerCandidate.get('title') === 'Gateway';
      }
    });
}


function init() {
  areaLayer.setVisible(true);
  areaLayer.setStyle(normalarea);
  endnodeLayer.setStyle(normalEndnode);
  gatewayLayer.setStyle(normalGateway);


  const overlayLayer = new ol.Overlay({ element: document.querySelector('.ol-popup') });
  map.addOverlay(overlayLayer);

  map.on('pointermove', function (e) {
    overlayLayer.setPosition(undefined);
    displayLayerName(e, overlayLayer);
  });

}

map.on('singleclick', function (e) {
  map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    if (layer.get('title') === 'area' && viewMap.getZoom() > 15) {
      window.open("./GatewayDashboard.html?id="+feature.id_);
    }
  });
});



