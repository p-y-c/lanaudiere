var size = 0;
var placement = 'point';

var style_Tauxdevoiriemarchablepondr_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
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
    
        function rules_Tauxdevoiriemarchablepondr_8(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Tauxdevoiriemarchablepondr_8rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdevoiriemarchablepondr_8rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(59,82,139,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdevoiriemarchablepondr_8rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(33,144,141,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdevoiriemarchablepondr_8rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(93,201,99,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdevoiriemarchablepondr_8rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,231,37,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Tauxdevoiriemarchablepondr_8(feature, value);
        ;

    return style;
};
