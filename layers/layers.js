var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_InfrastructureProjects_1 = new ol.format.GeoJSON();
var features_InfrastructureProjects_1 = format_InfrastructureProjects_1.readFeatures(json_InfrastructureProjects_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructureProjects_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructureProjects_1.addFeatures(features_InfrastructureProjects_1);
var lyr_InfrastructureProjects_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructureProjects_1, 
                style: style_InfrastructureProjects_1,
                popuplayertitle: "Infrastructure Projects",
                interactive: true,
                title: '<img src="styles/legend/InfrastructureProjects_1.png" /> Infrastructure Projects'
            });
var format_Network_September10_2 = new ol.format.GeoJSON();
var features_Network_September10_2 = format_Network_September10_2.readFeatures(json_Network_September10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Network_September10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Network_September10_2.addFeatures(features_Network_September10_2);
var lyr_Network_September10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Network_September10_2, 
                style: style_Network_September10_2,
                popuplayertitle: "Network_September10",
                interactive: true,
    title: 'Network_September10<br />\
    <img src="styles/legend/Network_September10_2_0.png" /> 0 - 0.25<br />\
    <img src="styles/legend/Network_September10_2_1.png" /> 0.25 - 0.5<br />\
    <img src="styles/legend/Network_September10_2_2.png" /> 0.5 - 0.75<br />\
    <img src="styles/legend/Network_September10_2_3.png" /> 0.75 - 1<br />\
    <img src="styles/legend/Network_September10_2_4.png" /> 1 - 1.25<br />\
    <img src="styles/legend/Network_September10_2_5.png" /> 1.25 - 1.5<br />\
    <img src="styles/legend/Network_September10_2_6.png" /> 1.5 - 1.75<br />\
    <img src="styles/legend/Network_September10_2_7.png" /> 1.75 - 2<br />\
    <img src="styles/legend/Network_September10_2_8.png" /> 2 - 2.25<br />\
    <img src="styles/legend/Network_September10_2_9.png" /> 2.25 - 2.5<br />\
    <img src="styles/legend/Network_September10_2_10.png" /> 2.5 - 2.75<br />\
    <img src="styles/legend/Network_September10_2_11.png" /> 2.75 - 3<br />\
    <img src="styles/legend/Network_September10_2_12.png" /> 3 - 3.25<br />\
    <img src="styles/legend/Network_September10_2_13.png" /> 3.25 - 3.5<br />\
    <img src="styles/legend/Network_September10_2_14.png" /> 3.5 - 3.75<br />\
    <img src="styles/legend/Network_September10_2_15.png" /> 3.75 - 4<br />\
    <img src="styles/legend/Network_September10_2_16.png" /> 4 - 4.25<br />\
    <img src="styles/legend/Network_September10_2_17.png" /> 4.25 - 4.5<br />\
    <img src="styles/legend/Network_September10_2_18.png" /> 4.5 - 4.75<br />\
    <img src="styles/legend/Network_September10_2_19.png" /> 4.75 - 5<br />\
    <img src="styles/legend/Network_September10_2_20.png" /> 5 - 5.25<br />\
    <img src="styles/legend/Network_September10_2_21.png" /> 5.25 - 5.5<br />\
    <img src="styles/legend/Network_September10_2_22.png" /> 5.5 - 5.75<br />\
    <img src="styles/legend/Network_September10_2_23.png" /> 5.75 - 6<br />\
    <img src="styles/legend/Network_September10_2_24.png" /> 6 - 6.25<br />\
    <img src="styles/legend/Network_September10_2_25.png" /> 6.25 - 6.5<br />\
    <img src="styles/legend/Network_September10_2_26.png" /> 6.5 - 6.75<br />\
    <img src="styles/legend/Network_September10_2_27.png" /> 6.75 - 7<br />\
    <img src="styles/legend/Network_September10_2_28.png" /> 7 - 7.25<br />\
    <img src="styles/legend/Network_September10_2_29.png" /> 7.25 - 7.5<br />\
    <img src="styles/legend/Network_September10_2_30.png" /> 7.5 - 7.75<br />\
    <img src="styles/legend/Network_September10_2_31.png" /> 7.75 - 8<br />\
    <img src="styles/legend/Network_September10_2_32.png" /> 8 - 8.25<br />\
    <img src="styles/legend/Network_September10_2_33.png" /> 8.25 - 8.5<br />\
    <img src="styles/legend/Network_September10_2_34.png" /> 8.5 - 8.75<br />\
    <img src="styles/legend/Network_September10_2_35.png" /> 8.75 - 9<br />\
    <img src="styles/legend/Network_September10_2_36.png" /> 9 - 9.25<br />\
    <img src="styles/legend/Network_September10_2_37.png" /> 9.25 - 9.5<br />\
    <img src="styles/legend/Network_September10_2_38.png" /> 9.5 - 9.75<br />\
    <img src="styles/legend/Network_September10_2_39.png" /> 9.75 - 10<br />'
        });
var format_Platforms_3 = new ol.format.GeoJSON();
var features_Platforms_3 = format_Platforms_3.readFeatures(json_Platforms_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platforms_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platforms_3.addFeatures(features_Platforms_3);
var lyr_Platforms_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platforms_3, 
                style: style_Platforms_3,
                popuplayertitle: "Platforms",
                interactive: true,
                title: '<img src="styles/legend/Platforms_3.png" /> Platforms'
            });
var format_15m_takings_4 = new ol.format.GeoJSON();
var features_15m_takings_4 = format_15m_takings_4.readFeatures(json_15m_takings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_15m_takings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15m_takings_4.addFeatures(features_15m_takings_4);
var lyr_15m_takings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15m_takings_4, 
                style: style_15m_takings_4,
                popuplayertitle: "15m_takings",
                interactive: true,
    title: '15m_takings<br />\
    <img src="styles/legend/15m_takings_4_0.png" /> Commercial<br />\
    <img src="styles/legend/15m_takings_4_1.png" /> Residential<br />\
    <img src="styles/legend/15m_takings_4_2.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr_InfrastructureProjects_1.setVisible(true);lyr_Network_September10_2.setVisible(true);lyr_Platforms_3.setVisible(true);lyr_15m_takings_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_InfrastructureProjects_1,lyr_Network_September10_2,lyr_Platforms_3,lyr_15m_takings_4];
lyr_InfrastructureProjects_1.set('fieldAliases', {'id': 'id', 'Proj_Name': 'Proj_Name', 'Proj_Type': 'Proj_Type', 'Proj_URL': 'Proj_URL', });
lyr_Network_September10_2.set('fieldAliases', {'track_id': 'track_id', '30thSt': '30thSt', 'id': 'id', 'radius': 'radius', 'doc': 'doc', 'curve_id': 'curve_id', 'length': 'length', 'speed_cr': 'speed_cr', 'Section': 'Section', 'track_sav': 'track_sav', 'dist_bost': 'dist_bost', });
lyr_Platforms_3.set('fieldAliases', {'name': 'name', 'export': 'export', 'direction': 'direction', 'Stop_id': 'Stop_id', 'Turn_time': 'Turn_time', 'Capacity': 'Capacity', 'Stop_locat': 'Stop_locat', 'East_bound': 'East_bound', 'West_bound': 'West_bound', 'Is_turn': 'Is_turn', 'Track': 'Track', 'Length': 'Length', 'layer': 'layer', 'path': 'path', });
lyr_15m_takings_4.set('fieldAliases', {'full_id': 'full_id', 'height': 'height', 'shape_area': 'shape_area', 'zoning': 'zoning', });
lyr_InfrastructureProjects_1.set('fieldImages', {'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'Proj_Type': '', 'Proj_URL': '', });
lyr_Network_September10_2.set('fieldImages', {'track_id': 'TextEdit', '30thSt': 'TextEdit', 'id': 'TextEdit', 'radius': 'TextEdit', 'doc': 'TextEdit', 'curve_id': 'TextEdit', 'length': 'TextEdit', 'speed_cr': 'TextEdit', 'Section': 'TextEdit', 'track_sav': 'TextEdit', 'dist_bost': 'TextEdit', });
lyr_Platforms_3.set('fieldImages', {'name': 'TextEdit', 'export': 'TextEdit', 'direction': 'TextEdit', 'Stop_id': 'TextEdit', 'Turn_time': 'TextEdit', 'Capacity': 'TextEdit', 'Stop_locat': 'TextEdit', 'East_bound': 'TextEdit', 'West_bound': 'TextEdit', 'Is_turn': 'TextEdit', 'Track': 'TextEdit', 'Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_15m_takings_4.set('fieldImages', {'full_id': 'TextEdit', 'height': 'TextEdit', 'shape_area': 'TextEdit', 'zoning': 'TextEdit', });
lyr_InfrastructureProjects_1.set('fieldLabels', {'id': 'hidden field', 'Proj_Name': 'inline label - visible with data', 'Proj_Type': 'inline label - visible with data', 'Proj_URL': 'no label', });
lyr_Network_September10_2.set('fieldLabels', {'track_id': 'no label', '30thSt': 'no label', 'id': 'no label', 'radius': 'no label', 'doc': 'no label', 'curve_id': 'no label', 'length': 'no label', 'speed_cr': 'no label', 'Section': 'no label', 'track_sav': 'no label', 'dist_bost': 'no label', });
lyr_Platforms_3.set('fieldLabels', {'name': 'no label', 'export': 'no label', 'direction': 'no label', 'Stop_id': 'no label', 'Turn_time': 'no label', 'Capacity': 'no label', 'Stop_locat': 'no label', 'East_bound': 'no label', 'West_bound': 'no label', 'Is_turn': 'no label', 'Track': 'no label', 'Length': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_15m_takings_4.set('fieldLabels', {'full_id': 'no label', 'height': 'no label', 'shape_area': 'no label', 'zoning': 'no label', });
lyr_15m_takings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});