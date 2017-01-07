function initMap() {
    var content_cambre = '<h2>Luns 2/1/2017</h2><p>10:00  -  14:30<br/>16:00  -  21:00</p>';
    var content_coru_conchiñas = '<h2>Martes 3/1/2017</h2><p>09:30  -  14:30<br/>15:30  -  21:00</p>';
    var content_arteixo = '<h2>Mércores 4/1/2017</h2><p>10:00  -  14:30<br/>16:00  -  21:00</p>';
    var content_carballo = '<h2>Xoves 5/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p><h2>Sábado 7/1/2017</h2><p>10:00  -  15:00</p>';
    var content_ferrol = '<h2>Luns 2/1/2017</h2><p>15:30  -  21:00</p>';
    var content_as_pontes = '<h2>Martes 3/1/2017</h2><p>10:00  -  14:30<br/>16:00  -  21:00</p><h2>Mércores 4/1/2017</h2><p>10:00  -  14:30<br/>16:00  -  21:00</p>';
    var content_cedeira = '<h2>Xoves 5/1/2017</h2><p>10:00  -  14:30<br/>16:00  -  21:00</p>';
    var content_coru_villa_negreira = '<h2>Luns 2/1/2017</h2><p>15:30  -  21:00</p>';
    var content_betanzos = '<h2>Martes 3/1/2017</h2><p>16:00  -  21:00</p><h2>Mércores 4/1/2017</h2><p>16:00  -  21:00</p>';
    var content_coru_cuatro_caminos = '<h2>Xoves 5/1/2017</h2><p>15:30  -  21:00</p>';
    var content_ribeira = '<h2>Luns 2/1/2017</h2><p>10:00  -  14:00<br/>16:30  -  21:00</p>';
    var content_pobra = '<h2>Martes 3/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p>';
    var content_negreira = '<h2>Mércores 4/1/2017</h2><p>09:30  -  14:30<br/>16:00  -  21:00</p>';
    var content_noia = '<h2>Xoves 5/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p><h2>Sábado 7/1/2017</h2><p>10:00  -  15:00</p>';
    var content_xuño = '<h2>Luns 2/1/2017</h2><p>16:30  -  21:00</p>';
    var content_frades = '<h2>Martes 3/1/2017</h2><p>16:00  -  21:00</p>';
    var content_aguiño = '<h2>Mércores 4/1/2017</h2><p>16:30  -  21:00</p>';
    var content_a_silva = '<h2>Xoves 5/1/2017</h2><p>16:00  -  21:00</p>';
    var content_marin = '<h2>Luns 2/1/2017</h2><p>09:30  -  14:30<br/>15:30  -  21:00</p>';
    var content_catoira = '<h2>Martes 3/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p>';
    var content_caldas_de_reis = '<h2>Mércores 4/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p>';
    var content_vilagarcia = '<h2>Xoves 5/1/2017</h2><p>10:00  -  14:00<br/>16:00  -  21:00</p><h2>Sábado 7/1/2017</h2><p>10:00  -  15:00</p>';
    var content_mondariz = '<h2>Luns 2/1/2017</h2><p>10:00  -  14:00<br/>16:30  -  21:00</p>';
    var content_bueu = '<h2>Martes 3/1/2017</h2><p>10:00  -  14:00<br/>16:30  -  21:00</p>';
    var content_vigo_travesas = '<h2>Mércores 4/1/2017</h2><p>09:30  -  14:30<br/>15:30  -  21:00</p>';
    var content_a_guarda = '<h2>Xoves 5/1/2017</h2><p>10:00  -  14:00<br/>16:30  -  21:00</p><h2>Sábado 7/1/2017</h2><p>10:00  -  15:00</p>';
    var content_moaña = '<h2>Luns 2/1/2017</h2><p>16:00  -  21:00</p><h2>Martes 3/1/2017</h2><p>16:00  -  21:00</p>';
    var content_cangas = '<h2>Mércores 4/1/2017</h2><p>16:00  -  21:00</p><h2>Xoves 5/1/2017</h2><p>16:00  -  21:00</p>';
    var content_foz = '<h2>Luns 2/1/2017</h2><p>16:30  -  21:00</p>';
    var content_burela = '<h2>Martes 3/1/2017</h2><p>11:00  -  14:00<br/>17:00  -  21:00</p>';
    var content_antas_de_ulla = '<h2>Mércores 4/1/2017</h2><p>10:00  -  14:00</p>';
    var content_rabade = '<h2>Mércores 4/1/2017</h2><p>16:00  -  21:00</p>';
    var content_ribadeo = '<h2>Xoves 5/1/2017</h2><p>10:30  -  14:00<br/>17:00  -  21:00</p>';
    var content_ferreira_de_panton = '<h2>Sábado 7/1/2017</h2><p>10:30  -  12:00</p>';
    var content_sober = '<h2>Sábado 7/1/2017</h2><p>12:30  -  14:30</p>';
    var content_lobeira = '<h2>Luns 2/1/2017</h2><p>16:00  -  18:00</p>';
    var content_bande = '<h2>Luns 2/1/2017</h2><p>18:30  -  21:00</p>';
    var content_ourense_posio = '<h2>Martes 3/1/2017</h2><p>09:30  -  14:30<br/>15:30  -  21:00</p>';
    var content_caldelas = '<h2>Mércores 4/1/2017</h2><p>10:30  -  14:00</p>';
    var content_ourense_buenos_aires = '<h2>Mércores 4/1/2017</h2><p>15:30  -  21:00</p>';
    var content_verin = '<h2>Xoves 5/1/2017</h2><p>10:30  -  14:00<br/>16:30  -  21:00</p>';
    var content_fixo_coru = '<h2>Punto fixo Coruña</h2><ul><li>Luns a venres de 8:00 a 22:00</li><li>Sábado de 8:00 a 15:00</li></ul><p>Hospital A Coruña<br/>As Xubias, 84. 15006 A Coruña<br/>Teléfono 981227430<br/>Aparcamento gratuíto no parking público</p>';
    var content_fixo_santiago = '<h2>Punto fixo Santiago de Compostela</h2><ul><li>Luns a venres de 8:00 a 22:00</li><li>Sábado de 8:00 a 15:00</li></ul><p>Avenida Monte da Condesa, s/n<br/>15706 Santiago de Compostela<br/>Teléfono 881546900<br/>Aparcamento gratuíto diante do CTG</p>';
    var content_fixo_vigo = '<h2>Punto fixo Vigo</h2><ul><li>Luns a venres de 8:00 a 22:00</li><li>Sábados de 8:00 a 15:00</li></ul><p>Hospital Nicolás Peña<br/>Pavillón 4, planta baixa<br/>Avenida Camelias, 109<br/>Vigo<br/>Teléfono 986219174<br/>Aparcamento gratuíto parking Pintor Colmeiro</p>';
    var content_fixo_pontevedra = '<h2>Punto fixo Pontevedra</h2><h3>Horario de inverno (de outubro a abril)</h3><ul><li>Luns e venres de 8:00 a 15:00</li><li>Martes, mércores e xoves de 15:00 a 22:00</li></ul><h3>Horario de verán (de maio a setembro)</h3><ul><li>Luns a venres de 8:00 a 15:00</li></ul><p>Hospital Provincial de Pontevedra<br/>Módulos de atención, ao carón da entrada de Urxencias Pediátricas<br/>Rúa Loureiro Crespo, 2<br/>Pontevedra<br/>Teléfono 986800000<br/>Aparcamento gratuíto parking Centro Ciudad Veters. Rúa Antón Fraguas, s/n (baixos Hipercor)</p>';
    var content_fixo_ourense = '<h2>Punto fixo Ourense</h2><h3>Horario de inverno (de outubro a maio)</h3><ul><li>Luns de 8:00 a 22:00</li><li>Martes, mércores e xoves de 8:00 a 15:00</li><li>Venres de 15:00 a 22:00</li></ul><h3>Horario de verán (de xuño a setembro)</h3><ul><li>Luns a venres de 8:00 a 15:00</li></ul><p>Complexo hospitalario de Ourense<br/>Edificio Cristal. Fronte ao Edificio Administrativo, antiga entrada de Urxencias<br/>Rúa Ramón Puga, 52-54<br/>32005 Ourense<br/>Teléfono 988370103<br/>Aparcamento gratuíto no parking Santa María Nai, fronte ao hospital</p>';
    var content_fixo_lugo = '<h2>Punto fixo Lugo</h2><h3>Horario de inverno (de outubro a marzo)</h3><ul><li>Luns e venres de 8:00 a 22:00</li><li>Martes, mércores e xoves de 8:00 a 15:00</li></ul><h3>Horario de verán (de abril a setembro)</h3><ul><li>Luns a venres de 8:00 a 15:00</li></ul><p>Hospital Lucus Augusti<br/>Sala de doazón: cuarto andar, fronte as escaleiras mecánicas do acceso principal<br/>San Cibrao, s/n<br/>27003 Lugo<br/>Teléfono 982221064<br/>Aparcamento gratuíto na prazas do persoal do hospital (solicitar acceso no posto de seguridade)</p>';
    var content_fixo_ferrol = '<h2>Punto fixo Ferrol</h2><ul><li>Luns e venres de 8:00 a 22:00</li><li>Martes, mércores e xoves de 8:00 a 15:00</li></ul><p>Hospital Arquitecto Marcide. Andar cero<br/>Ao carón da escaleira mecánica, fronte ao laboratorio<br/>Estrada de San Pedro de Leixa, s/n<br/>15405 Ferrol<br/>Teléfono 981334541<br/>Aparcamento gratuíto no parking do hospital</p>';

    var galicia = {lat: 42.793104, lng: -7.9888223};
    var cambre = {lat: 43.2925717, lng: -8.344482};
    var coru_conchiñas = {lat: 43.3613589, lng: -8.4194143};
    var arteixo = {lat: 43.3051599, lng: -8.5087933};
    var carballo = {lat: 43.2131445, lng: -8.6894835};
    var ferrol = {lat: 43.4840615, lng: -8.2058028};
    var as_pontes = {lat: 43.4508936, lng: -7.8530745};
    var cedeira = {lat: 43.6608476, lng: -8.0541278};
    var coru_villa_negreira = {lat: 43.3635388, lng: -8.4223245};
    var betanzos = {lat: 43.2797688, lng: -8.2104311};
    var coru_cuatro_caminos = {lat: 43.3551556, lng: -8.4029407};
    var ribeira = {lat:42.5550502, lng: -8.9929984};
    var pobra = {lat:42.6069103, lng: -8.9377029};
    var negreira = {lat:42.9115098, lng: -8.7337589};
    var noia = {lat: 42.7848581, lng: -8.8884553};
    var xuño = {lat: 42.6364523, lng: -9.0262154};
    var frades = {lat: 43.0384621, lng: -8.3203686};
    var aguiño = {lat: 42.5205068, lng: -9.019026};
    var a_silva = {lat: 43.1588507, lng: -8.5661989};
    var marin = {lat: 42.3931819, lng: -8.7018059};
    var catoira = {lat: 42.6720452, lng: -8.725159};
    var caldas_de_reis = {lat: 42.6039039, lng: -8.6414688};
    var vilagarcia = {lat: 42.5936207, lng: -8.7678798};
    var mondariz = {lat: 42.23212, lng: -8.454981};
    var bueu = {lat: 42.3275511, lng: -8.7839105};
    var vigo_travesas = {lat: 42.2203076, lng: -8.7327909};
    var a_guarda = {lat: 41.9021648, lng: -8.8698694};
    var moaña = {lat: 42.2847719, lng: -8.734395};
    var cangas = {lat: 42.2633274, lng: -8.7824166};
    var foz = {lat: 43.5682616, lng: -7.2594224};
    var burela = {lat: 43.6595663, lng: -7.3581829};
    var antas_de_ulla = {lat: 42.7827464, lng: -7.890302};
    var rabade = {lat: 43.1216101, lng: -7.6248174};
    var ribadeo = {lat: 43.5356295, lng: -7.0391276};
    var ferreira_de_panton = {lat: 42.5051804, lng: -7.626396};
    var sober = {lat: 42.4618678, lng: -7.5870143};
    var lobeira = {lat: 41.9874451, lng: -8.0395899};
    var bande = {lat: 42.0315931, lng: -7.9751244};
    var ourense_posio = {lat: 42.3305642, lng: -7.8643945};
    var caldelas = {lat: 42.374741, lng: -7.4156271};
    var ourense_buenos_aires = {lat: 42.342347, lng: -7.8548786};
    var verin = {lat: 41.9420514, lng: -7.4383811};
    var fixo_coru = {lat: 43.344109, lng: -8.388879};
    var fixo_santiago = {lat: 42.8764632, lng: -8.5580331};
    var fixo_vigo = {lat: 42.225449, lng: -8.728822};
    var fixo_pontevedra = {lat: 42.42888, lng: -8.637958};
    var fixo_ourense = {lat: 42.32725, lng: -7.8599167};
    var fixo_lugo = {lat: 43.020292, lng: -7.535082};
    var fixo_ferrol = {lat: 43.5102778, lng: -8.2161667};

    var info_cambre = new google.maps.InfoWindow({ content: content_cambre });
    var info_coru_conchiñas = new google.maps.InfoWindow({ content: content_coru_conchiñas });
    var info_arteixo = new google.maps.InfoWindow({ content: content_arteixo });
    var info_carballo = new google.maps.InfoWindow({ content: content_carballo });
    var info_ferrol = new google.maps.InfoWindow({ content: content_ferrol });
    var info_as_pontes = new google.maps.InfoWindow({ content: content_as_pontes });
    var info_cedeira = new google.maps.InfoWindow({ content: content_cedeira });
    var info_coru_villa_negreira = new google.maps.InfoWindow({ content: content_coru_villa_negreira });
    var info_betanzos = new google.maps.InfoWindow({ content: content_betanzos });
    var info_coru_cuatro_caminos = new google.maps.InfoWindow({ content: content_coru_cuatro_caminos });
    var info_ribeira = new google.maps.InfoWindow({ content: content_ribeira });
    var info_pobra = new google.maps.InfoWindow({ content: content_pobra });
    var info_negreira = new google.maps.InfoWindow({ content: content_negreira });
    var info_noia = new google.maps.InfoWindow({ content: content_noia });
    var info_xuño = new google.maps.InfoWindow({ content: content_xuño });
    var info_frades = new google.maps.InfoWindow({ content: content_frades });
    var info_aguiño = new google.maps.InfoWindow({ content: content_aguiño });
    var info_a_silva = new google.maps.InfoWindow({ content: content_a_silva });
    var info_marin = new google.maps.InfoWindow({ content: content_marin });
    var info_catoira = new google.maps.InfoWindow({ content: content_catoira });
    var info_caldas_de_reis = new google.maps.InfoWindow({ content: content_caldas_de_reis });
    var info_vilagarcia = new google.maps.InfoWindow({ content: content_vilagarcia });
    var info_mondariz = new google.maps.InfoWindow({ content: content_mondariz });
    var info_bueu = new google.maps.InfoWindow({ content: content_bueu });
    var info_vigo_travesas = new google.maps.InfoWindow({ content: content_vigo_travesas });
    var info_a_guarda = new google.maps.InfoWindow({ content: content_a_guarda });
    var info_moaña = new google.maps.InfoWindow({ content: content_moaña });
    var info_cangas = new google.maps.InfoWindow({ content: content_cangas });
    var info_foz = new google.maps.InfoWindow({ content: content_foz });
    var info_burela = new google.maps.InfoWindow({ content: content_burela });
    var info_antas_de_ulla = new google.maps.InfoWindow({ content: content_antas_de_ulla });
    var info_rabade = new google.maps.InfoWindow({ content: content_rabade });
    var info_ribadeo = new google.maps.InfoWindow({ content: content_ribadeo });
    var info_ferreira_de_panton = new google.maps.InfoWindow({ content: content_ferreira_de_panton });
    var info_sober = new google.maps.InfoWindow({ content: content_sober });
    var info_lobeira = new google.maps.InfoWindow({ content: content_lobeira });
    var info_bande = new google.maps.InfoWindow({ content: content_bande });
    var info_ourense_posio = new google.maps.InfoWindow({ content: content_ourense_posio });
    var info_caldelas = new google.maps.InfoWindow({ content: content_caldelas });
    var info_ourense_buenos_aires = new google.maps.InfoWindow({ content: content_ourense_buenos_aires });
    var info_verin = new google.maps.InfoWindow({ content: content_verin });
    var info_fixo_coru = new google.maps.InfoWindow({ content: content_fixo_coru });
    var info_fixo_santiago = new google.maps.InfoWindow({ content: content_fixo_santiago });
    var info_fixo_vigo = new google.maps.InfoWindow({ content: content_fixo_vigo });
    var info_fixo_pontevedra = new google.maps.InfoWindow({ content: content_fixo_pontevedra });
    var info_fixo_ourense = new google.maps.InfoWindow({ content: content_fixo_ourense });
    var info_fixo_lugo = new google.maps.InfoWindow({ content: content_fixo_lugo });
    var info_fixo_ferrol = new google.maps.InfoWindow({ content: content_fixo_ferrol });

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: galicia
    });

    var marker_cambre = new google.maps.Marker({ position: cambre, map: map, title: 'UM18', icon: 'blood.png' });
    marker_cambre.addListener('click', function() { info_cambre.open(map, marker_cambre); });
    var marker_coru_conchiñas = new google.maps.Marker({ position: coru_conchiñas, map: map, title: 'UM18', icon: 'blood.png' });
    marker_coru_conchiñas.addListener('click', function() { info_coru_conchiñas.open(map, marker_coru_conchiñas); });
    var marker_arteixo = new google.maps.Marker({ position: arteixo, map: map, title: 'UM18', icon: 'blood.png' });
    marker_arteixo.addListener('click', function() { info_arteixo.open(map, marker_arteixo); });
    var marker_carballo = new google.maps.Marker({ position: carballo, map: map, title: 'UM18', icon: 'blood.png' });
    marker_carballo.addListener('click', function() { info_carballo.open(map, marker_carballo); });
    var marker_ferrol = new google.maps.Marker({ position: ferrol, map: map, title: 'UM13', icon: 'blood.png' });
    marker_ferrol.addListener('click', function() { info_ferrol.open(map, marker_ferrol); });
    var marker_as_pontes = new google.maps.Marker({ position: as_pontes, map: map, title: 'UM13', icon: 'blood.png' });
    marker_as_pontes.addListener('click', function() { info_as_pontes.open(map, marker_as_pontes); });
    var marker_cedeira = new google.maps.Marker({ position: cedeira, map: map, title: 'UM13', icon: 'blood.png' });
    marker_cedeira.addListener('click', function() { info_cedeira.open(map, marker_cedeira); });
    var marker_coru_villa_negreira = new google.maps.Marker({ position: coru_villa_negreira, map: map, title: 'UM10', icon: 'blood.png' });
    marker_coru_villa_negreira.addListener('click', function() { info_coru_villa_negreira.open(map, marker_coru_villa_negreira); });
    var marker_betanzos = new google.maps.Marker({ position: betanzos, map: map, title: 'UM10', icon: 'blood.png' });
    marker_betanzos.addListener('click', function() { info_betanzos.open(map, marker_betanzos); });
    var marker_coru_cuatro_caminos = new google.maps.Marker({ position: coru_cuatro_caminos, map: map, title: 'UM10', icon: 'blood.png' });
    marker_coru_cuatro_caminos.addListener('click', function() { info_coru_cuatro_caminos.open(map, marker_coru_cuatro_caminos); });
    var marker_ribeira = new google.maps.Marker({ position: ribeira, map: map, title: 'UM19', icon: 'blood.png' });
    marker_ribeira.addListener('click', function() { info_ribeira.open(map, marker_ribeira); });
    var marker_pobra = new google.maps.Marker({ position: pobra, map: map, title: 'UM19', icon: 'blood.png' });
    marker_pobra.addListener('click', function() { info_pobra.open(map, marker_pobra); });
    var marker_negreira = new google.maps.Marker({ position: negreira, map: map, title: 'UM19', icon: 'blood.png' });
    marker_negreira.addListener('click', function() { info_negreira.open(map, marker_negreira); });
    var marker_noia = new google.maps.Marker({ position: noia, map: map, title: 'UM19', icon: 'blood.png' });
    marker_noia.addListener('click', function() { info_noia.open(map, marker_noia); });
    var marker_xuño = new google.maps.Marker({ position: xuño, map: map, title: 'UM14', icon: 'blood.png' });
    marker_xuño.addListener('click', function() { info_xuño.open(map, marker_xuño); });
    var marker_frades = new google.maps.Marker({ position: frades, map: map, title: 'UM14', icon: 'blood.png' });
    marker_frades.addListener('click', function() { info_frades.open(map, marker_frades); });
    var marker_aguiño = new google.maps.Marker({ position: aguiño, map: map, title: 'UM14', icon: 'blood.png' });
    marker_aguiño.addListener('click', function() { info_aguiño.open(map, marker_aguiño); });
    var marker_a_silva = new google.maps.Marker({ position: a_silva, map: map, title: 'UM14', icon: 'blood.png' });
    marker_a_silva.addListener('click', function() { info_a_silva.open(map, marker_a_silva); });
    var marker_marin = new google.maps.Marker({ position: marin, map: map, title: 'UM12', icon: 'blood.png' });
    marker_marin.addListener('click', function() { info_marin.open(map, marker_marin); });
    var marker_catoira = new google.maps.Marker({ position: catoira, map: map, title: 'UM12', icon: 'blood.png' });
    marker_catoira.addListener('click', function() { info_catoira.open(map, marker_catoira); });
    var marker_caldas_de_reis = new google.maps.Marker({ position: caldas_de_reis, map: map, title: 'UM12', icon: 'blood.png' });
    marker_caldas_de_reis.addListener('click', function() { info_caldas_de_reis.open(map, marker_caldas_de_reis); });
    var marker_vilagarcia = new google.maps.Marker({ position: vilagarcia, map: map, title: 'UM12', icon: 'blood.png' });
    marker_vilagarcia.addListener('click', function() { info_vilagarcia.open(map, marker_vilagarcia); });
    var marker_mondariz = new google.maps.Marker({ position: mondariz, map: map, title: 'UM17', icon: 'blood.png' });
    marker_mondariz.addListener('click', function() { info_mondariz.open(map, marker_mondariz); });
    var marker_bueu = new google.maps.Marker({ position: bueu, map: map, title: 'UM17', icon: 'blood.png' });
    marker_bueu.addListener('click', function() { info_bueu.open(map, marker_bueu); });
    var marker_vigo_travesas = new google.maps.Marker({ position: vigo_travesas, map: map, title: 'UM17', icon: 'blood.png' });
    marker_vigo_travesas.addListener('click', function() { info_vigo_travesas.open(map, marker_vigo_travesas); });
    var marker_a_guarda = new google.maps.Marker({ position: a_guarda, map: map, title: 'UM17', icon: 'blood.png' });
    marker_a_guarda.addListener('click', function() { info_a_guarda.open(map, marker_a_guarda); });
    var marker_moaña = new google.maps.Marker({ position: moaña, map: map, title: 'UM11', icon: 'blood.png' });
    marker_moaña.addListener('click', function() { info_moaña.open(map, marker_moaña); });
    var marker_cangas = new google.maps.Marker({ position: cangas, map: map, title: 'UM11', icon: 'blood.png' });
    marker_cangas.addListener('click', function() { info_cangas.open(map, marker_cangas); });
    var marker_lobeira = new google.maps.Marker({ position: lobeira, map: map, title: 'UM15', icon: 'blood.png' });
    marker_lobeira.addListener('click', function() { info_lobeira.open(map, marker_lobeira); });
    var marker_bande = new google.maps.Marker({ position: bande, map: map, title: 'UM15', icon: 'blood.png' });
    marker_bande.addListener('click', function() { info_bande.open(map, marker_bande); });
    var marker_ourense_posio = new google.maps.Marker({ position: ourense_posio, map: map, title: 'UM15', icon: 'blood.png' });
    marker_ourense_posio.addListener('click', function() { info_ourense_posio.open(map, marker_ourense_posio); });
    var marker_caldelas = new google.maps.Marker({ position: caldelas, map: map, title: 'UM15', icon: 'blood.png' });
    marker_caldelas.addListener('click', function() { info_caldelas.open(map, marker_caldelas); });
    var marker_ourense_buenos_aires = new google.maps.Marker({ position: ourense_buenos_aires, map: map, title: 'UM15', icon: 'blood.png' });
    marker_ourense_buenos_aires.addListener('click', function() { info_ourense_buenos_aires.open(map, marker_ourense_buenos_aires); });
    var marker_verin = new google.maps.Marker({ position: verin, map: map, title: 'UM15', icon: 'blood.png' });
    marker_verin.addListener('click', function() { info_verin.open(map, marker_verin); });
    var marker_foz = new google.maps.Marker({ position: foz, map: map, title: 'UM16', icon: 'blood.png' });
    marker_foz.addListener('click', function() { info_foz.open(map, marker_foz); });
    var marker_burela = new google.maps.Marker({ position: burela, map: map, title: 'UM16', icon: 'blood.png' });
    marker_burela.addListener('click', function() { info_burela.open(map, marker_burela); });
    var marker_antas_de_ulla = new google.maps.Marker({ position: antas_de_ulla, map: map, title: 'UM16', icon: 'blood.png' });
    marker_antas_de_ulla.addListener('click', function() { info_antas_de_ulla.open(map, marker_antas_de_ulla); });
    var marker_rabade = new google.maps.Marker({ position: rabade, map: map, title: 'UM16', icon: 'blood.png' });
    marker_rabade.addListener('click', function() { info_rabade.open(map, marker_rabade); });
    var marker_ribadeo = new google.maps.Marker({ position: ribadeo, map: map, title: 'UM16', icon: 'blood.png' });
    marker_ribadeo.addListener('click', function() { info_ribadeo.open(map, marker_ribadeo); });
    var marker_ferreira_de_panton = new google.maps.Marker({ position: ferreira_de_panton, map: map, title: 'UM16', icon: 'blood.png' });
    marker_ferreira_de_panton.addListener('click', function() { info_ferreira_de_panton.open(map, marker_ferreira_de_panton); });
    var marker_sober = new google.maps.Marker({ position: sober, map: map, title: 'UM16', icon: 'blood.png' });
    marker_sober.addListener('click', function() { info_sober.open(map, marker_sober); });

    var marker_fixo_coru = new google.maps.Marker({ position: fixo_coru, map: map, title: 'Punto fixo Coruña', icon: 'blood.png' });
    marker_fixo_coru.addListener('click', function() { info_fixo_coru.open(map, marker_fixo_coru); });
    var marker_fixo_santiago = new google.maps.Marker({ position: fixo_santiago, map: map, title: 'Punto fixo Santiago', icon: 'blood.png' });
    marker_fixo_santiago.addListener('click', function() { info_fixo_santiago.open(map, marker_fixo_santiago); });
    var marker_fixo_vigo = new google.maps.Marker({ position: fixo_vigo, map: map, title: 'Punto fixo Vigo', icon: 'blood.png' });
    marker_fixo_vigo.addListener('click', function() { info_fixo_vigo.open(map, marker_fixo_vigo); });
    var marker_fixo_pontevedra = new google.maps.Marker({ position: fixo_pontevedra, map: map, title: 'Punto fixo Pontevedra', icon: 'blood.png' });
    marker_fixo_pontevedra.addListener('click', function() { info_fixo_pontevedra.open(map, marker_fixo_pontevedra); });
    var marker_fixo_ourense = new google.maps.Marker({ position: fixo_ourense, map: map, title: 'Punto fixo Ourense', icon: 'blood.png' });
    marker_fixo_ourense.addListener('click', function() { info_fixo_ourense.open(map, marker_fixo_ourense); });
    var marker_fixo_lugo = new google.maps.Marker({ position: fixo_lugo, map: map, title: 'Punto fixo Lugo', icon: 'blood.png' });
    marker_fixo_lugo.addListener('click', function() { info_fixo_lugo.open(map, marker_fixo_lugo); });
    var marker_fixo_ferrol = new google.maps.Marker({ position: fixo_ferrol, map: map, title: 'Punto fixo Ferrol', icon: 'blood.png' });
    marker_fixo_ferrol.addListener('click', function() { info_fixo_ferrol.open(map, marker_fixo_ferrol); });
}
