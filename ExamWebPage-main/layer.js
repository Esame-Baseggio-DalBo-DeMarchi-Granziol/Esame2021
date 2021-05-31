

const endnodeSourceLayer = new ol.source.Vector
(
  {
    url: './data/endnode.geojson',
    format: new ol.format.GeoJSON(),
  }
);

const endnodeLayer = new ol.layer.VectorImage
(
  {
    source: endnodeSourceLayer,
    visible: false,
    title: 'Endnode'
  }
);


const areaSourceLayer = new ol.source.Vector
(
  {
    url: './data/area.geojson',
    format: new ol.format.GeoJSON(),
  }
);

const areaLayer = new ol.layer.VectorImage
(
  {
    source: areaSourceLayer,
    visible: false,
    title: 'area'
  }
);

const gatewaySourceLayer = new ol.source.Vector
(
  {
    url: './data/gateway.geojson',
    format: new ol.format.GeoJSON(),
  }
);

const gatewayLayer = new ol.layer.VectorImage
(
  {
    source: gatewaySourceLayer,
    visible: false,
    title: 'Gateway'
  }
);

