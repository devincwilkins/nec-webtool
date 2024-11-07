var wms_layers = [];


        var lyr_Background_0 = new ol.layer.Tile({
            'title': 'Background',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_NetworkSpeed_1 = new ol.format.GeoJSON();
var features_NetworkSpeed_1 = format_NetworkSpeed_1.readFeatures(json_NetworkSpeed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NetworkSpeed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NetworkSpeed_1.addFeatures(features_NetworkSpeed_1);
var lyr_NetworkSpeed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NetworkSpeed_1, 
                style: style_NetworkSpeed_1,
                popuplayertitle: "Network Speed",
                interactive: true,
    title: 'Network Speed<br />\
    <img src="styles/legend/NetworkSpeed_1_0.png" /> 40 - 60<br />\
    <img src="styles/legend/NetworkSpeed_1_1.png" /> 60 - 80<br />\
    <img src="styles/legend/NetworkSpeed_1_2.png" /> 80 - 100<br />\
    <img src="styles/legend/NetworkSpeed_1_3.png" /> 100 - 120<br />\
    <img src="styles/legend/NetworkSpeed_1_4.png" /> 120 - 140<br />\
    <img src="styles/legend/NetworkSpeed_1_5.png" /> 140 - 160<br />\
    <img src="styles/legend/NetworkSpeed_1_6.png" /> 160 - 180<br />\
    <img src="styles/legend/NetworkSpeed_1_7.png" /> 180 - 200<br />\
    <img src="styles/legend/NetworkSpeed_1_8.png" /> 200 - 220<br />\
    <img src="styles/legend/NetworkSpeed_1_9.png" /> 220 - 240<br />\
    <img src="styles/legend/NetworkSpeed_1_10.png" /> 240 - 260<br />\
    <img src="styles/legend/NetworkSpeed_1_11.png" /> 260 - 280<br />\
    <img src="styles/legend/NetworkSpeed_1_12.png" /> 280 - 300<br />\
    <img src="styles/legend/NetworkSpeed_1_13.png" /> 300 - 320<br />'
        });
var format_Platforms_2 = new ol.format.GeoJSON();
var features_Platforms_2 = format_Platforms_2.readFeatures(json_Platforms_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platforms_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platforms_2.addFeatures(features_Platforms_2);
var lyr_Platforms_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platforms_2, 
                style: style_Platforms_2,
                popuplayertitle: "Platforms",
                interactive: true,
                title: '<img src="styles/legend/Platforms_2.png" /> Platforms'
            });
var format_Takings_3 = new ol.format.GeoJSON();
var features_Takings_3 = format_Takings_3.readFeatures(json_Takings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Takings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Takings_3.addFeatures(features_Takings_3);
var lyr_Takings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Takings_3, 
                style: style_Takings_3,
                popuplayertitle: "Takings",
                interactive: true,
    title: 'Takings<br />\
    <img src="styles/legend/Takings_3_0.png" /> Commercial<br />\
    <img src="styles/legend/Takings_3_1.png" /> Conservation<br />\
    <img src="styles/legend/Takings_3_2.png" /> Mixed<br />\
    <img src="styles/legend/Takings_3_3.png" /> Residential<br />\
    <img src="styles/legend/Takings_3_4.png" /> <br />'
        });
var format_InfrastructureProjects_4 = new ol.format.GeoJSON();
var features_InfrastructureProjects_4 = format_InfrastructureProjects_4.readFeatures(json_InfrastructureProjects_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructureProjects_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructureProjects_4.addFeatures(features_InfrastructureProjects_4);
var lyr_InfrastructureProjects_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructureProjects_4, 
                style: style_InfrastructureProjects_4,
                popuplayertitle: "Infrastructure Projects",
                interactive: true,
                title: '<img src="styles/legend/InfrastructureProjects_4.png" /> Infrastructure Projects'
            });

lyr_Background_0.setVisible(true);lyr_NetworkSpeed_1.setVisible(true);lyr_Platforms_2.setVisible(true);lyr_Takings_3.setVisible(true);lyr_InfrastructureProjects_4.setVisible(true);
var layersList = [lyr_Background_0,lyr_NetworkSpeed_1,lyr_Platforms_2,lyr_Takings_3,lyr_InfrastructureProjects_4];
lyr_NetworkSpeed_1.set('fieldAliases', {'track_id': 'Track ', 'id': 'id', 'radius': 'Curve Radius', 'doc': 'doc', 'curve_id': 'curve_id', 'length': 'Segment Length', 'speed_cr': 'Max Speed [km]', 'Section': 'Section', 'dist_bost': 'dist_bost', 'track_sav': 'track_sav', 'speed_lim': 'speed_lim', 'Start_loc': 'Start Location', 'End_loc': 'End Location', 'ordered_id': 'Ordered ID', });
lyr_Platforms_2.set('fieldAliases', {'name': 'name', 'Stop_id': 'Stop_id', 'Turn_time': 'Turn_time', 'Capacity': 'Capacity', 'Stop_locat': 'Stop_locat', 'East_bound': 'East_bound', 'West_bound': 'West_bound', 'Is_turn': 'Is_turn', 'Length': 'Length', 'Track_1': 'Track_1', 'join1_dist': 'join1_dist', 'join1_trac': 'join1_trac', 'join1_Star': 'join1_Star', 'join1_End_': 'join1_End_', 'join1_shor': 'join1_shor', 'join1_sh_1': 'join1_sh_1', });
lyr_Takings_3.set('fieldAliases', {'zoning': 'zoning', 'id': 'id', 'Proj_Name': 'Proj_Name', 'area': 'area', });
lyr_InfrastructureProjects_4.set('fieldAliases', {'id': 'id', 'Proj_Name': 'Proj_Name', 'Proj_Type': 'Proj_Type', 'Proj_URL': 'Proj_URL', 'Low_Invest': 'Low_Invest', 'Hi_Invest': 'Hi_Invest', });
lyr_NetworkSpeed_1.set('fieldImages', {'track_id': 'TextEdit', 'id': 'TextEdit', 'radius': 'TextEdit', 'doc': 'TextEdit', 'curve_id': 'TextEdit', 'length': 'TextEdit', 'speed_cr': 'TextEdit', 'Section': 'TextEdit', 'dist_bost': 'TextEdit', 'track_sav': 'TextEdit', 'speed_lim': 'TextEdit', 'Start_loc': 'TextEdit', 'End_loc': 'TextEdit', 'ordered_id': 'TextEdit', });
lyr_Platforms_2.set('fieldImages', {'name': '', 'Stop_id': '', 'Turn_time': '', 'Capacity': '', 'Stop_locat': '', 'East_bound': '', 'West_bound': '', 'Is_turn': '', 'Length': '', 'Track_1': '', 'join1_dist': '', 'join1_trac': '', 'join1_Star': '', 'join1_End_': '', 'join1_shor': '', 'join1_sh_1': '', });
lyr_Takings_3.set('fieldImages', {'zoning': 'TextEdit', 'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'area': '', });
lyr_InfrastructureProjects_4.set('fieldImages', {'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'Proj_Type': '', 'Proj_URL': '', 'Low_Invest': '', 'Hi_Invest': '', });
lyr_NetworkSpeed_1.set('fieldLabels', {'track_id': 'no label', 'id': 'inline label - always visible', 'radius': 'inline label - always visible', 'doc': 'no label', 'curve_id': 'no label', 'length': 'inline label - always visible', 'speed_cr': 'inline label - always visible', 'Section': 'no label', 'dist_bost': 'no label', 'track_sav': 'inline label - always visible', 'speed_lim': 'no label', 'Start_loc': 'inline label - always visible', 'End_loc': 'inline label - always visible', 'ordered_id': 'inline label - always visible', });
lyr_Platforms_2.set('fieldLabels', {'name': 'inline label - always visible', 'Stop_id': 'inline label - always visible', 'Turn_time': 'no label', 'Capacity': 'no label', 'Stop_locat': 'no label', 'East_bound': 'inline label - always visible', 'West_bound': 'inline label - always visible', 'Is_turn': 'no label', 'Length': 'inline label - always visible', 'Track_1': 'no label', 'join1_dist': 'no label', 'join1_trac': 'no label', 'join1_Star': 'no label', 'join1_End_': 'no label', 'join1_shor': 'no label', 'join1_sh_1': 'no label', });
lyr_Takings_3.set('fieldLabels', {'zoning': 'inline label - always visible', 'id': 'inline label - always visible', 'Proj_Name': 'inline label - always visible', 'area': 'inline label - always visible', });
lyr_InfrastructureProjects_4.set('fieldLabels', {'id': 'hidden field', 'Proj_Name': 'inline label - visible with data', 'Proj_Type': 'inline label - visible with data', 'Proj_URL': 'no label', 'Low_Invest': 'no label', 'Hi_Invest': 'no label', });
lyr_InfrastructureProjects_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});