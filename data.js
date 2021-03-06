var puntos_fixos = [
    {
        lat: 43.344109,
        lng: -8.388879,
        title: 'Punto fixo Coruña',
        schedule: [
            { line: 'Luns a venres de 8:00 a 22:00' },
            { line: 'Sábado de 8:00 a 15:00' }
        ],
        additional_info: [
            { line: 'Hospital A Coruña' },
            { line: 'As Xubias, 84. 15006 A Coruña' },
            { line: 'Teléfono 981227430' },
            { line: 'Aparcamento gratuíto no parking público' }
        ]
    },
    {
        lat: 42.8764632,
        lng: -8.5580331,
        title: 'Punto fixo Santiago de Compostela',
        schedule: [
            { line: 'Luns a venres de 8:00 a 22:00' },
            { line: 'Sábado de 8:00 a 15:00' }
        ],
        additional_info: [
            { line: 'Avenida Monte da Condesa, s/n' },
            { line: '15706 Santiago de Compostela' },
            { line: 'Teléfono 881546900' },
            { line: 'Aparcamento gratuíto diante do CTG' }
        ]
    },
    {
        lat: 42.225449,
        lng: -8.728822,
        title: 'Punto fixo Vigo',
        schedule: [
            { line: 'Luns a venres de 8:00 a 22:00' },
            { line: 'Sábados de 8:00 a 15:00' }
        ],
        additional_info: [
            { line: 'Hospital Nicolás Peña' },
            { line: 'Pavillón 4, planta baixa' },
            { line: 'Avenida Camelias, 109' },
            { line: 'Vigo' },
            { line: 'Teléfono 986219174' },
            { line: 'Aparcamento gratuíto parking Pintor Colmeiro' }
        ]
    },
    {
        lat: 42.42888,
        lng: -8.637958,
        title: 'Punto fixo Pontevedra',
        schedules: [
            {
                title: 'Horario de inverno (de outubro a abril)',
                lines: [
                    { line: 'Luns e venres de 8:00 a 15:00' },
                    { line: 'Martes, mércores e xoves de 15:00 a 22:00' }
                ]
            },
            {
                title: 'Horario de verán (de maio a setembro)',
                lines: [
                    { line: 'Luns e venres de 8:00 a 15:00' }
                ]
            }
        ],
        additional_info: [
            { line: 'Hospital Provincial de Pontevedra' },
            { line: 'Módulos de atención, ao carón da entrada de Urxencias Pediátricas' },
            { line: 'Rúa Loureiro Crespo, 2' },
            { line: 'Pontevedra' },
            { line: 'Teléfono 986800000' },
            { line: 'Aparcamento gratuíto parking Centro Ciudad Veters. Rúa Antón Fraguas, s/n (baixos Hipercor)' }
        ]
    },
    {
        lat: 42.32725,
        lng: -7.8599167,
        title: 'Punto fixo Ourense',
        schedules: [
            {
                title: 'Horario de inverno (de outubro a maio)',
                lines: [
                    { line: 'Luns de 8:00 a 22:00' },
                    { line: 'Martes, mércores e xoves de 8:00 a 15:00' },
                    { line: 'Venres de 15:00 a 22:00' }
                ]
            },
            {
                title: 'Horario de verán (de xuño a setembro)',
                lines: [
                    { line: 'Luns e venres de 8:00 a 15:00' }
                ]
            }
        ],
        additional_info: [
            { line: 'Complexo hospitalario de Ourense' },
            { line: 'Edificio Cristal. Fronte ao Edificio Administrativo, antiga entrada de Urxencias' },
            { line: 'Rúa Ramón Puga, 52-54' },
            { line: '32005 Ourense' },
            { line: 'Teléfono 988370103' },
            { line: 'Aparcamento gratuíto no parking Santa María Nai, fronte ao hospital' }
        ]
    },
    {
        lat: 43.020292,
        lng: -7.535082,
        title: 'Punto fixo Lugo',
        schedules: [
            {
                title: 'Horario de inverno (de outubro a marzo)',
                lines: [
                    { line: 'Luns e venres de 8:00 a 22:00' },
                    { line: 'Martes, mércores e xoves de 8:00 a 15:00' }
                ]
            },
            {
                title: 'Horario de verán (de abril a setembro)',
                lines: [
                    { line: 'Luns a venres de 8:00 a 15:00' }
                ]
            }
        ],
        additional_info: [
            { line: 'Hospital Lucus Augusti' },
            { line: 'Sala de doazón: cuarto andar, fronte as escaleiras mecánicas do acceso principal' },
            { line: 'San Cibrao, s/n' },
            { line: '27003 Lugo' },
            { line: 'Teléfono 982221064' },
            { line: 'Aparcamento gratuíto na prazas do persoal do hospital (solicitar acceso no posto de seguridade)' }
        ]
    },
    {
        lat: 43.5102778,
        lng: -8.2161667,
        title: 'Punto fixo Ferrol',
        schedule: [
            { line: 'Luns e venres de 8:00 a 22:00' },
            { line: 'Martes, mércores e xoves de 8:00 a 15:00' }
        ],
        additional_info: [
            { line: 'Hospital Arquitecto Marcide. Andar cero' },
            { line: 'Ao carón da escaleira mecánica, fronte ao laboratorio' },
            { line: 'Estrada de San Pedro de Leixa, s/n' },
            { line: '15405 Ferrol' },
            { line: 'Teléfono 981334541' },
            { line: 'Aparcamento gratuíto no parking do hospital' }
        ]
    }
];

var puntos_mobiles = [
    {
        lat: 43.6697511,
        lng: -7.9062175,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '16:00', to: '18:30' }
                ]
            }
        ],
        indications: {
            place: '15151 PONTEMERA (ORTIGUEIRA)',
            street: 'DIANTE DA FARMACIA'
        }
    },
    {
        lat: 43.6831543,
        lng: -7.8522102,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '19:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15152 ESPASANTE (ORTIGUEIRA)',
            street: 'DIANTE DA CASA DO MAR'
        }
    },
    {
        lat: 43.3465003,
        lng: -8.4146774,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15285 GUARDIA CIVIL (A CORUÑA)',
            street: 'ENTRADA PRINCIPAL'
        }
    },
    {
        lat: 43.1533348,
        lng: -8.3801254,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15614 MESON DO VENTO (ORDES)',
            street: 'CAMPO DA FEIRA'
        }
    },
    {
        lat: 43.3613589,
        lng: -8.4194143,
        title: 'UM10',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15270 PRAZA CONCHIÑAS (A CORUÑA)',
            street: 'PRAZA DAS CONCHIÑAS'
        }
    },
    {
        lat: 42.6069103,
        lng: -8.9377029,
        title: 'UM19',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15857 POBRA CARAMIÑAL',
            street: 'PRAZA ALCALDE SEGUNDO DURÁN (PRAZA MAIOR)'
        }
    },
    {
        lat: 42.3894269,
        lng: -8.5012412,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36236 PONTE CALDELAS',
            street: 'ALAMEDA DIANTE DO BANCO DE SANTANDER'
        }
    },
    {
        lat: 42.0830686,
        lng: -8.4982082,
        title: 'UM17',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36636 SALVATERRA DO MIÑO',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.2203082,
        lng: -8.7327473,
        title: 'UM11',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36492 ZONA AS TRAVESAS (VIGO)',
            street: 'PRAZA AMERICA (ENTRE AVD.FRAGOSO e AVDA CASTRELOS)'
        }
    },
    {
        lat: 42.8649369,
        lng: -7.4402383,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '16:00', to: '18:00' }
                ]
            }
        ],
        indications: {
            place: '27282 O PARAMO',
            street: 'CAMPO DA FEIRA'
        }
    },
    {
        lat: 42.864652,
        lng: -7.4462288,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '18:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27278 LANCARA',
            street: 'CRUCE DA ESTACION (POBRA DE SAN XIAO)'
        }
    },
    {
        lat: 42.3951592,
        lng: -7.1141031,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns, 30/1/2017',
                hours: [
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32270 A RUA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.4802522,
        lng: -8.2236744,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15185 TERCIO NORTE (FERROL)',
            street: 'DELANTE DEL CUARTEL'
        }
    },
    {
        lat: 43.3039214,
        lng: -8.0777533,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15513 IRIXOA',
            street: 'CHAO DA VIÑA (NO CAMPO DA FEIRA)'
        }
    },
    {
        lat: 43.3555559,
        lng: -8.404848,
        title: 'UM18',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15279 I.E.S.  FERNANDO WIRTZ (A CORUÑA)',
            street: 'ENTRADA PRINCIPAL'
        }
    },
    {
        lat: 43.2503819,
        lng: -8.1661115,
        title: 'UM10',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15503 COIROS',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.7271988,
        lng: -9.0045346,
        title: 'UM19',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15813 PORTO DO SON',
            street: 'NA ZONA PORTUARIA AO CARÓN DA LONXA VELLA'
        }
    },
    {
        lat: 42.6563682,
        lng: -8.8824413,
        title: 'UM14',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:00', to: '13:30' }
                ]
            }
        ],
        indications: {
            place: '15844 I.E.S. ESPIÑEIRA (BOIRO)',
            street: 'PARADA DO BUS ESCOLAR'
        }
    },
    {
        lat: 42.6971048,
        lng: -8.2470758,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:15', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36095 SILLEDA',
            street: 'AVDA DO PARQUE XUNTO A PARADA DE TAXIS (FRONTE AO Nº3)'
        }
    },
    {
        lat: 42.2662927,
        lng: -8.6671966,
        title: 'UM17',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36427 I.E.S. CHAPELA (REDONDELA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 43.5361343,
        lng: -7.0509124,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:30', to: '13:30' }
                ]
            },
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '10:30', to: '13:30' }
                ]
            }
        ],
        indications: {
            place: '27099 I.E.S. PORTA DA AUGA (RIBADEO)',
            street: 'APARCAMENTO DO INSTITUTO'
        }
    },
    {
        lat: 43.5683988,
        lng: -7.2596102,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27066 FOZ',
            street: 'AO CARÓN DO CONCELLO'
        }
    },
    {
        lat: 42.1885957,
        lng: -7.7995208,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes, 31/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32392 ALLARIZ',
            street: 'CAMPO DA BARREIRA'
        }
    },
    {
        lat: 43.4508452,
        lng: -7.8531017,
        title: 'UM13',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15243 AS PONTES',
            street: 'DIANTE DO CONCELLO (RÚA PEATONAL)'
        }
    },
    {
        lat: 43.213275,
        lng: -8.6893762,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15544 CARBALLO',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 43.1065779,
        lng: -9.2159898,
        title: 'UM10',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15731 MUXIA',
            street: 'DIANTE DA LONXA'
        }
    },
    {
        lat: 42.9114796,
        lng: -8.733918,
        title: 'UM19',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15762 NEGREIRA',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.8340119,
        lng: -8.5468379,
        title: 'UM14',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15114 FUNDACIÓN FOLTRA (TEO)',
            street: 'DIANTE DE FOLTRA'
        }
    },
    {
        lat: 42.3931411,
        lng: -8.7014753,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36314 MARIN',
            street: 'XARDINS DA ALAMEDA'
        }
    },
    {
        lat: 41.9369606,
        lng: -8.8368848,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36701 O ROSAL',
            street: 'PRAZA DO CALVARIO'
        }
    },
    {
        lat: 42.2240909,
        lng: -8.7258432,
        title: 'UM11',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36485 RUA BARCELONA (VIGO)',
            street: 'DIANTE DO CUARTEL DA GARDA CIVIL'
        }
    },
    {
        lat: 43.5354115,
        lng: -7.0399967,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27098 RIBADEO',
            street: 'AO CARÓN DA ANTIGA OFICINA DE TURISMO'
        }
    },
    {
        lat: 42.1804515,
        lng: -7.1133314,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores, 1/2/2017',
                hours: [
                    { from: '11:00', to: '14:00' },
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32542 VIANA DO BOLO',
            street: 'PRAZA MAIOR'
        }
    },
    {
        lat: 43.2794929,
        lng: -8.210497,
        title: 'UM10',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15491 BETANZOS',
            street: 'PRAZA GARCÍA HERMANOS'
        }
    },
    {
        lat: 42.5550307,
        lng: -8.9930293,
        title: 'UM19',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15873 RIBEIRA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.760269,
        lng: -8.9456023,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15814 PORTOSIN (PORTO DO SON)',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.4443418,
        lng: -8.7816059,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36120 MEAÑO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.1920029,
        lng: -8.6406629,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36356 PETELOS (MOS)',
            street: 'A CARON DA CAPILLA DE SAN AMARO'
        }
    },
    {
        lat: 42.2200126,
        lng: -8.6202554,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36367 GUIZAN (MOS)',
            street: 'DIANTE DO CENTRO CULTURAL'
        }
    },
    {
        lat: 42.2625008,
        lng: -8.7847069,
        title: 'UM11',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36300 CANGAS DO MORRAZO',
            street: 'NA ALAMEDA'
        }
    },
    {
        lat: 42.944101,
        lng: -7.4310204,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '09:30', to: '11:00' }
                ]
            }
        ],
        indications: {
            place: '27239 O CORGO',
            street: 'AO CARÓN DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.8937284,
        lng: -7.250214,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '11:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '27315 BARALLA',
            street: 'PRAZA MAIOR'
        }
    },
    {
        lat: 43.6618688,
        lng: -7.5967465,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27036 VIVEIRO',
            street: 'XARDINS NORIEGA VARELA (PRETO PRAZA DE LUGO)'
        }
    },
    {
        lat: 42.2930984,
        lng: -7.8171862,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves, 2/2/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32174 FAURECIA (S. CIBRAO DAS VIÑAS)',
            street: 'RECINTO DA EMPRESA'
        }
    },
    {
        lat: 43.6608626,
        lng: -8.0539108,
        title: 'UM13',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15164 CEDEIRA',
            street: 'PRAZA DE GALICIA (PARADA DO BUS)'
        }
    },
    {
        lat: 43.3053117,
        lng: -8.5089879,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15390 ARTEIXO',
            street: 'ENTRADA DA RUA PEONIL'
        }
    },
    {
        lat: 42.9986424,
        lng: -8.1365355,
        title: 'UM14',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15645 BOIMORTO',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.6610542,
        lng: -8.111518,
        title: 'UM12',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '10:30', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36083 LALIN',
            street: 'PRAZA DA IGREXA'
        }
    },
    {
        lat: 42.2844409,
        lng: -8.7343219,
        title: 'UM17',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36323 MOAÑA',
            street: 'DIANTE DO CENTRO DE SAUDE'
        }
    },
    {
        lat: 42.0634959,
        lng: -7.7247554,
        title: 'UM15',
        schedules: [
            {
                day: 'Venres, 3/2/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32483 XINZO DE LIMIA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.5389392,
        lng: -7.8133329,
        title: 'UM16',
        schedules: [
            {
                day: 'Sábado, 4/2/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '27345 A BARRELA (CARBALLEDO)',
            street: 'A BARRELA: PARADA DE TAXI'
        }
    }
];
