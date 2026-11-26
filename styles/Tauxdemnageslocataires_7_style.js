var size = 0;
var placement = 'point';

var style_Tauxdemnageslocataires_7 = function(feature, resolution){
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
    
        function rules_Tauxdemnageslocataires_7(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Tauxdemnageslocataires_7rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(68,1,84,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,68,135,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(42,120,142,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,168,132,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,209,81,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Tauxdemnageslocataires_7rule6_eval_expression(context)) {
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
        var style = rules_Tauxdemnageslocataires_7(feature, value);
        ;

    return style;
};
