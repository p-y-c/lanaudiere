var size = 0;
var placement = 'point';

var style_Densitrsidentielle_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("sum_LOG");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,218,218,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 1.000000 && value <= 10.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,250,219,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 10.000000 && value <= 15.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,239,194,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 15.000000 && value <= 20.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,221,158,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 20.000000 && value <= 25.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,196,137,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 25.000000 && value <= 30.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,196,137,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 30.000000 && value <= 60.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,151,111,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 60.000000 && value <= 90.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,136,109,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 90.000000 && value <= 120.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,126,109,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 120.000000 && value <= 656.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,102,102,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};
