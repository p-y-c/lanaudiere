var size = 0;
var placement = 'point';

var style_Hexagonessanslogement_10 = function(feature, resolution){
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
    
        function rules_Hexagonessanslogement_10(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_Hexagonessanslogement_10rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.6)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_Hexagonessanslogement_10(feature, value);
        ;

    return style;
};
