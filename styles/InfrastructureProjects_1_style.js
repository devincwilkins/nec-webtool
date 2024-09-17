var size = 0;
var placement = 'point';

var style_InfrastructureProjects_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Proj_Name") !== null) {
        labelText = String(feature.get("Proj_Name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(0,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(244,226,33,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
