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
        lat: 41.9420514,
        lng: -7.4383811,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:30', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32519 VERIN',
            street: 'PRAZA GARCIA BARBÓN (Praza Maior)'
        }
    },
    {
        lat: 43.2925717,
        lng: -8.344482,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15422 CAMBRE',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.3613589,
        lng: -8.4194143,
        title: 'UM18',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
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
        lat: 43.3051599,
        lng: -8.5087933,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15390 ARTEIXO',
            street: 'ENTRADA DA RUA PEONIL'
        }
    },
    {
        lat: 43.2131445,
        lng: -8.6894835,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15544 CARBALLO',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 43.4840615,
        lng: -8.2058028,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15191 Bº CARANZA (FERROL)',
            street: 'AO CARÓN DO MERCADO'
        }
    },
    {
        lat: 43.4508936,
        lng: -7.8530745,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Mércores 4/1/2017',
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
        lat: 43.6608476,
        lng: -8.0541278,
        title: 'UM13',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15164 CEDEIRA',
            street: 'PRAZA DE GALICIA (PARADA DO BUS)'
        }
    },
    {
        lat: 43.3635388,
        lng: -8.4223245,
        title: 'UM10',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15327 Bº VILLA NEGREIRA (A CORUÑA)',
            street: 'RUA VILLA DE NEGREIRA Nº 53 (ESQUINA RUA BARCELONA)'
        }
    },
    {
        lat: 43.2797688,
        lng: -8.2104311,
        title: 'UM10',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Mércores 4/1/2017',
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
        lat: 43.3551556,
        lng: -8.4029407,
        title: 'UM10',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15314 ZONA CUATRO CAMINOS (A CORUÑA)',
            street: 'RUA RAMÓN Y CAJAL (Fronte ao Centro Comercial Cuatro Caminos)'
        }
    },
    {
        lat: 42.5550502,
        lng: -8.9929984,
        title: 'UM19',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15873 RIBEIRA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.6069103,
        lng: -8.9377029,
        title: 'UM19',
        schedules: [
            {
                day: 'Martes 3/1/2017',
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
        lat: 42.9115098,
        lng: -8.7337589,
        title: 'UM19',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
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
        lat: 42.7848581,
        lng: -8.8884553,
        title: 'UM19',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15795 NOIA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.6364523,
        lng: -9.0262154,
        title: 'UM14',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15815 XUÑO (PORTO DO SON)',
            street: 'NO CRUCE DE AGRA.  DIANTE DO SUPERMERCADO DE VILAS'
        }
    },
    {
        lat: 43.0384621,
        lng: -8.3203686,
        title: 'UM14',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15596 FRADES, PONTECARREIRA',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.5205068,
        lng: -9.019026,
        title: 'UM14',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15879 AGUIÑO (RIBEIRA)',
            street: 'EXPLANADA DO PORTO'
        }
    },
    {
        lat: 43.1588507,
        lng: -8.5661989,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15589 A SILVA (CERCEDA)',
            street: 'CAMPO DA FEIRA'
        }
    },
    {
        lat: 42.3931819,
        lng: -8.7018059,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns 2/1/2017',
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
        lat: 42.6720452,
        lng: -8.725159,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36023 CATOIRA',
            street: 'RUA ESTACION'
        }
    },
    {
        lat: 42.6039039,
        lng: -8.6414688,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36012 CALDAS DE REIS',
            street: 'PASEO (XUNTO O CENTRO DE SAUDE)'
        }
    },
    {
        lat: 42.5936207,
        lng: -8.7678798,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36162 VILAGARCIA',
            street: 'RUA CASTELAO ZONA PEATONAL (XUNTO AO RIO CON)'
        }
    },
    {
        lat: 42.23212,
        lng: -8.454981,
        title: 'UM17',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36603 MONDARIZ',
            street: 'DIANTE DA IGREXA'
        }
    },
    {
        lat: 42.3275511,
        lng: -8.7839105,
        title: 'UM17',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36293 BUEU',
            street: 'XUNTO A ANTIGA CASA DO MAR'
        }
    },
    {
        lat: 42.2203076,
        lng: -8.7327909,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
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
        lat: 41.9021648,
        lng: -8.8698694,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36686 A GUARDA',
            street: 'PRAZA AVELINO VICENTE (NA PARADA DO BUS, FRONTE A FROIZ)'
        }
    },
    {
        lat: 42.2847719,
        lng: -8.734395,
        title: 'UM11',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36323 MOAÑA',
            street: 'DIANTE DO CENTRO DE SAUDE'
        }
    },
    {
        lat: 42.2633274,
        lng: -8.7824166,
        title: 'UM11',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36300 CANGAS DO MORRAZO',
            street: 'ALAMEDA'
        }
    },
    {
        lat: 43.5682616,
        lng: -7.2594224,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns 2/1/2017',
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
        lat: 43.6595663,
        lng: -7.3581829,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '11:00', to: '14:00' },
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27060 BURELA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.7827464,
        lng: -7.890302,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '27260 ANTAS DE ULLA',
            street: 'FRONTE AO CONCELLO'
        }
    },
    {
        lat: 43.1216101,
        lng: -7.6248174,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27254 RABADE',
            street: 'PRAZA DE ESPAÑA'
        }
    },
    {
        lat: 43.5356295,
        lng: -7.0391276,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves 5/1/2017',
                hours: [
                    { from: '10:30', to: '14:00' },
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27098 RIBADEO',
            street: 'AO CARÓN DA ANTIGA OFICINA DE TURISMO'
        }
    },
    {
        lat: 42.5051804,
        lng: -7.626396,
        title: 'UM16',
        schedules: [
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '10:30', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '27380 FERREIRA DE PANTON',
            street: 'RUA OURENSE (FRONTE AO BANCO PASTOR)'
        }
    },
    {
        lat: 42.4618678,
        lng: -7.5870143,
        title: 'UM16',
        schedules: [
            {
                day: 'Sábado 7/1/2017',
                hours: [
                    { from: '12:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '27389 SOBER',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 41.9874451,
        lng: -8.0395899,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '16:00', to: '18:00' }
                ]
            }
        ],
        indications: {
            place: '32425 LOBEIRA',
            street: 'AO CARON DO CENTRO DE SAUDE'
        }
    },
    {
        lat: 42.0315931,
        lng: -7.9751244,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns 2/1/2017',
                hours: [
                    { from: '18:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32416 BANDE',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.3305642,
        lng: -7.8643945,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 3/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32099 Bº O POSIO (OURENSE)',
            street: 'RUA CORUÑA Nº 12'
        }
    },
    {
        lat: 42.374741,
        lng: -7.4156271,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '10:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '32209 CASTRO CALDELAS',
            street: 'PRAZA DO PRADO'
        }
    },
    {
        lat: 42.342347,
        lng: -7.8548786,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 4/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32108 AVDA. BUENOS AIRES (OURENSE)',
            street: 'FRONTE AO SUPERMERCADO "SPAR" (Avd. Buenos Aires nº 136)'
        }
    }
];
