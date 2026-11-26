var wms_layers = [];


        var lyr_FonddecarteCarto_0 = new ol.layer.Tile({
            'title': 'Fond de carte (© Carto)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png?key=cb1_3usm_1_0d7e153a37374395c55bee13'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Densitrsidentielle_2 = new ol.format.GeoJSON();
var features_Densitrsidentielle_2 = format_Densitrsidentielle_2.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densitrsidentielle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densitrsidentielle_2.addFeatures(features_Densitrsidentielle_2);
var lyr_Densitrsidentielle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Densitrsidentielle_2, 
                style: style_Densitrsidentielle_2,
                popuplayertitle: 'Densité résidentielle',
                interactive: false,
    title: 'Densité résidentielle<br />\
    <img src="styles/legend/Densitrsidentielle_2_0.png" /> Aucun logement<br />\
    <img src="styles/legend/Densitrsidentielle_2_1.png" /> 1 - 10<br />\
    <img src="styles/legend/Densitrsidentielle_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/Densitrsidentielle_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/Densitrsidentielle_2_4.png" /> 20 - 25<br />\
    <img src="styles/legend/Densitrsidentielle_2_5.png" /> 25 - 30<br />\
    <img src="styles/legend/Densitrsidentielle_2_6.png" /> 30 - 60<br />\
    <img src="styles/legend/Densitrsidentielle_2_7.png" /> 60 - 90<br />\
    <img src="styles/legend/Densitrsidentielle_2_8.png" /> 90 - 120<br />\
    <img src="styles/legend/Densitrsidentielle_2_9.png" /> 120 - 656<br />' });
var format_Indicededfavorisation_3 = new ol.format.GeoJSON();
var features_Indicededfavorisation_3 = format_Indicededfavorisation_3.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicededfavorisation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicededfavorisation_3.addFeatures(features_Indicededfavorisation_3);
var lyr_Indicededfavorisation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicededfavorisation_3, 
                style: style_Indicededfavorisation_3,
                popuplayertitle: 'Indice de défavorisation',
                interactive: false,
    title: 'Indice de défavorisation<br />\
    <img src="styles/legend/Indicededfavorisation_3_0.png" /> AD matériellement et socialement très favorisées<br />\
    <img src="styles/legend/Indicededfavorisation_3_1.png" /> AD moyennes<br />\
    <img src="styles/legend/Indicededfavorisation_3_2.png" /> AD socialement très défavorisées<br />\
    <img src="styles/legend/Indicededfavorisation_3_3.png" /> AD matériellement très défavorisées<br />\
    <img src="styles/legend/Indicededfavorisation_3_4.png" /> AD matériellement et socialement très défavorisées<br />\
    <img src="styles/legend/Indicededfavorisation_3_5.png" /> AD sans indice<br />' });
var format_lotsdechaleursurbains_4 = new ol.format.GeoJSON();
var features_lotsdechaleursurbains_4 = format_lotsdechaleursurbains_4.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotsdechaleursurbains_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotsdechaleursurbains_4.addFeatures(features_lotsdechaleursurbains_4);
var lyr_lotsdechaleursurbains_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotsdechaleursurbains_4, 
                style: style_lotsdechaleursurbains_4,
                popuplayertitle: 'Îlots de chaleurs urbains',
                interactive: false,
    title: 'Îlots de chaleurs urbains<br />\
    <img src="styles/legend/lotsdechaleursurbains_4_0.png" /> ≤ 30%<br />\
    <img src="styles/legend/lotsdechaleursurbains_4_1.png" /> > 30 à 60%<br />\
    <img src="styles/legend/lotsdechaleursurbains_4_2.png" /> > 60 à 70%<br />\
    <img src="styles/legend/lotsdechaleursurbains_4_3.png" /> > 70%<br />' });
var format_Superficiedeparcfrais400m_5 = new ol.format.GeoJSON();
var features_Superficiedeparcfrais400m_5 = format_Superficiedeparcfrais400m_5.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Superficiedeparcfrais400m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Superficiedeparcfrais400m_5.addFeatures(features_Superficiedeparcfrais400m_5);
var lyr_Superficiedeparcfrais400m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Superficiedeparcfrais400m_5, 
                style: style_Superficiedeparcfrais400m_5,
                popuplayertitle: 'Superficie de parc «frais» à 400m',
                interactive: false,
    title: 'Superficie de parc «frais» à 400m<br />\
    <img src="styles/legend/Superficiedeparcfrais400m_5_0.png" /> Pas d\'accès à un parc à moins de 400m<br />\
    <img src="styles/legend/Superficiedeparcfrais400m_5_1.png" /> moins de 250m2<br />\
    <img src="styles/legend/Superficiedeparcfrais400m_5_2.png" /> 250 à 500m2<br />\
    <img src="styles/legend/Superficiedeparcfrais400m_5_3.png" /> 500 à 1500m2<br />\
    <img src="styles/legend/Superficiedeparcfrais400m_5_4.png" /> plus de 1500m2<br />' });
var format_Diversitdelogementselonlenombredechambres_6 = new ol.format.GeoJSON();
var features_Diversitdelogementselonlenombredechambres_6 = format_Diversitdelogementselonlenombredechambres_6.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diversitdelogementselonlenombredechambres_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diversitdelogementselonlenombredechambres_6.addFeatures(features_Diversitdelogementselonlenombredechambres_6);
var lyr_Diversitdelogementselonlenombredechambres_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diversitdelogementselonlenombredechambres_6, 
                style: style_Diversitdelogementselonlenombredechambres_6,
                popuplayertitle: 'Diversité de logement selon le nombre de chambres',
                interactive: false,
    title: 'Diversité de logement selon le nombre de chambres<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_0.png" /> Sans logement<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_1.png" /> Diversité optimale (≥ 20% toute taille)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_2.png" /> Manque de grands logements (3+ ch.)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_3.png" /> Manque de logements moyens (2 ch.)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_4.png" /> Manque de petits logements (0-1 ch.)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_5.png" /> Majorité de petits log. (manque 2 et 3+ ch.)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_6.png" /> Majorité de moyens log. (manque 0-1 et 3+ ch.)<br />\
    <img src="styles/legend/Diversitdelogementselonlenombredechambres_6_7.png" /> Majorité de grands log. (manque 0-1 et 2 ch.)<br />' });
var format_Tauxdemnageslocataires_7 = new ol.format.GeoJSON();
var features_Tauxdemnageslocataires_7 = format_Tauxdemnageslocataires_7.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdemnageslocataires_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdemnageslocataires_7.addFeatures(features_Tauxdemnageslocataires_7);
var lyr_Tauxdemnageslocataires_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tauxdemnageslocataires_7, 
                style: style_Tauxdemnageslocataires_7,
                popuplayertitle: 'Taux de ménages locataires',
                interactive: false,
    title: 'Taux de ménages locataires<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_0.png" /> Aucun logement<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_1.png" /> 0 - 10<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_2.png" /> 10 - 20<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_3.png" /> 20 - 30<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_4.png" /> 30 - 40<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_5.png" /> 40-50<br />\
    <img src="styles/legend/Tauxdemnageslocataires_7_6.png" /> 50 - 100<br />' });
var format_Tauxdevoiriemarchablepondr_8 = new ol.format.GeoJSON();
var features_Tauxdevoiriemarchablepondr_8 = format_Tauxdevoiriemarchablepondr_8.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdevoiriemarchablepondr_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdevoiriemarchablepondr_8.addFeatures(features_Tauxdevoiriemarchablepondr_8);
var lyr_Tauxdevoiriemarchablepondr_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tauxdevoiriemarchablepondr_8, 
                style: style_Tauxdevoiriemarchablepondr_8,
                popuplayertitle: 'Taux de voirie marchable pondéré',
                interactive: false,
    title: 'Taux de voirie marchable pondéré<br />\
    <img src="styles/legend/Tauxdevoiriemarchablepondr_8_0.png" /> Très faible (0 - 25)<br />\
    <img src="styles/legend/Tauxdevoiriemarchablepondr_8_1.png" /> Faible (25 - 50)<br />\
    <img src="styles/legend/Tauxdevoiriemarchablepondr_8_2.png" /> Moyen (50 - 70)<br />\
    <img src="styles/legend/Tauxdevoiriemarchablepondr_8_3.png" /> Bon (70 - 90)<br />\
    <img src="styles/legend/Tauxdevoiriemarchablepondr_8_4.png" /> Optimal (90 - 100)<br />' });
var format_Accessibilitdesdestinations_9 = new ol.format.GeoJSON();
var features_Accessibilitdesdestinations_9 = format_Accessibilitdesdestinations_9.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accessibilitdesdestinations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accessibilitdesdestinations_9.addFeatures(features_Accessibilitdesdestinations_9);
var lyr_Accessibilitdesdestinations_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accessibilitdesdestinations_9, 
                style: style_Accessibilitdesdestinations_9,
                popuplayertitle: 'Accessibilité des destinations',
                interactive: false,
    title: 'Accessibilité des destinations<br />\
    <img src="styles/legend/Accessibilitdesdestinations_9_0.png" /> Faible (0-55)<br />\
    <img src="styles/legend/Accessibilitdesdestinations_9_1.png" /> Moyen (55-80)<br />\
    <img src="styles/legend/Accessibilitdesdestinations_9_2.png" /> Élevé (81-100)<br />\
    <img src="styles/legend/Accessibilitdesdestinations_9_3.png" /> Optimal (100)<br />' });
var format_Hexagonessanslogement_10 = new ol.format.GeoJSON();
var features_Hexagonessanslogement_10 = format_Hexagonessanslogement_10.readFeatures(json_Densitrsidentielle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hexagonessanslogement_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hexagonessanslogement_10.addFeatures(features_Hexagonessanslogement_10);
var lyr_Hexagonessanslogement_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hexagonessanslogement_10, 
                style: style_Hexagonessanslogement_10,
                popuplayertitle: 'Hexagones sans logement',
                interactive: false,
    title: 'Hexagones sans logement<br />\
    <img src="styles/legend/Hexagonessanslogement_10_0.png" /> Sans logement<br />' });
var format_Primtresdurbanisation_11 = new ol.format.GeoJSON();
var features_Primtresdurbanisation_11 = format_Primtresdurbanisation_11.readFeatures(json_Primtresdurbanisation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtresdurbanisation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtresdurbanisation_11.addFeatures(features_Primtresdurbanisation_11);
var lyr_Primtresdurbanisation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtresdurbanisation_11, 
                style: style_Primtresdurbanisation_11,
                popuplayertitle: 'Périmètres d\'urbanisation',
                interactive: false,
                title: '<img src="styles/legend/Primtresdurbanisation_11.png" /> Périmètres d\'urbanisation'
            });
var format_RseaudemarcheMandres_12 = new ol.format.GeoJSON();
var features_RseaudemarcheMandres_12 = format_RseaudemarcheMandres_12.readFeatures(json_RseaudemarcheMandres_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RseaudemarcheMandres_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RseaudemarcheMandres_12.addFeatures(features_RseaudemarcheMandres_12);
var lyr_RseaudemarcheMandres_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RseaudemarcheMandres_12, 
                style: style_RseaudemarcheMandres_12,
                popuplayertitle: 'Réseau de marche (Méandres)',
                interactive: false,
                title: '<img src="styles/legend/RseaudemarcheMandres_12.png" /> Réseau de marche (Méandres)'
            });
var group_Rfrentielsetmasques = new ol.layer.Group({
                                layers: [lyr_Hexagonessanslogement_10,lyr_Primtresdurbanisation_11,lyr_RseaudemarcheMandres_12,],
                                fold: 'open',
                                title: 'Référentiels et masques'});
var group_Mobilit = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mobilité'});
var group_Habitation = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Habitation'});
var group_Destinations = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Destinations'});
var group_ICUVerdissement = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ICU / Verdissement'});
var group_Socioconomique = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Socioéconomique'});

lyr_FonddecarteCarto_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_Densitrsidentielle_2.setVisible(true);lyr_Indicededfavorisation_3.setVisible(false);lyr_lotsdechaleursurbains_4.setVisible(false);lyr_Superficiedeparcfrais400m_5.setVisible(false);lyr_Diversitdelogementselonlenombredechambres_6.setVisible(false);lyr_Tauxdemnageslocataires_7.setVisible(false);lyr_Tauxdevoiriemarchablepondr_8.setVisible(false);lyr_Accessibilitdesdestinations_9.setVisible(false);lyr_Hexagonessanslogement_10.setVisible(true);lyr_Primtresdurbanisation_11.setVisible(true);lyr_RseaudemarcheMandres_12.setVisible(false);
var layersList = [lyr_FonddecarteCarto_0,lyr_GoogleSatellite_1,lyr_Densitrsidentielle_2,lyr_Indicededfavorisation_3,lyr_lotsdechaleursurbains_4,lyr_Superficiedeparcfrais400m_5,lyr_Diversitdelogementselonlenombredechambres_6,lyr_Tauxdemnageslocataires_7,lyr_Tauxdevoiriemarchablepondr_8,lyr_Accessibilitdesdestinations_9,group_Rfrentielsetmasques];
lyr_Densitrsidentielle_2.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Indicededfavorisation_3.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_lotsdechaleursurbains_4.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Superficiedeparcfrais400m_5.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Diversitdelogementselonlenombredechambres_6.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Tauxdemnageslocataires_7.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Tauxdevoiriemarchablepondr_8.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Accessibilitdesdestinations_9.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', });
lyr_Hexagonessanslogement_10.set('fieldAliases', {'fid': 'fid', 'GRID_ID': 'GRID_ID', 'sum_LOG': 'sum_LOG', 'IDefComRTS': 'IDefComRTS', 'MOB_taux_voies_marchables': 'MOB_taux_voies_marchables', 'tx_locataire': 'tx_locataire', 'surface_IFU': 'surface_IFU', 'DES_score': 'DES_score', 'ICU_mean': 'ICU_mean', 'tx_0-1_chmbr': 'tx_0-1_chmbr', 'tx_2_chmbr': 'tx_2_chmbr', 'tx_3p_chmbr': 'tx_3p_chmbr', 'VERIF_tx_chmbr': 'VERIF_tx_chmbr', 'sum_LOG_2': 'sum_LOG_2', });
lyr_Primtresdurbanisation_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'fid_aqcart': 'fid_aqcart', 'idlimmun': 'idlimmun', 'version': 'version', 'codemun': 'codemun', 'nommun': 'nommun', 'type': 'type', 'codemrc': 'codemrc', 'nommrc': 'nommrc', 'codereg': 'codereg', 'nomreg': 'nomreg', 'nomcommet': 'nomcommet', 'nommuncomp': 'nommuncomp', 'shape_leng': 'shape_leng', 'fid_perime': 'fid_perime', 'identifian': 'identifian', 'theme_prov': 'theme_prov', 'code_terri': 'code_terri', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', 'secteur': 'secteur', });
lyr_RseaudemarcheMandres_12.set('fieldAliases', {'fid': 'fid', 'meandres': 'meandres', });
lyr_Densitrsidentielle_2.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': 'TextEdit', 'tx_locataire': 'Range', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': 'TextEdit', 'tx_2_chmbr': 'TextEdit', 'tx_3p_chmbr': 'TextEdit', 'VERIF_tx_chmbr': 'TextEdit', 'sum_LOG_2': '', });
lyr_Indicededfavorisation_3.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': '', 'surface_IFU': '', 'DES_score': '', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', 'VERIF_tx_chmbr': '', 'sum_LOG_2': '', });
lyr_lotsdechaleursurbains_4.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': '', 'surface_IFU': '', 'DES_score': '', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', 'VERIF_tx_chmbr': '', 'sum_LOG_2': '', });
lyr_Superficiedeparcfrais400m_5.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': '', 'surface_IFU': 'TextEdit', 'DES_score': '', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', 'VERIF_tx_chmbr': '', 'sum_LOG_2': '', });
lyr_Diversitdelogementselonlenombredechambres_6.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': 'Range', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': 'TextEdit', 'tx_2_chmbr': 'TextEdit', 'tx_3p_chmbr': 'TextEdit', 'VERIF_tx_chmbr': 'TextEdit', 'sum_LOG_2': '', });
lyr_Tauxdemnageslocataires_7.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': 'Range', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', 'VERIF_tx_chmbr': '', 'sum_LOG_2': '', });
lyr_Tauxdevoiriemarchablepondr_8.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': 'TextEdit', 'tx_locataire': 'Range', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': 'TextEdit', 'tx_2_chmbr': 'TextEdit', 'tx_3p_chmbr': 'TextEdit', 'VERIF_tx_chmbr': 'TextEdit', 'sum_LOG_2': '', });
lyr_Accessibilitdesdestinations_9.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': '', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', });
lyr_Hexagonessanslogement_10.set('fieldImages', {'fid': 'TextEdit', 'GRID_ID': 'TextEdit', 'sum_LOG': 'TextEdit', 'IDefComRTS': 'TextEdit', 'MOB_taux_voies_marchables': '', 'tx_locataire': '', 'surface_IFU': '', 'DES_score': 'TextEdit', 'ICU_mean': '', 'tx_0-1_chmbr': '', 'tx_2_chmbr': '', 'tx_3p_chmbr': '', 'VERIF_tx_chmbr': '', 'sum_LOG_2': '', });
lyr_Primtresdurbanisation_11.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'fid_aqcart': 'Hidden', 'idlimmun': 'Hidden', 'version': 'Hidden', 'codemun': 'Hidden', 'nommun': 'TextEdit', 'type': 'Hidden', 'codemrc': 'Hidden', 'nommrc': 'Hidden', 'codereg': 'Hidden', 'nomreg': 'Hidden', 'nomcommet': 'Hidden', 'nommuncomp': 'Hidden', 'shape_leng': 'Hidden', 'fid_perime': 'Hidden', 'identifian': 'Hidden', 'theme_prov': 'Hidden', 'code_terri': 'Hidden', 'shape_le_1': 'Hidden', 'shape_le_2': 'Hidden', 'shape_area': 'Hidden', 'secteur': 'Hidden', });
lyr_RseaudemarcheMandres_12.set('fieldImages', {'fid': 'TextEdit', 'meandres': 'Range', });
lyr_Densitrsidentielle_2.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Indicededfavorisation_3.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_lotsdechaleursurbains_4.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Superficiedeparcfrais400m_5.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Diversitdelogementselonlenombredechambres_6.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Tauxdemnageslocataires_7.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Tauxdevoiriemarchablepondr_8.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Accessibilitdesdestinations_9.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', });
lyr_Hexagonessanslogement_10.set('fieldLabels', {'fid': 'no label', 'GRID_ID': 'no label', 'sum_LOG': 'no label', 'IDefComRTS': 'no label', 'MOB_taux_voies_marchables': 'no label', 'tx_locataire': 'no label', 'surface_IFU': 'no label', 'DES_score': 'no label', 'ICU_mean': 'no label', 'tx_0-1_chmbr': 'no label', 'tx_2_chmbr': 'no label', 'tx_3p_chmbr': 'no label', 'VERIF_tx_chmbr': 'no label', 'sum_LOG_2': 'no label', });
lyr_Primtresdurbanisation_11.set('fieldLabels', {'nommun': 'no label', });
lyr_RseaudemarcheMandres_12.set('fieldLabels', {'fid': 'no label', 'meandres': 'no label', });
lyr_RseaudemarcheMandres_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});