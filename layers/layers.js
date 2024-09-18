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
var format_Network_1 = new ol.format.GeoJSON();
var features_Network_1 = format_Network_1.readFeatures(json_Network_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Network_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Network_1.addFeatures(features_Network_1);
var lyr_Network_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Network_1, 
                style: style_Network_1,
                popuplayertitle: "Network",
                interactive: true,
    title: 'Network<br />\
    <img src="styles/legend/Network_1_0.png" /> _<br />\
    <img src="styles/legend/Network_1_1.png" /> _1<br />\
    <img src="styles/legend/Network_1_2.png" /> _2<br />\
    <img src="styles/legend/Network_1_3.png" /> _3<br />\
    <img src="styles/legend/Network_1_4.png" /> _4<br />\
    <img src="styles/legend/Network_1_5.png" /> _5<br />\
    <img src="styles/legend/Network_1_6.png" /> _E<br />\
    <img src="styles/legend/Network_1_7.png" /> _NJCL_2a<br />\
    <img src="styles/legend/Network_1_8.png" /> _NJCL_3<br />\
    <img src="styles/legend/Network_1_9.png" /> _X<br />\
    <img src="styles/legend/Network_1_10.png" /> ABE_4<br />\
    <img src="styles/legend/Network_1_11.png" /> ATT_3<br />\
    <img src="styles/legend/Network_1_12.png" /> ATT_4<br />\
    <img src="styles/legend/Network_1_13.png" /> BEL_1<br />\
    <img src="styles/legend/Network_1_14.png" /> BEL_1F<br />\
    <img src="styles/legend/Network_1_15.png" /> BEL_2F<br />\
    <img src="styles/legend/Network_1_16.png" /> BEL_X<br />\
    <img src="styles/legend/Network_1_17.png" /> BOS_1<br />\
    <img src="styles/legend/Network_1_18.png" /> BOS_2<br />\
    <img src="styles/legend/Network_1_19.png" /> BOS_3<br />\
    <img src="styles/legend/Network_1_20.png" /> BRU_<br />\
    <img src="styles/legend/Network_1_21.png" /> BRU_X<br />\
    <img src="styles/legend/Network_1_22.png" /> BRU_Y<br />\
    <img src="styles/legend/Network_1_23.png" /> CAM_<br />\
    <img src="styles/legend/Network_1_24.png" /> CAN_<br />\
    <img src="styles/legend/Network_1_25.png" /> CAN_3<br />\
    <img src="styles/legend/Network_1_26.png" /> CAN_4<br />\
    <img src="styles/legend/Network_1_27.png" /> CAN_5<br />\
    <img src="styles/legend/Network_1_28.png" /> CAN_X<br />\
    <img src="styles/legend/Network_1_29.png" /> CCB_1<br />\
    <img src="styles/legend/Network_1_30.png" /> CCB_2<br />\
    <img src="styles/legend/Network_1_31.png" /> CCB_4<br />\
    <img src="styles/legend/Network_1_32.png" /> CCB_5<br />\
    <img src="styles/legend/Network_1_33.png" /> CCT_3<br />\
    <img src="styles/legend/Network_1_34.png" /> CHA_2<br />\
    <img src="styles/legend/Network_1_35.png" /> CHA_3<br />\
    <img src="styles/legend/Network_1_36.png" /> CNBY_1<br />\
    <img src="styles/legend/Network_1_37.png" /> CNBY_2<br />\
    <img src="styles/legend/Network_1_38.png" /> CYN_<br />\
    <img src="styles/legend/Network_1_39.png" /> CYN_1<br />\
    <img src="styles/legend/Network_1_40.png" /> CYN_E<br />\
    <img src="styles/legend/Network_1_41.png" /> DAR_<br />\
    <img src="styles/legend/Network_1_42.png" /> DAR_1<br />\
    <img src="styles/legend/Network_1_43.png" /> DAR_2<br />\
    <img src="styles/legend/Network_1_44.png" /> DAR_4<br />\
    <img src="styles/legend/Network_1_45.png" /> DOW_3<br />\
    <img src="styles/legend/Network_1_46.png" /> DOW_A<br />\
    <img src="styles/legend/Network_1_47.png" /> DOW_M<br />\
    <img src="styles/legend/Network_1_48.png" /> DOW_P<br />\
    <img src="styles/legend/Network_1_49.png" /> ELI_5<br />\
    <img src="styles/legend/Network_1_50.png" /> ELI_A<br />\
    <img src="styles/legend/Network_1_51.png" /> FDT_1<br />\
    <img src="styles/legend/Network_1_52.png" /> FDT_2<br />\
    <img src="styles/legend/Network_1_53.png" /> FJA_1<br />\
    <img src="styles/legend/Network_1_54.png" /> FJA_2<br />\
    <img src="styles/legend/Network_1_55.png" /> FJA_3<br />\
    <img src="styles/legend/Network_1_56.png" /> FJA_4<br />\
    <img src="styles/legend/Network_1_57.png" /> FJB_1<br />\
    <img src="styles/legend/Network_1_58.png" /> FJB_2<br />\
    <img src="styles/legend/Network_1_59.png" /> FJB_3<br />\
    <img src="styles/legend/Network_1_60.png" /> FJB_4<br />\
    <img src="styles/legend/Network_1_61.png" /> GC_1<br />\
    <img src="styles/legend/Network_1_62.png" /> GC_2<br />\
    <img src="styles/legend/Network_1_63.png" /> GC_3<br />\
    <img src="styles/legend/Network_1_64.png" /> GC_4<br />\
    <img src="styles/legend/Network_1_65.png" /> GC_Y<br />\
    <img src="styles/legend/Network_1_66.png" /> GUI_3<br />\
    <img src="styles/legend/Network_1_67.png" /> GWCH_<br />\
    <img src="styles/legend/Network_1_68.png" /> GWCH_1<br />\
    <img src="styles/legend/Network_1_69.png" /> GWCH_2<br />\
    <img src="styles/legend/Network_1_70.png" /> HDGB_2<br />\
    <img src="styles/legend/Network_1_71.png" /> HDGB_3<br />\
    <img src="styles/legend/Network_1_72.png" /> HGL_<br />\
    <img src="styles/legend/Network_1_73.png" /> HGL_1<br />\
    <img src="styles/legend/Network_1_74.png" /> HGL_2<br />\
    <img src="styles/legend/Network_1_75.png" /> HGL_3<br />\
    <img src="styles/legend/Network_1_76.png" /> HGL_4<br />\
    <img src="styles/legend/Network_1_77.png" /> HGL_X<br />\
    <img src="styles/legend/Network_1_78.png" /> HUD_<br />\
    <img src="styles/legend/Network_1_79.png" /> HUD_1<br />\
    <img src="styles/legend/Network_1_80.png" /> HUD_2<br />\
    <img src="styles/legend/Network_1_81.png" /> HUD_3<br />\
    <img src="styles/legend/Network_1_82.png" /> HUD_4<br />\
    <img src="styles/legend/Network_1_83.png" /> JC_3<br />\
    <img src="styles/legend/Network_1_84.png" /> JC_4<br />\
    <img src="styles/legend/Network_1_85.png" /> KIN_1<br />\
    <img src="styles/legend/Network_1_86.png" /> KIN_2<br />\
    <img src="styles/legend/Network_1_87.png" /> LIN_B<br />\
    <img src="styles/legend/Network_1_88.png" /> LON_3<br />\
    <img src="styles/legend/Network_1_89.png" /> MET_1<br />\
    <img src="styles/legend/Network_1_90.png" /> MET_2<br />\
    <img src="styles/legend/Network_1_91.png" /> MET_3<br />\
    <img src="styles/legend/Network_1_92.png" /> MET_4<br />\
    <img src="styles/legend/Network_1_93.png" /> MID_1<br />\
    <img src="styles/legend/Network_1_94.png" /> MID_3<br />\
    <img src="styles/legend/Network_1_95.png" /> MID_4<br />\
    <img src="styles/legend/Network_1_96.png" /> MID_5<br />\
    <img src="styles/legend/Network_1_97.png" /> MID_A<br />\
    <img src="styles/legend/Network_1_98.png" /> MIL_1<br />\
    <img src="styles/legend/Network_1_99.png" /> MIL_2<br />\
    <img src="styles/legend/Network_1_100.png" /> MIR_1<br />\
    <img src="styles/legend/Network_1_101.png" /> MIR_2<br />\
    <img src="styles/legend/Network_1_102.png" /> MIR_4<br />\
    <img src="styles/legend/Network_1_103.png" /> MN_2<br />\
    <img src="styles/legend/Network_1_104.png" /> MN_3<br />\
    <img src="styles/legend/Network_1_105.png" /> MV_2<br />\
    <img src="styles/legend/Network_1_106.png" /> NC_5<br />\
    <img src="styles/legend/Network_1_107.png" /> NEE_4<br />\
    <img src="styles/legend/Network_1_108.png" /> NEE_5<br />\
    <img src="styles/legend/Network_1_109.png" /> NH_1<br />\
    <img src="styles/legend/Network_1_110.png" /> NH_2<br />\
    <img src="styles/legend/Network_1_111.png" /> NH_4<br />\
    <img src="styles/legend/Network_1_112.png" /> NH_X<br />\
    <img src="styles/legend/Network_1_113.png" /> NHB_1<br />\
    <img src="styles/legend/Network_1_114.png" /> NHB_2<br />\
    <img src="styles/legend/Network_1_115.png" /> NJ_1<br />\
    <img src="styles/legend/Network_1_116.png" /> NJ_2<br />\
    <img src="styles/legend/Network_1_117.png" /> NJCL_1<br />\
    <img src="styles/legend/Network_1_118.png" /> NJCL_2a<br />\
    <img src="styles/legend/Network_1_119.png" /> NJCL_3<br />\
    <img src="styles/legend/Network_1_120.png" /> NJCL_NJCL_<br />\
    <img src="styles/legend/Network_1_121.png" /> NOR_1<br />\
    <img src="styles/legend/Network_1_122.png" /> NOR_2<br />\
    <img src="styles/legend/Network_1_123.png" /> NOR_3<br />\
    <img src="styles/legend/Network_1_124.png" /> NWK_1<br />\
    <img src="styles/legend/Network_1_125.png" /> NWK_A<br />\
    <img src="styles/legend/Network_1_126.png" /> NWK_X<br />\
    <img src="styles/legend/Network_1_127.png" /> OC_<br />\
    <img src="styles/legend/Network_1_128.png" /> OC_S<br />\
    <img src="styles/legend/Network_1_129.png" /> OC_X<br />\
    <img src="styles/legend/Network_1_130.png" /> OC_Y<br />\
    <img src="styles/legend/Network_1_131.png" /> PENN_1<br />\
    <img src="styles/legend/Network_1_132.png" /> PENN_2<br />\
    <img src="styles/legend/Network_1_133.png" /> PENN_3<br />\
    <img src="styles/legend/Network_1_134.png" /> PENN_4<br />\
    <img src="styles/legend/Network_1_135.png" /> PENN_A<br />\
    <img src="styles/legend/Network_1_136.png" /> PER_2<br />\
    <img src="styles/legend/Network_1_137.png" /> PER_3<br />\
    <img src="styles/legend/Network_1_138.png" /> PROV_3<br />\
    <img src="styles/legend/Network_1_139.png" /> PROV_5<br />\
    <img src="styles/legend/Network_1_140.png" /> PROV_7<br />\
    <img src="styles/legend/Network_1_141.png" /> PROV_X<br />\
    <img src="styles/legend/Network_1_142.png" /> PSA_3<br />\
    <img src="styles/legend/Network_1_143.png" /> PSA_4<br />\
    <img src="styles/legend/Network_1_144.png" /> PSA_5<br />\
    <img src="styles/legend/Network_1_145.png" /> PSA_X<br />\
    <img src="styles/legend/Network_1_146.png" /> PSAR_1<br />\
    <img src="styles/legend/Network_1_147.png" /> PSAR_2<br />\
    <img src="styles/legend/Network_1_148.png" /> RAH_<br />\
    <img src="styles/legend/Network_1_149.png" /> RAH_A<br />\
    <img src="styles/legend/Network_1_150.png" /> S_Penn_2<br />\
    <img src="styles/legend/Network_1_151.png" /> S_Penn_7<br />\
    <img src="styles/legend/Network_1_152.png" /> S_THIR_4<br />\
    <img src="styles/legend/Network_1_153.png" /> SAY_3<br />\
    <img src="styles/legend/Network_1_154.png" /> SAY_4<br />\
    <img src="styles/legend/Network_1_155.png" /> SCH_<br />\
    <img src="styles/legend/Network_1_156.png" /> SO_1<br />\
    <img src="styles/legend/Network_1_157.png" /> SO_2<br />\
    <img src="styles/legend/Network_1_158.png" /> SO_3<br />\
    <img src="styles/legend/Network_1_159.png" /> SO_A<br />\
    <img src="styles/legend/Network_1_160.png" /> STA_BAL_<br />\
    <img src="styles/legend/Network_1_161.png" /> STA_BAL_3<br />\
    <img src="styles/legend/Network_1_162.png" /> STA_BAL_A<br />\
    <img src="styles/legend/Network_1_163.png" /> STA_CH_X<br />\
    <img src="styles/legend/Network_1_164.png" /> STA_DCU_<br />\
    <img src="styles/legend/Network_1_165.png" /> STA_DCU_S<br />\
    <img src="styles/legend/Network_1_166.png" /> STA_DCU_X<br />\
    <img src="styles/legend/Network_1_167.png" /> STA_DCU_Y<br />\
    <img src="styles/legend/Network_1_168.png" /> STA_GC_<br />\
    <img src="styles/legend/Network_1_169.png" /> STA_GC_3<br />\
    <img src="styles/legend/Network_1_170.png" /> STA_NH_<br />\
    <img src="styles/legend/Network_1_171.png" /> STA_NH_4<br />\
    <img src="styles/legend/Network_1_172.png" /> STA_NH_5<br />\
    <img src="styles/legend/Network_1_173.png" /> STA_NH_6<br />\
    <img src="styles/legend/Network_1_174.png" /> STA_NH_7<br />\
    <img src="styles/legend/Network_1_175.png" /> STA_NH_8<br />\
    <img src="styles/legend/Network_1_176.png" /> STA_NH_9<br />\
    <img src="styles/legend/Network_1_177.png" /> STA_NP_5<br />\
    <img src="styles/legend/Network_1_178.png" /> STA_PSNY_<br />\
    <img src="styles/legend/Network_1_179.png" /> STA_PSNY_1<br />\
    <img src="styles/legend/Network_1_180.png" /> STA_PSNY_X<br />\
    <img src="styles/legend/Network_1_181.png" /> STA_PSNY_Y<br />\
    <img src="styles/legend/Network_1_182.png" /> STA_SS_<br />\
    <img src="styles/legend/Network_1_183.png" /> STA_SS_1<br />\
    <img src="styles/legend/Network_1_184.png" /> STA_SS_10<br />\
    <img src="styles/legend/Network_1_185.png" /> STA_SS_11<br />\
    <img src="styles/legend/Network_1_186.png" /> STA_SS_12<br />\
    <img src="styles/legend/Network_1_187.png" /> STA_SS_13<br />\
    <img src="styles/legend/Network_1_188.png" /> STA_SS_2<br />\
    <img src="styles/legend/Network_1_189.png" /> STA_SS_3<br />\
    <img src="styles/legend/Network_1_190.png" /> STA_SS_4<br />\
    <img src="styles/legend/Network_1_191.png" /> STA_SS_5<br />\
    <img src="styles/legend/Network_1_192.png" /> STA_SS_6<br />\
    <img src="styles/legend/Network_1_193.png" /> STA_SS_7<br />\
    <img src="styles/legend/Network_1_194.png" /> STA_SS_8<br />\
    <img src="styles/legend/Network_1_195.png" /> STA_SS_9<br />\
    <img src="styles/legend/Network_1_196.png" /> STA_SS_S<br />\
    <img src="styles/legend/Network_1_197.png" /> STA_SS_X<br />\
    <img src="styles/legend/Network_1_198.png" /> STA_TH_<br />\
    <img src="styles/legend/Network_1_199.png" /> STA_TH_1<br />\
    <img src="styles/legend/Network_1_200.png" /> STA_TH_2<br />\
    <img src="styles/legend/Network_1_201.png" /> STA_TH_A<br />\
    <img src="styles/legend/Network_1_202.png" /> STA_TH_C<br />\
    <img src="styles/legend/Network_1_203.png" /> STA_TH_I<br />\
    <img src="styles/legend/Network_1_204.png" /> STA_TH_J<br />\
    <img src="styles/legend/Network_1_205.png" /> STA_TH_M<br />\
    <img src="styles/legend/Network_1_206.png" /> STA_TH_N<br />\
    <img src="styles/legend/Network_1_207.png" /> STA_TH_O<br />\
    <img src="styles/legend/Network_1_208.png" /> STA_TH_P<br />\
    <img src="styles/legend/Network_1_209.png" /> STA_TH_X<br />\
    <img src="styles/legend/Network_1_210.png" /> WA_<br />\
    <img src="styles/legend/Network_1_211.png" /> WA_L<br />\
    <img src="styles/legend/Network_1_212.png" /> WA_O<br />\
    <img src="styles/legend/Network_1_213.png" /> WCK_3<br />\
    <img src="styles/legend/Network_1_214.png" /> WIL_1<br />\
    <img src="styles/legend/Network_1_215.png" /> WOR_<br />\
    <img src="styles/legend/Network_1_216.png" /> X_<br />\
    <img src="styles/legend/Network_1_217.png" /> X_X<br />\
    <img src="styles/legend/Network_1_218.png" /> X_Y<br />\
    <img src="styles/legend/Network_1_219.png" /> <br />'
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

lyr_Background_0.setVisible(true);lyr_Network_1.setVisible(true);lyr_Platforms_2.setVisible(true);lyr_Takings_3.setVisible(true);
var layersList = [lyr_Background_0,lyr_Network_1,lyr_Platforms_2,lyr_Takings_3];
lyr_Network_1.set('fieldAliases', {'track_id': 'track_id', '30thSt': '30thSt', 'id': 'id', 'radius': 'radius', 'doc': 'doc', 'curve_id': 'curve_id', 'length': 'length', 'speed_cr': 'speed_cr', 'Section': 'Section', 'track_sav': 'track_sav', 'dist_bost': 'dist_bost', });
lyr_Platforms_2.set('fieldAliases', {'name': 'name', 'export': 'export', 'direction': 'direction', 'Stop_id': 'Stop_id', 'Turn_time': 'Turn_time', 'Capacity': 'Capacity', 'Stop_locat': 'Stop_locat', 'East_bound': 'East_bound', 'West_bound': 'West_bound', 'Is_turn': 'Is_turn', 'Track': 'Track', 'Length': 'Length', 'layer': 'layer', 'path': 'path', });
lyr_Takings_3.set('fieldAliases', {'full_id': 'full_id', 'height': 'height', 'shape_area': 'shape_area', 'zoning': 'zoning', });
lyr_Network_1.set('fieldImages', {'track_id': 'TextEdit', '30thSt': 'TextEdit', 'id': 'TextEdit', 'radius': 'TextEdit', 'doc': 'TextEdit', 'curve_id': 'TextEdit', 'length': 'TextEdit', 'speed_cr': 'TextEdit', 'Section': 'TextEdit', 'track_sav': 'TextEdit', 'dist_bost': 'TextEdit', });
lyr_Platforms_2.set('fieldImages', {'name': 'TextEdit', 'export': 'TextEdit', 'direction': 'TextEdit', 'Stop_id': 'TextEdit', 'Turn_time': 'TextEdit', 'Capacity': 'TextEdit', 'Stop_locat': 'TextEdit', 'East_bound': 'TextEdit', 'West_bound': 'TextEdit', 'Is_turn': 'TextEdit', 'Track': 'TextEdit', 'Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Takings_3.set('fieldImages', {'full_id': 'TextEdit', 'height': 'TextEdit', 'shape_area': 'TextEdit', 'zoning': 'TextEdit', });
lyr_Network_1.set('fieldLabels', {'track_id': 'inline label - always visible', '30thSt': 'no label', 'id': 'no label', 'radius': 'inline label - always visible', 'doc': 'inline label - always visible', 'curve_id': 'no label', 'length': 'inline label - always visible', 'speed_cr': 'inline label - always visible', 'Section': 'hidden field', 'track_sav': 'hidden field', 'dist_bost': 'hidden field', });
lyr_Platforms_2.set('fieldLabels', {'name': 'inline label - always visible', 'export': 'hidden field', 'direction': 'hidden field', 'Stop_id': 'inline label - always visible', 'Turn_time': 'hidden field', 'Capacity': 'inline label - always visible', 'Stop_locat': 'hidden field', 'East_bound': 'hidden field', 'West_bound': 'hidden field', 'Is_turn': 'hidden field', 'Track': 'inline label - always visible', 'Length': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Takings_3.set('fieldLabels', {'full_id': 'hidden field', 'height': 'hidden field', 'shape_area': 'hidden field', 'zoning': 'inline label - always visible', });
lyr_Takings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});