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
    <img src="styles/legend/Network_September10_2_0.png" /> _<br />\
    <img src="styles/legend/Network_September10_2_1.png" /> _1<br />\
    <img src="styles/legend/Network_September10_2_2.png" /> _2<br />\
    <img src="styles/legend/Network_September10_2_3.png" /> _3<br />\
    <img src="styles/legend/Network_September10_2_4.png" /> _4<br />\
    <img src="styles/legend/Network_September10_2_5.png" /> _5<br />\
    <img src="styles/legend/Network_September10_2_6.png" /> _E<br />\
    <img src="styles/legend/Network_September10_2_7.png" /> _NJCL_2a<br />\
    <img src="styles/legend/Network_September10_2_8.png" /> _NJCL_3<br />\
    <img src="styles/legend/Network_September10_2_9.png" /> _X<br />\
    <img src="styles/legend/Network_September10_2_10.png" /> ABE_4<br />\
    <img src="styles/legend/Network_September10_2_11.png" /> ATT_3<br />\
    <img src="styles/legend/Network_September10_2_12.png" /> ATT_4<br />\
    <img src="styles/legend/Network_September10_2_13.png" /> BEL_1<br />\
    <img src="styles/legend/Network_September10_2_14.png" /> BEL_1F<br />\
    <img src="styles/legend/Network_September10_2_15.png" /> BEL_2F<br />\
    <img src="styles/legend/Network_September10_2_16.png" /> BEL_X<br />\
    <img src="styles/legend/Network_September10_2_17.png" /> BOS_1<br />\
    <img src="styles/legend/Network_September10_2_18.png" /> BOS_2<br />\
    <img src="styles/legend/Network_September10_2_19.png" /> BOS_3<br />\
    <img src="styles/legend/Network_September10_2_20.png" /> BRU_<br />\
    <img src="styles/legend/Network_September10_2_21.png" /> BRU_X<br />\
    <img src="styles/legend/Network_September10_2_22.png" /> BRU_Y<br />\
    <img src="styles/legend/Network_September10_2_23.png" /> CAM_<br />\
    <img src="styles/legend/Network_September10_2_24.png" /> CAN_<br />\
    <img src="styles/legend/Network_September10_2_25.png" /> CAN_3<br />\
    <img src="styles/legend/Network_September10_2_26.png" /> CAN_4<br />\
    <img src="styles/legend/Network_September10_2_27.png" /> CAN_5<br />\
    <img src="styles/legend/Network_September10_2_28.png" /> CAN_X<br />\
    <img src="styles/legend/Network_September10_2_29.png" /> CCB_1<br />\
    <img src="styles/legend/Network_September10_2_30.png" /> CCB_2<br />\
    <img src="styles/legend/Network_September10_2_31.png" /> CCB_4<br />\
    <img src="styles/legend/Network_September10_2_32.png" /> CCB_5<br />\
    <img src="styles/legend/Network_September10_2_33.png" /> CCT_3<br />\
    <img src="styles/legend/Network_September10_2_34.png" /> CHA_2<br />\
    <img src="styles/legend/Network_September10_2_35.png" /> CHA_3<br />\
    <img src="styles/legend/Network_September10_2_36.png" /> CNBY_1<br />\
    <img src="styles/legend/Network_September10_2_37.png" /> CNBY_2<br />\
    <img src="styles/legend/Network_September10_2_38.png" /> CYN_<br />\
    <img src="styles/legend/Network_September10_2_39.png" /> CYN_1<br />\
    <img src="styles/legend/Network_September10_2_40.png" /> CYN_E<br />\
    <img src="styles/legend/Network_September10_2_41.png" /> DAR_<br />\
    <img src="styles/legend/Network_September10_2_42.png" /> DAR_1<br />\
    <img src="styles/legend/Network_September10_2_43.png" /> DAR_2<br />\
    <img src="styles/legend/Network_September10_2_44.png" /> DAR_4<br />\
    <img src="styles/legend/Network_September10_2_45.png" /> DOW_3<br />\
    <img src="styles/legend/Network_September10_2_46.png" /> DOW_A<br />\
    <img src="styles/legend/Network_September10_2_47.png" /> DOW_M<br />\
    <img src="styles/legend/Network_September10_2_48.png" /> DOW_P<br />\
    <img src="styles/legend/Network_September10_2_49.png" /> ELI_5<br />\
    <img src="styles/legend/Network_September10_2_50.png" /> ELI_A<br />\
    <img src="styles/legend/Network_September10_2_51.png" /> FDT_1<br />\
    <img src="styles/legend/Network_September10_2_52.png" /> FDT_2<br />\
    <img src="styles/legend/Network_September10_2_53.png" /> FJA_1<br />\
    <img src="styles/legend/Network_September10_2_54.png" /> FJA_2<br />\
    <img src="styles/legend/Network_September10_2_55.png" /> FJA_3<br />\
    <img src="styles/legend/Network_September10_2_56.png" /> FJA_4<br />\
    <img src="styles/legend/Network_September10_2_57.png" /> FJB_1<br />\
    <img src="styles/legend/Network_September10_2_58.png" /> FJB_2<br />\
    <img src="styles/legend/Network_September10_2_59.png" /> FJB_3<br />\
    <img src="styles/legend/Network_September10_2_60.png" /> FJB_4<br />\
    <img src="styles/legend/Network_September10_2_61.png" /> GC_1<br />\
    <img src="styles/legend/Network_September10_2_62.png" /> GC_2<br />\
    <img src="styles/legend/Network_September10_2_63.png" /> GC_3<br />\
    <img src="styles/legend/Network_September10_2_64.png" /> GC_4<br />\
    <img src="styles/legend/Network_September10_2_65.png" /> GC_Y<br />\
    <img src="styles/legend/Network_September10_2_66.png" /> GUI_3<br />\
    <img src="styles/legend/Network_September10_2_67.png" /> GWCH_<br />\
    <img src="styles/legend/Network_September10_2_68.png" /> GWCH_1<br />\
    <img src="styles/legend/Network_September10_2_69.png" /> GWCH_2<br />\
    <img src="styles/legend/Network_September10_2_70.png" /> HDGB_2<br />\
    <img src="styles/legend/Network_September10_2_71.png" /> HDGB_3<br />\
    <img src="styles/legend/Network_September10_2_72.png" /> HGL_<br />\
    <img src="styles/legend/Network_September10_2_73.png" /> HGL_1<br />\
    <img src="styles/legend/Network_September10_2_74.png" /> HGL_2<br />\
    <img src="styles/legend/Network_September10_2_75.png" /> HGL_3<br />\
    <img src="styles/legend/Network_September10_2_76.png" /> HGL_4<br />\
    <img src="styles/legend/Network_September10_2_77.png" /> HGL_X<br />\
    <img src="styles/legend/Network_September10_2_78.png" /> HUD_<br />\
    <img src="styles/legend/Network_September10_2_79.png" /> HUD_1<br />\
    <img src="styles/legend/Network_September10_2_80.png" /> HUD_2<br />\
    <img src="styles/legend/Network_September10_2_81.png" /> HUD_3<br />\
    <img src="styles/legend/Network_September10_2_82.png" /> HUD_4<br />\
    <img src="styles/legend/Network_September10_2_83.png" /> JC_3<br />\
    <img src="styles/legend/Network_September10_2_84.png" /> JC_4<br />\
    <img src="styles/legend/Network_September10_2_85.png" /> KIN_1<br />\
    <img src="styles/legend/Network_September10_2_86.png" /> KIN_2<br />\
    <img src="styles/legend/Network_September10_2_87.png" /> LIN_B<br />\
    <img src="styles/legend/Network_September10_2_88.png" /> LON_3<br />\
    <img src="styles/legend/Network_September10_2_89.png" /> MET_1<br />\
    <img src="styles/legend/Network_September10_2_90.png" /> MET_2<br />\
    <img src="styles/legend/Network_September10_2_91.png" /> MET_3<br />\
    <img src="styles/legend/Network_September10_2_92.png" /> MET_4<br />\
    <img src="styles/legend/Network_September10_2_93.png" /> MID_1<br />\
    <img src="styles/legend/Network_September10_2_94.png" /> MID_3<br />\
    <img src="styles/legend/Network_September10_2_95.png" /> MID_4<br />\
    <img src="styles/legend/Network_September10_2_96.png" /> MID_5<br />\
    <img src="styles/legend/Network_September10_2_97.png" /> MID_A<br />\
    <img src="styles/legend/Network_September10_2_98.png" /> MIL_1<br />\
    <img src="styles/legend/Network_September10_2_99.png" /> MIL_2<br />\
    <img src="styles/legend/Network_September10_2_100.png" /> MIR_1<br />\
    <img src="styles/legend/Network_September10_2_101.png" /> MIR_2<br />\
    <img src="styles/legend/Network_September10_2_102.png" /> MIR_4<br />\
    <img src="styles/legend/Network_September10_2_103.png" /> MN_2<br />\
    <img src="styles/legend/Network_September10_2_104.png" /> MN_3<br />\
    <img src="styles/legend/Network_September10_2_105.png" /> MV_2<br />\
    <img src="styles/legend/Network_September10_2_106.png" /> NC_5<br />\
    <img src="styles/legend/Network_September10_2_107.png" /> NEE_4<br />\
    <img src="styles/legend/Network_September10_2_108.png" /> NEE_5<br />\
    <img src="styles/legend/Network_September10_2_109.png" /> NH_1<br />\
    <img src="styles/legend/Network_September10_2_110.png" /> NH_2<br />\
    <img src="styles/legend/Network_September10_2_111.png" /> NH_4<br />\
    <img src="styles/legend/Network_September10_2_112.png" /> NH_X<br />\
    <img src="styles/legend/Network_September10_2_113.png" /> NHB_1<br />\
    <img src="styles/legend/Network_September10_2_114.png" /> NHB_2<br />\
    <img src="styles/legend/Network_September10_2_115.png" /> NJ_1<br />\
    <img src="styles/legend/Network_September10_2_116.png" /> NJ_2<br />\
    <img src="styles/legend/Network_September10_2_117.png" /> NJCL_1<br />\
    <img src="styles/legend/Network_September10_2_118.png" /> NJCL_2a<br />\
    <img src="styles/legend/Network_September10_2_119.png" /> NJCL_3<br />\
    <img src="styles/legend/Network_September10_2_120.png" /> NJCL_NJCL_<br />\
    <img src="styles/legend/Network_September10_2_121.png" /> NOR_1<br />\
    <img src="styles/legend/Network_September10_2_122.png" /> NOR_2<br />\
    <img src="styles/legend/Network_September10_2_123.png" /> NOR_3<br />\
    <img src="styles/legend/Network_September10_2_124.png" /> NWK_1<br />\
    <img src="styles/legend/Network_September10_2_125.png" /> NWK_A<br />\
    <img src="styles/legend/Network_September10_2_126.png" /> NWK_X<br />\
    <img src="styles/legend/Network_September10_2_127.png" /> OC_<br />\
    <img src="styles/legend/Network_September10_2_128.png" /> OC_S<br />\
    <img src="styles/legend/Network_September10_2_129.png" /> OC_X<br />\
    <img src="styles/legend/Network_September10_2_130.png" /> OC_Y<br />\
    <img src="styles/legend/Network_September10_2_131.png" /> PENN_1<br />\
    <img src="styles/legend/Network_September10_2_132.png" /> PENN_2<br />\
    <img src="styles/legend/Network_September10_2_133.png" /> PENN_3<br />\
    <img src="styles/legend/Network_September10_2_134.png" /> PENN_4<br />\
    <img src="styles/legend/Network_September10_2_135.png" /> PENN_A<br />\
    <img src="styles/legend/Network_September10_2_136.png" /> PER_2<br />\
    <img src="styles/legend/Network_September10_2_137.png" /> PER_3<br />\
    <img src="styles/legend/Network_September10_2_138.png" /> PROV_3<br />\
    <img src="styles/legend/Network_September10_2_139.png" /> PROV_5<br />\
    <img src="styles/legend/Network_September10_2_140.png" /> PROV_7<br />\
    <img src="styles/legend/Network_September10_2_141.png" /> PROV_X<br />\
    <img src="styles/legend/Network_September10_2_142.png" /> PSA_3<br />\
    <img src="styles/legend/Network_September10_2_143.png" /> PSA_4<br />\
    <img src="styles/legend/Network_September10_2_144.png" /> PSA_5<br />\
    <img src="styles/legend/Network_September10_2_145.png" /> PSA_X<br />\
    <img src="styles/legend/Network_September10_2_146.png" /> PSAR_1<br />\
    <img src="styles/legend/Network_September10_2_147.png" /> PSAR_2<br />\
    <img src="styles/legend/Network_September10_2_148.png" /> RAH_<br />\
    <img src="styles/legend/Network_September10_2_149.png" /> RAH_A<br />\
    <img src="styles/legend/Network_September10_2_150.png" /> S_Penn_2<br />\
    <img src="styles/legend/Network_September10_2_151.png" /> S_Penn_7<br />\
    <img src="styles/legend/Network_September10_2_152.png" /> S_THIR_4<br />\
    <img src="styles/legend/Network_September10_2_153.png" /> SAY_3<br />\
    <img src="styles/legend/Network_September10_2_154.png" /> SAY_4<br />\
    <img src="styles/legend/Network_September10_2_155.png" /> SCH_<br />\
    <img src="styles/legend/Network_September10_2_156.png" /> SO_1<br />\
    <img src="styles/legend/Network_September10_2_157.png" /> SO_2<br />\
    <img src="styles/legend/Network_September10_2_158.png" /> SO_3<br />\
    <img src="styles/legend/Network_September10_2_159.png" /> SO_A<br />\
    <img src="styles/legend/Network_September10_2_160.png" /> STA_BAL_<br />\
    <img src="styles/legend/Network_September10_2_161.png" /> STA_BAL_3<br />\
    <img src="styles/legend/Network_September10_2_162.png" /> STA_BAL_A<br />\
    <img src="styles/legend/Network_September10_2_163.png" /> STA_CH_X<br />\
    <img src="styles/legend/Network_September10_2_164.png" /> STA_DCU_<br />\
    <img src="styles/legend/Network_September10_2_165.png" /> STA_DCU_S<br />\
    <img src="styles/legend/Network_September10_2_166.png" /> STA_DCU_X<br />\
    <img src="styles/legend/Network_September10_2_167.png" /> STA_DCU_Y<br />\
    <img src="styles/legend/Network_September10_2_168.png" /> STA_GC_<br />\
    <img src="styles/legend/Network_September10_2_169.png" /> STA_GC_3<br />\
    <img src="styles/legend/Network_September10_2_170.png" /> STA_NH_<br />\
    <img src="styles/legend/Network_September10_2_171.png" /> STA_NH_4<br />\
    <img src="styles/legend/Network_September10_2_172.png" /> STA_NH_5<br />\
    <img src="styles/legend/Network_September10_2_173.png" /> STA_NH_6<br />\
    <img src="styles/legend/Network_September10_2_174.png" /> STA_NH_7<br />\
    <img src="styles/legend/Network_September10_2_175.png" /> STA_NH_8<br />\
    <img src="styles/legend/Network_September10_2_176.png" /> STA_NH_9<br />\
    <img src="styles/legend/Network_September10_2_177.png" /> STA_NP_5<br />\
    <img src="styles/legend/Network_September10_2_178.png" /> STA_PSNY_<br />\
    <img src="styles/legend/Network_September10_2_179.png" /> STA_PSNY_1<br />\
    <img src="styles/legend/Network_September10_2_180.png" /> STA_PSNY_X<br />\
    <img src="styles/legend/Network_September10_2_181.png" /> STA_PSNY_Y<br />\
    <img src="styles/legend/Network_September10_2_182.png" /> STA_SS_<br />\
    <img src="styles/legend/Network_September10_2_183.png" /> STA_SS_1<br />\
    <img src="styles/legend/Network_September10_2_184.png" /> STA_SS_10<br />\
    <img src="styles/legend/Network_September10_2_185.png" /> STA_SS_11<br />\
    <img src="styles/legend/Network_September10_2_186.png" /> STA_SS_12<br />\
    <img src="styles/legend/Network_September10_2_187.png" /> STA_SS_13<br />\
    <img src="styles/legend/Network_September10_2_188.png" /> STA_SS_2<br />\
    <img src="styles/legend/Network_September10_2_189.png" /> STA_SS_3<br />\
    <img src="styles/legend/Network_September10_2_190.png" /> STA_SS_4<br />\
    <img src="styles/legend/Network_September10_2_191.png" /> STA_SS_5<br />\
    <img src="styles/legend/Network_September10_2_192.png" /> STA_SS_6<br />\
    <img src="styles/legend/Network_September10_2_193.png" /> STA_SS_7<br />\
    <img src="styles/legend/Network_September10_2_194.png" /> STA_SS_8<br />\
    <img src="styles/legend/Network_September10_2_195.png" /> STA_SS_9<br />\
    <img src="styles/legend/Network_September10_2_196.png" /> STA_SS_S<br />\
    <img src="styles/legend/Network_September10_2_197.png" /> STA_SS_X<br />\
    <img src="styles/legend/Network_September10_2_198.png" /> STA_TH_<br />\
    <img src="styles/legend/Network_September10_2_199.png" /> STA_TH_1<br />\
    <img src="styles/legend/Network_September10_2_200.png" /> STA_TH_2<br />\
    <img src="styles/legend/Network_September10_2_201.png" /> STA_TH_A<br />\
    <img src="styles/legend/Network_September10_2_202.png" /> STA_TH_C<br />\
    <img src="styles/legend/Network_September10_2_203.png" /> STA_TH_I<br />\
    <img src="styles/legend/Network_September10_2_204.png" /> STA_TH_J<br />\
    <img src="styles/legend/Network_September10_2_205.png" /> STA_TH_M<br />\
    <img src="styles/legend/Network_September10_2_206.png" /> STA_TH_N<br />\
    <img src="styles/legend/Network_September10_2_207.png" /> STA_TH_O<br />\
    <img src="styles/legend/Network_September10_2_208.png" /> STA_TH_P<br />\
    <img src="styles/legend/Network_September10_2_209.png" /> STA_TH_X<br />\
    <img src="styles/legend/Network_September10_2_210.png" /> WA_<br />\
    <img src="styles/legend/Network_September10_2_211.png" /> WA_L<br />\
    <img src="styles/legend/Network_September10_2_212.png" /> WA_O<br />\
    <img src="styles/legend/Network_September10_2_213.png" /> WCK_3<br />\
    <img src="styles/legend/Network_September10_2_214.png" /> WIL_1<br />\
    <img src="styles/legend/Network_September10_2_215.png" /> WOR_<br />\
    <img src="styles/legend/Network_September10_2_216.png" /> X_<br />\
    <img src="styles/legend/Network_September10_2_217.png" /> X_X<br />\
    <img src="styles/legend/Network_September10_2_218.png" /> X_Y<br />\
    <img src="styles/legend/Network_September10_2_219.png" /> <br />'
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
var format_Takings_4 = new ol.format.GeoJSON();
var features_Takings_4 = format_Takings_4.readFeatures(json_Takings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Takings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Takings_4.addFeatures(features_Takings_4);
var lyr_Takings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Takings_4, 
                style: style_Takings_4,
                popuplayertitle: "Takings",
                interactive: true,
    title: 'Takings<br />\
    <img src="styles/legend/Takings_4_0.png" /> Commercial<br />\
    <img src="styles/legend/Takings_4_1.png" /> Conservation<br />\
    <img src="styles/legend/Takings_4_2.png" /> Mixed<br />\
    <img src="styles/legend/Takings_4_3.png" /> Residential<br />\
    <img src="styles/legend/Takings_4_4.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr_InfrastructureProjects_1.setVisible(true);lyr_Network_September10_2.setVisible(true);lyr_Platforms_3.setVisible(true);lyr_Takings_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_InfrastructureProjects_1,lyr_Network_September10_2,lyr_Platforms_3,lyr_Takings_4];
lyr_InfrastructureProjects_1.set('fieldAliases', {'id': 'id', 'Proj_Name': 'Proj_Name', 'Proj_Type': 'Proj_Type', 'Proj_URL': 'Proj_URL', });
lyr_Network_September10_2.set('fieldAliases', {'track_id': 'track_id', '30thSt': '30thSt', 'id': 'id', 'radius': 'radius', 'doc': 'doc', 'curve_id': 'curve_id', 'length': 'length', 'speed_cr': 'speed_cr', 'Section': 'Section', 'track_sav': 'track_sav', 'dist_bost': 'dist_bost', });
lyr_Platforms_3.set('fieldAliases', {'name': 'name', 'export': 'export', 'direction': 'direction', 'Stop_id': 'Stop_id', 'Turn_time': 'Turn_time', 'Capacity': 'Capacity', 'Stop_locat': 'Stop_locat', 'East_bound': 'East_bound', 'West_bound': 'West_bound', 'Is_turn': 'Is_turn', 'Track': 'Track', 'Length': 'Length', 'layer': 'layer', 'path': 'path', });
lyr_Takings_4.set('fieldAliases', {'full_id': 'full_id', 'height': 'height', 'shape_area': 'shape_area', 'zoning': 'zoning', });
lyr_InfrastructureProjects_1.set('fieldImages', {'id': 'TextEdit', 'Proj_Name': 'TextEdit', 'Proj_Type': '', 'Proj_URL': '', });
lyr_Network_September10_2.set('fieldImages', {'track_id': 'TextEdit', '30thSt': 'TextEdit', 'id': 'TextEdit', 'radius': 'TextEdit', 'doc': 'TextEdit', 'curve_id': 'TextEdit', 'length': 'TextEdit', 'speed_cr': 'TextEdit', 'Section': 'TextEdit', 'track_sav': 'TextEdit', 'dist_bost': 'TextEdit', });
lyr_Platforms_3.set('fieldImages', {'name': 'TextEdit', 'export': 'TextEdit', 'direction': 'TextEdit', 'Stop_id': 'TextEdit', 'Turn_time': 'TextEdit', 'Capacity': 'TextEdit', 'Stop_locat': 'TextEdit', 'East_bound': 'TextEdit', 'West_bound': 'TextEdit', 'Is_turn': 'TextEdit', 'Track': 'TextEdit', 'Length': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Takings_4.set('fieldImages', {'full_id': 'TextEdit', 'height': 'TextEdit', 'shape_area': 'TextEdit', 'zoning': 'TextEdit', });
lyr_InfrastructureProjects_1.set('fieldLabels', {'id': 'hidden field', 'Proj_Name': 'inline label - visible with data', 'Proj_Type': 'inline label - visible with data', 'Proj_URL': 'no label', });
lyr_Network_September10_2.set('fieldLabels', {'track_id': 'no label', '30thSt': 'no label', 'id': 'no label', 'radius': 'no label', 'doc': 'no label', 'curve_id': 'no label', 'length': 'no label', 'speed_cr': 'no label', 'Section': 'no label', 'track_sav': 'no label', 'dist_bost': 'no label', });
lyr_Platforms_3.set('fieldLabels', {'name': 'no label', 'export': 'no label', 'direction': 'no label', 'Stop_id': 'no label', 'Turn_time': 'no label', 'Capacity': 'no label', 'Stop_locat': 'no label', 'East_bound': 'no label', 'West_bound': 'no label', 'Is_turn': 'no label', 'Track': 'no label', 'Length': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Takings_4.set('fieldLabels', {'full_id': 'no label', 'height': 'no label', 'shape_area': 'no label', 'zoning': 'no label', });
lyr_Takings_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});