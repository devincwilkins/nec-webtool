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
var format_Network_October22_J_Speed_1 = new ol.format.GeoJSON();
var features_Network_October22_J_Speed_1 = format_Network_October22_J_Speed_1.readFeatures(json_Network_October22_J_Speed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Network_October22_J_Speed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Network_October22_J_Speed_1.addFeatures(features_Network_October22_J_Speed_1);
var lyr_Network_October22_J_Speed_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Network_October22_J_Speed_1, 
                style: style_Network_October22_J_Speed_1,
                popuplayertitle: "Network_October22_J_Speed",
                interactive: true,
    title: 'Network_October22_J_Speed<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_0.png" /> 71 - 96<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_1.png" /> 96 - 121<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_2.png" /> 121 - 146<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_3.png" /> 146 - 171<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_4.png" /> 171 - 196<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_5.png" /> 196 - 221<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_6.png" /> 221 - 246<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_7.png" /> 246 - 271<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_8.png" /> 271 - 296<br />\
    <img src="styles/legend/Network_October22_J_Speed_1_9.png" /> 296 - 321<br />'
        });
var format_Platforms_October22_J_2 = new ol.format.GeoJSON();
var features_Platforms_October22_J_2 = format_Platforms_October22_J_2.readFeatures(json_Platforms_October22_J_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platforms_October22_J_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platforms_October22_J_2.addFeatures(features_Platforms_October22_J_2);
var lyr_Platforms_October22_J_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platforms_October22_J_2, 
                style: style_Platforms_October22_J_2,
                popuplayertitle: "Platforms_October22_J",
                interactive: true,
                title: '<img src="styles/legend/Platforms_October22_J_2.png" /> Platforms_October22_J'
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
var group_takings = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "takings"});

lyr_Background_0.setVisible(true);lyr_Network_October22_J_Speed_1.setVisible(true);lyr_Platforms_October22_J_2.setVisible(true);lyr_Takings_3.setVisible(true);lyr_InfrastructureProjects_4.setVisible(true);
var layersList = [lyr_Background_0,lyr_Network_October22_J_Speed_1,lyr_Platforms_October22_J_2,lyr_Takings_3,lyr_InfrastructureProjects_4];
lyr_Network_October22_J_Speed_1.set('fieldAliases', {'track_id': 'track_id', 'id': 'id', 'radius': 'radius', 'doc': 'doc', 'curve_id': 'curve_id', 'length': 'length', 'speed_cr': 'speed_cr', 'Section': 'Section', 'dist_bost': 'dist_bost', 'track_sav': 'track_sav', 'Start_loc': 'Start_loc', 'End_loc': 'End_loc', 'ordered_id': 'ordered_id', });
lyr_Platforms_October22_J_2.set('fieldAliases', {'name': 'name', 'export': 'export', 'direction': 'direction', 'Stop_id': 'Stop_id', 'Turn_time': 'Turn_time', 'Capacity': 'Capacity', 'Stop_locat': 'Stop_locat', 'East_bound': 'East_bound', 'West_bound': 'West_bound', 'Is_turn': 'Is_turn', 'Length': 'Length', 'Track_1': 'Track_1', 'Track_2': 'Track_2', 'join1_dist': 'join1_dist', 'join1_trac': 'join1_trac', 'join1_Star': 'join1_Star', 'join1_End_': 'join1_End_', 'join1_shor': 'join1_shor', 'join1_sh_1': 'join1_sh_1', 'join2_dist': 'join2_dist', 'join2_trac': 'join2_trac', 'join2_Star': 'join2_Star', 'join2_End_': 'join2_End_', 'join2_shor': 'join2_shor', 'join2_sh_1': 'join2_sh_1', });
lyr_Takings_3.set('fieldAliases', {'zoning': 'zoning', 'id': 'id', 'Proj_Name': 'Proj_Name', 'area': 'area', });
lyr_InfrastructureProjects_4.set('fieldAliases', {'id': 'id', 'Proj_Name': 'Proj_Name', 'Proj_Type': 'Proj_Type', 'Proj_URL': 'Proj_URL', 'Low_Invest': 'Low_Invest', 'Hi_Invest': 'Hi_Invest', });
lyr_Network_October22_J_Speed_1.set('fieldImages', {'track_id': 'TextEdit', 'id': 'TextEdit', 'radius': 'TextEdit', 'doc': 'TextEdit', 'curve_id': 'TextEdit', 'length': 'TextEdit', 'speed_cr': 'TextEdit', 'Section': 'TextEdit', 'dist_bost': 'TextEdit', 'track_sav': 'TextEdit', 'Start_loc': 'TextEdit', 'End_loc': 'TextEdit', 'ordered_id': 'TextEdit', });
lyr_Platforms_October22_J_2.set('fieldImages', {'name': '', 'export': '', 'direction': '', 'Stop_id': '', 'Turn_time': '', 'Capacity': '', 'Stop_locat': '', 'East_bound': '', 'West_bound': '', 'Is_turn': '', 'Length': '', 'Track_1': '', 'Track_2': '', 'join1_dist': '', 'join1_trac': '', 'join1_Star': '', 'join1_End_': '', 'join1_shor': '', 'join1_sh_1': '', 'join2_dist': '', 'join2_trac': '', 'join2_Star': '', 'join2_End_': '', 'join2_shor': '', 'join2_sh_1': '', });
lyr_Takings_3.set('fieldImages', {'zoning': 'TextEdit', 'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'area': '', });
lyr_InfrastructureProjects_4.set('fieldImages', {'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'Proj_Type': '', 'Proj_URL': '', 'Low_Invest': '', 'Hi_Invest': '', });
lyr_Network_October22_J_Speed_1.set('fieldLabels', {'track_id': 'no label', 'id': 'no label', 'radius': 'no label', 'doc': 'no label', 'curve_id': 'no label', 'length': 'no label', 'speed_cr': 'no label', 'Section': 'no label', 'dist_bost': 'no label', 'track_sav': 'no label', 'Start_loc': 'no label', 'End_loc': 'no label', 'ordered_id': 'no label', });
lyr_Platforms_October22_J_2.set('fieldLabels', {'name': 'no label', 'export': 'no label', 'direction': 'no label', 'Stop_id': 'no label', 'Turn_time': 'no label', 'Capacity': 'no label', 'Stop_locat': 'no label', 'East_bound': 'no label', 'West_bound': 'no label', 'Is_turn': 'no label', 'Length': 'no label', 'Track_1': 'no label', 'Track_2': 'no label', 'join1_dist': 'no label', 'join1_trac': 'no label', 'join1_Star': 'no label', 'join1_End_': 'no label', 'join1_shor': 'no label', 'join1_sh_1': 'no label', 'join2_dist': 'no label', 'join2_trac': 'no label', 'join2_Star': 'no label', 'join2_End_': 'no label', 'join2_shor': 'no label', 'join2_sh_1': 'no label', });
lyr_Takings_3.set('fieldLabels', {'zoning': 'no label', 'id': 'no label', 'Proj_Name': 'no label', 'area': 'no label', });
lyr_InfrastructureProjects_4.set('fieldLabels', {'id': 'hidden field', 'Proj_Name': 'inline label - visible with data', 'Proj_Type': 'inline label - visible with data', 'Proj_URL': 'no label', 'Low_Invest': 'no label', 'Hi_Invest': 'no label', });
lyr_InfrastructureProjects_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});