var size = 0;
var placement = 'point';

var style_Superficiedeparcfrais400m_5 = function(feature, resolution){
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
    
        function rules_Superficiedeparcfrais400m_5(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Superficiedeparcfrais400m_5rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,254,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Superficiedeparcfrais400m_5rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,250,219,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Superficiedeparcfrais400m_5rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,235,197,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Superficiedeparcfrais400m_5rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(61,167,90,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_Superficiedeparcfrais400m_5rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,68,27,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Superficiedeparcfrais400m_5(feature, value);
        ;

    return style;
};
