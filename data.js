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
        lat: 43.7343512,
        lng: -7.7076773,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15144 MAÑON-O BARQUEIRO',
            street: 'DIANTE DO BAR "LOS RELOJES"'
        }
    },
    {
        lat: 43.355249,
        lng: -8.4118854,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15321 Bº OS MALLOS (A CORUÑA)',
            street: 'DIANTE DO ANTIGUO AMBULATORIO (NA RONDA DE OUTEIRO)'
        }
    },
    {
        lat: 43.2292183,
        lng: -8.3573269,
        title: 'UM10',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15431 CARRAL',
            street: 'A CARÓN DO CAMPO DA FEIRA'
        }
    },
    {
        lat: 42.8598673,
        lng: -8.6509831,
        title: 'UM19',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15084 BERTAMIRANS (AMES)',
            street: 'AVENIDA DA MAHÍA, DIANTE DA PRAZA'
        }
    },
    {
        lat: 42.5030858,
        lng: -8.7673548,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36141 RIBADUMIA',
            street: 'XUNTO AO CONCELLO'
        }
    },
    {
        lat: 42.2359311,
        lng: -8.7204093,
        title: 'UM17',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36463 RUA PRINCIPE (VIGO)',
            street: 'AO CARON DA FAROLA DE PRINCIPE'
        }
    },
    {
        lat: 42.1260468,
        lng: -8.8492544,
        title: 'UM11',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36338 BAIONA',
            street: 'RUA JESUS VALVERDE (NA ENTRADA O PARADOR)'
        }
    },
    {
        lat: 43.0093032,
        lng: -7.5568118,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27204 PRAZA MAIOR (LUGO)',
            street: 'LATERAL DA PRAZA MAIOR (fronte ó Círculo das Artes)'
        }
    },
    {
        lat: 42.3509178,
        lng: -7.8663604,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns 23/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32112 PRAZA DA MARIÑA (OURENSE)',
            street: 'PRAZA DE MARIÑA (AVDA SANTIAGO Nº 30)'
        }
    },
    {
        lat: 43.4845637,
        lng: -8.232951,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15190 PRAZA DE ARMAS (FERROL)',
            street: 'DIANTE DO CONCELLO (No reservado da Policia Municipal)'
        }
    },
    {
        lat: 43.3211322,
        lng: -8.5039773,
        title: 'UM18',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15404 LA VOZ DE GALICIA (ARTEIXO)',
            street: 'DENTRO DO RECINTO'
        }
    },
    {
        lat: 43.3122402,
        lng: -8.3827666,
        title: 'UM10',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15444 VILABOA (CULLEREDO)',
            street: 'DIANTE DA OFICINA DE ABANCA'
        }
    },
    {
        lat: 42.8745104,
        lng: -8.5493507,
        title: 'UM19',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15040 PRAZA ROXA (SANTIAGO)',
            street: 'PRAZA ROXA'
        }
    },
    {
        lat: 42.8874816,
        lng: -8.5177623,
        title: 'UM14',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15057 XUNTA DE GALICIA – CONSELLERIA SANIDADE (SAN LÁZARO) (SANTIAGO)',
            street: 'APARCAMENTO DA CONSELLERÍA DE SANIDADE'
        }
    },
    {
        lat: 42.4272635,
        lng: -8.615127,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36269 IES.MONTECELO (ANTIGO PRINCIPE FELIPE) (PONTEVEDRA)',
            street: 'APARCAMENTO DO CENTRO'
        }
    },
    {
        lat: 42.4312778,
        lng: -8.6440362,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36244 ZONA HERRERIA (PONTEVEDRA)',
            street: 'HERRERIA (XUNTO A IGREXA DA PEREGRINA)'
        }
    },
    {
        lat: 42.2040172,
        lng: -8.7516176,
        title: 'UM17 e UM11',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' },
                    { from: '22:00', to: '03:00' }
                ]
            }
        ],
        indications: {
            place: '36470 GKN DRIVELINE (VIGO)',
            street: 'DIANTE DOS SEVICIOS MEDICOS'
        }
    },
    {
        lat: 42.9974014,
        lng: -7.5417673,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '27220 E.ARTES APLICADAS RAMON FALCON',
            street: 'DIANTE DA ESCOLA'
        }
    },
    {
        lat: 42.3431592,
        lng: -7.9825117,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            },
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '32113 COREN – CPA (OURENSE)',
            street: 'RECINTO DA EMPRESA'
        }
    },
    {
        lat: 42.4218878,
        lng: -8.05091,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '16:00', to: '17:30' }
                ]
            }
        ],
        indications: {
            place: '32021 DACON (MASIDE)',
            street: 'CAMPO DE SAN ROQUE'
        }
    },
    {
        lat: 42.4109593,
        lng: -8.0247101,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 24/01/2017',
                hours: [
                    { from: '18:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32020 MASIDE',
            street: 'AO CARON DA IGREXA'
        }
    },
    {
        lat: 43.6870819,
        lng: -7.8570707,
        title: 'UM13',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15150 ORTIGUEIRA',
            street: 'DIANTE DO NOVO CENTRO DE SAUDE'
        }
    },
    {
        lat: 43.3394388,
        lng: -8.4072263,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15294 CARREFOUR-AVD. ALFONSO MOLINA (A CORUÑA)',
            street: 'ENTRADA PRINCIPAL'
        }
    },
    {
        lat: 43.3767622,
        lng: -8.3982035,
        title: 'UM10',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15323 Bº MONTE ALTO (A CORUÑA)',
            street: 'RUA DA TORRE (Diante da Biblioteca)'
        }
    },
    {
        lat: 42.8627271,
        lng: -8.5423418,
        title: 'UM19',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15060 CENTRO COMERCIAL COMPOSTELA (SANTIAGO)',
            street: 'AULA DE FORMACIÓN'
        }
    },
    {
        lat: 42.8788096,
        lng: -8.5474529,
        title: 'UM14',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15044 I.E.S. SAN CLEMENTE (SANTIAGO)',
            street: 'NO SALÓN DE ACTOS'
        }
    },
    {
        lat: 42.4262312,
        lng: -8.6172138,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36270 I.E.S. CARLOS OROZA (PONTEVEDRA)',
            street: 'FRONTE A ENTRADA PRINCIPAL DO CENTRO'
        }
    },
    {
        lat: 42.2187983,
        lng: -8.7448302,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36474 ALCAMPO-COIA (VIGO)',
            street: 'DIANTE DA PORTA PRINCIPAL'
        }
    },
    {
        lat: 42.7784424,
        lng: -7.4105628,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27296 SARRIA',
            street: 'RUA CALVO SOLTELO (FRONTE AO PASEO DO MALECON)'
        }
    },
    {
        lat: 42.3408541,
        lng: -7.8646398,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 25/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32084 RUA DO PASEO (OURENSE)',
            street: 'NA RUA DO PASEO, Nº 37'
        }
    },
    {
        lat: 43.4277539,
        lng: -8.2418618,
        title: 'UM13',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15158 ARES',
            street: 'DIANTE DO CENTRO DE SAUDE'
        }
    },
    {
        lat: 43.1877368,
        lng: -8.7516467,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15556 EFA FONTEBOA (CORISTANCO)',
            street: 'DIANTE DO CENTRO'
        }
    },
    {
        lat: 43.3686771,
        lng: -8.4022913,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15272 CANTON PEQUENO (A CORUÑA)',
            street: 'OBELISCO'
        }
    },
    {
        lat: 43.2428253,
        lng: -8.9007301,
        title: 'UM10',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15579 PONTECESO',
            street: 'PRAZA DO RELLENO'
        }
    },
    {
        lat: 43.0336365,
        lng: -8.804897,
        title: 'UM19',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15747 SANTA COMBA',
            street: 'DIANTE DO CENTRO DE CULTURA'
        }
    },
    {
        lat: 43.0741543,
        lng: -8.4030082,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15612 I.E.S. Nº1 ORDES',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.4476687,
        lng: -8.6213516,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36243 I.E.S. LUIS SEOANE (PONTEVEDRA)',
            street: 'APARCAMENTO FRONTE AO CENTRO'
        }
    },
    {
        lat: 42.4459652,
        lng: -8.6223745,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36254 Bº MONTEPORREIRO (PONTEVEDRA)',
            street: 'NA RÚA ALEMANIA, XUNTO A PARADA DE BUS SITUADA FRONTE A CLÍNICA DENTAL MONTEPORREIRO'
        }
    },
    {
        lat: 42.108623,
        lng: -8.6235,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36407 VIZA S.A. (PORRIÑO)',
            street: 'DENTRO DO RECINTO DA EMPRESA'
        }
    },
    {
        lat: 42.1608232,
        lng: -8.6191747,
        title: 'UM11',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36393 PORRIÑO',
            street: 'DIANTE DA CAFETERIA "SCALA" (RUA DOMINGO BUENO)'
        }
    },
    {
        lat: 43.2363172,
        lng: -7.5572124,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '27132 COSPEITO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.2530304,
        lng: -7.431064,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27133 MUIMENTA (COSPEITO)',
            street: 'PRAZA MAIOR'
        }
    },
    {
        lat: 42.2877971,
        lng: -7.8209007,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '09:30', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '32133 COREN - SAN CIBRAO',
            street: 'SAN CIBRAO: RECINTO DA EMPRESA'
        }
    },
    {
        lat: 42.2417643,
        lng: -7.8264346,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 26/01/2017',
                hours: [
                    { from: '12:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: 'TABOADELA',
            street: 'DIANTE DA EMPRESA'
        }
    },
    {
        lat: 43.34904,
        lng: -8.2058399,
        title: 'UM13',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15518 MIÑO',
            street: 'RUA MERCADO S/N (Diante da Policia Local)'
        }
    },
    {
        lat: 43.3481616,
        lng: -8.419634,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15529 COMMCENTER (A CORUÑA)',
            street: 'DIANTE DA EMPRESA'
        }
    },
    {
        lat: 43.2603231,
        lng: -8.8196573,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15580 PAZOS (PONTECESO)',
            street: 'DIANTE DO LOCAL PARROQUIAL'
        }
    },
    {
        lat: 42.9551319,
        lng: -9.1916953,
        title: 'UM10',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 28/01/2017',
                hours: [
                    { from: '10:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15706 CEE',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.8318336,
        lng: -8.5462262,
        title: 'UM19',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15109 CACHEIRAS (TEO)',
            street: 'DIANTE DA FARMACIA'
        }
    },
    {
        lat: 43.1588507,
        lng: -8.5661989,
        title: 'UM14',
        schedules: [
            {
                day: 'Venres 27/01/2017',
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
        lat: 42.6883377,
        lng: -8.4896044,
        title: 'UM12',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 28/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36053 A ESTRADA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.2839106,
        lng: -8.6090398,
        title: 'UM17',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 28/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36425 REDONDELA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.6094228,
        lng: -7.7686644,
        title: 'UM16',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 28/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '27350 CHANTADA',
            street: 'PRAZA DE GALICIA'
        }
    },
    {
        lat: 42.4165102,
        lng: -6.9843622,
        title: 'UM15',
        schedules: [
            {
                day: 'Venres 27/01/2017',
                hours: [
                    { from: '11:00', to: '14:00' },
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32258 O BARCO DE VALDEORRAS',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.8243548,
        lng: -8.5958567,
        title: 'UM19',
        schedules: [
            {
                day: 'Sábado 28/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15111 CALO (TEO)',
            street: 'DIANTE DA IGREXA'
        }
    }
];
