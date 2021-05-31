var normalarea = function (feature) {
  var retStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: "rgba(255,0,0,0.2)",
    }),
    stroke: new ol.style.Stroke({
      color: "rgba(255,0,0,0.8)",
      width: 3
    })
  });
  return retStyle;
};

var highligtharea = function (feature) {
  var retStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: "rgba(0,0,0,0.2)",
    }),
    stroke: new ol.style.Stroke({
      color: "rgba(255,0,0,0.8)",
      width: 5
    })
  });
  return retStyle;
};


var normalEndnode = function (feature) {
  var myStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: "rgba(0,0,255,1)",
      })
    })
  })
  return myStyle;

};

var highligthEndnode = function (feature) {
  var myStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 9,
      fill: new ol.style.Fill({ 
        color: "rgba(0,0,255,1)",
       })
    })
  })
  return myStyle;

};

var normalGateway = function (feature) {
  var myStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: "rgba(0,255,0,1)",
       })
    })
  })
  return myStyle;

};
var highligthGateway = function (feature) {
  var myStyle = new ol.style.Style({
    image: new ol.style.Circle({
      radius: 9,
      fill: new ol.style.Fill({
        color: "rgba(0,255,0,1)",
      })
    })
  })
  return myStyle;

};
