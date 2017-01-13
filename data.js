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
        lat: 43.5348583,
        lng: -7.9440497,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15234 AS SOMOZAS',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.3163792,
        lng: -8.3679136,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15438 O BURGO (CULLEREDO)',
            street: 'PRAZA DE EUROPA'
        }
    },
    {
        lat: 43.1888373,
        lng: -8.0210952,
        title: 'UM10',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15486 ARANGA',
            street: 'NA CASTELLANA AO CARÓN DA FARMACIA'
        }
    },
    {
        lat: 42.8447343,
        lng: -8.5767838,
        title: 'UM19',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15085 MILLADOIRO (AMES)',
            street: 'RUA CRUXA (AO CARON DE SUPERMERCADOS EL ARBOL)'
        }
    },
    {
        lat: 42.51499,
        lng: -8.8152165,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36113 CAMBADOS',
            street: 'XUNTO AO CENTRO DE SAUDE'
        }
    },
    {
        lat: 42.1415502,
        lng: -8.8065327,
        title: 'UM17',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36378 NIGRAN',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.2310357,
        lng: -8.7041497,
        title: 'UM11',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36491 ZONA O CALVARIO (VIGO)',
            street: 'RUA URZAIZ (DIANTE DO MERCADO)'
        }
    },
    {
        lat: 43.1255602,
        lng: -7.0699995,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27185 A FONSAGRADA',
            street: 'FRONTE AO MUSEO'
        }
    },
    {
        lat: 42.3189697,
        lng: -7.881245,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns 16/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32065 A VALENZA (BARBADAS)',
            street: 'DIANTE DA FARMACIA (Avda de Celanova, nº 72)'
        }
    },
    {
        lat: 43.4718729,
        lng: -8.1787153,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15169 NAVANTIA – FENE',
            street: 'DIANTE DOS SERVICIOS MEDICOS'
        }
    },
    {
        lat: 43.4135824,
        lng: -8.1679392,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15251 CABANAS',
            street: 'FRONTE A FARMACIA (No aparcamento)'
        }
    },
    {
        lat: 43.341707,
        lng: -8.4022493,
        title: 'UM18',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15334 URB. MATOGRANDE (A CORUÑA)',
            street: 'A CARON DO "COLEGIO LICEO LA PAZ"'
        }
    },
    {
        lat: 43.1231019,
        lng: -8.1483711,
        title: 'UM10',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15507 CURTIS',
            street: 'DIANTE DA CASA DA XUVENTUDE'
        }
    },
    {
        lat: 42.3944917,
        lng: -8.7083421,
        title: 'UM19, UM12 e UM17',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36312 ESCUELA NAVAL MARIN-PONTEVEDRA',
            street: 'DELANTE DEL EDIFICIO ALMIRANTE FRANCISCO MORENO'
        }
    },
    {
        lat: 42.7743789,
        lng: -9.0572462,
        title: 'UM19',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15776 MUROS',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.787084,
        lng: -8.8874959,
        title: 'UM14',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15798 I.E.S. CAMPO DE SAN ALBERTO (NOIA)',
            street: 'NO PATIO'
        }
    },
    {
        lat: 42.5635318,
        lng: -8.872421,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36108 ILLA DE AROUSA',
            street: 'PASEO MARITIMO DO CAMPO'
        }
    },
    {
        lat: 42.2031887,
        lng: -8.6853684,
        title: 'UM17',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36523 BEMBRIVE (VIGO)',
            street: 'DIANTE DO CENTRO CULTURAL'
        }
    },
    {
        lat: 43.3547504,
        lng: -7.8134069,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '27156 XERMADE',
            street: 'AO CARÓN DO CONCELLO'
        }
    },
    {
        lat: 43.4226268,
        lng: -7.7645976,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27157 ROUPAR (XERMADE)',
            street: 'EN ROUPAR (NA CASA NOVA)'
        }
    },
    {
        lat: 42.4666951,
        lng: -8.2731275,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '11:00', to: '12:30' }
                ]
            }
        ],
        indications: {
            place: '32011 BEARIZ',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.431547,
        lng: -8.1432684,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '13:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '32015 BOBORAS',
            street: 'AO CARON DO COLEXIO'
        }
    },
    {
        lat: 42.0609228,
        lng: -7.4618748,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes 17/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32498 LAZA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.3889257,
        lng: -8.164067,
        title: 'UM13',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15266 GTMOTIVE (PONTEDEUME)',
            street: 'UNIDAD MÓVIL EN EL APARCAMIENTO DE LA EMPRESA'
        }
    },
    {
        lat: 43.558177,
        lng: -8.2092718,
        title: 'UM13',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15221 O VAL (NARON)',
            street: 'AO CARON DA COOPERATIVA'
        }
    },
    {
        lat: 43.2486043,
        lng: -8.5824021,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15560 A LARACHA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 43.3613589,
        lng: -8.4194143,
        title: 'UM10',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
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
        lat: 42.8826201,
        lng: -8.5276633,
        title: 'UM19',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15035 AREA CENTRAL FONTIÑAS (SANTIAGO)',
            street: 'FRONTE Á CABINA DE INFORMACIÓN (ESCALEIRA DE ACCESO A ALCAMPO)'
        }
    },
    {
        lat: 42.8222807,
        lng: -8.4606713,
        title: 'UM14',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15092 C.F.E.A. SERGUDE (BOQUEIXON)',
            street: 'APARCAMENTO DO CENTRO'
        }
    },
    {
        lat: 42.6224285,
        lng: -8.6468083,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '18:00' }
                ]
            }
        ],
        indications: {
            place: '36049 CLAVO S.A (CALDAS DE REIS)',
            street: 'APARCAMENTO DA EMPRESA'
        }
    },
    {
        lat: 42.4371022,
        lng: -8.8180361,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '18:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36121 DENA (MEAÑO)',
            street: 'XUNTO A PRAZA DE ABASTOS'
        }
    },
    {
        lat: 42.1808429,
        lng: -8.5201981,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36622 I.E.S. A GRANXA (PONTEAREAS)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.1134611,
        lng: -8.7798776,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36377 I.E.S. ESCOLAS PRO-VAL (NIGRAN)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.1540947,
        lng: -8.5429342,
        title: 'UM11',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '16:00', to: '18:30' }
                ]
            }
        ],
        indications: {
            place: '36620 GULANS (PONTEAREAS)',
            street: 'AO CARON DA IGREXA'
        }
    },
    {
        lat: 42.1817504,
        lng: -8.5589986,
        title: 'UM11',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '19:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36619 XINZO (PONTEAREAS)',
            street: 'PRAZA DA IGREXA'
        }
    },
    {
        lat: 43.5650712,
        lng: -7.2680262,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:30', to: '13:30' }
                ]
            }
        ],
        indications: {
            place: '27067 I.E.S. FOZ (FOZ)',
            street: 'APARCAMENTO DO INSTITUTO (DIANTE DA PORTA PRINCIPAL)'
        }
    },
    {
        lat: 43.0160882,
        lng: -7.2475113,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '16:00', to: '18:30' }
                ]
            }
        ],
        indications: {
            place: '27180 CADAVO (BALEIRA)',
            street: 'AO CARON DO CONCELLO (CADAVO)'
        }
    },
    {
        lat: 43.029663,
        lng: -7.3255256,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '19:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27191 CASTROVERDE',
            street: 'AO CARÓN DO CONCELLO'
        }
    },
    {
        lat: 42.1388411,
        lng: -8.157462,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '10:30', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '32374 PADRENDA',
            street: 'CRESPOS: DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.1383512,
        lng: -8.1593294,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '12:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '32374 PADRENDA',
            street: 'NOTARIA: CAMPO DA FESTA'
        }
    },
    {
        lat: 42.2066102,
        lng: -8.1704196,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores 18/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32318 CORTEGADA',
            street: 'AO CARON DE "BANCO SANTANDER"'
        }
    },
    {
        lat: 43.4751272,
        lng: -8.1645393,
        title: 'UM13',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15168 FENE',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.212425,
        lng: -8.7039534,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15543 I.E.S. MONTE NEME (CARBALLO)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 43.3180877,
        lng: -8.6060822,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '16:00', to: '18:30' }
                ]
            }
        ],
        indications: {
            place: '15562 CAION (LARACHA)',
            street: 'NA PRAZA'
        }
    },
    {
        lat: 43.2555505,
        lng: -8.5548662,
        title: 'UM18',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '19:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15561 PAIOSACO (LARACHA)',
            street: 'CAMPO DA FEIRA'
        }
    },
    {
        lat: 43.3474592,
        lng: -8.3975016,
        title: 'UM10',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15317 ZONA MONELOS / CASTRILLON (A CORUÑA)',
            street: 'PRAZA PABLO IGLESIAS'
        }
    },
    {
        lat: 42.9136648,
        lng: -8.0134994,
        title: 'UM19',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15663 MELIDE',
            street: 'CANTÓN DE SAN ROQUE'
        }
    },
    {
        lat: 42.5539254,
        lng: -9.005207,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15877 I.E.S. LELIADOURA (FRIONS -RIBEIRA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.496782,
        lng: -8.8653552,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36134 O GROVE',
            street: 'PRAZA DO CORGO (AO CARON DA CHURRERIA)'
        }
    },
    {
        lat: 42.1732835,
        lng: -8.4966833,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36618 IES PEDRA DA AUGA (PONTEAREAS)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.2321695,
        lng: -8.7184435,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36506 RUA VENEZUELA (VIGO)',
            street: 'DIANTE DE ABANCA (R/VENEZUELA nº44)'
        }
    },
    {
        lat: 42.1735262,
        lng: -8.5033207,
        title: 'UM11',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 21/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36617 PONTEAREAS',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.9646286,
        lng: -7.5328262,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '27206 NOVA FRIGSA (LUGO)',
            street: 'FRONTE ÁS OFICIÑAS'
        }
    },
    {
        lat: 42.5210151,
        lng: -7.5143298,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27366 MONFORTE',
            street: 'RÚA CARDENAL'
        }
    },
    {
        lat: 42.1698608,
        lng: -7.8893591,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '10:00', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '32345 A BOLA',
            street: 'PODENTES: DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.096051,
        lng: -7.9514104,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '12:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '32387 VEREA',
            street: 'PRAZA DE CARBALLO'
        }
    },
    {
        lat: 42.3391922,
        lng: -7.8719295,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves 19/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32092 Bº O COUTO (OURENSE)',
            street: 'RUA VILA REAL, Nº 6 (AO CARON DO COLEXIO SANTO ANXO)'
        }
    },
    {
        lat: 43.5005932,
        lng: -8.1576331,
        title: 'UM13',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15228 NEDA',
            street: 'DIANTE DA CASA DA CULTURA'
        }
    },
    {
        lat: 42.9547749,
        lng: -9.187204,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '10:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15705 I.E.S. FERNANDO BLANCO (CEE)',
            street: 'APARCAMIENTO DO INSTITUTO'
        }
    },
    {
        lat: 43.3185398,
        lng: -8.3550904,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 21/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15421 EL TEMPLE (CAMBRE)',
            street: 'RUA "CUESTA DE LA TAPIA" Nº 36'
        }
    },
    {
        lat: 43.3698653,
        lng: -8.3951413,
        title: 'UM10',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15388 LA MARINA (A CORUÑA)',
            street: 'PUERTA REAL (rúa Santiago esquina María Barbeito)'
        }
    },
    {
        lat: 42.6525144,
        lng: -8.8183848,
        title: 'UM19',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado 21/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15867 RIANXO',
            street: 'PRAZA CASTELAO'
        }
    },
    {
        lat: 42.8672434,
        lng: -8.3037124,
        title: 'UM14',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15654 TOURO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.5832887,
        lng: -8.7714474,
        title: 'UM12',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '36163 IES FERMIN BOUZA BREI (VILAGARCIA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.5886858,
        lng: -8.7916091,
        title: 'UM12',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36166 VILAXOAN (VILAGARCIA)',
            street: 'PEIRAO'
        }
    },
    {
        lat: 42.1092727,
        lng: -8.7642058,
        title: 'UM17',
        schedules: [
            {
                day: 'Venres 20/01/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36350 GONDOMAR',
            street: 'ESTACION DE AUTOBUSES'
        }
    },
    {
        lat: 42.0634959,
        lng: -7.7247554,
        title: 'UM15',
        schedules: [
            {
                day: 'Venres 20/01/2017',
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
        lat: 43.4897524,
        lng: -8.2226755,
        title: 'UM13',
        schedules: [
            {
                day: 'Sábado 21/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15195 Bº INFERNIÑO (FERROL)',
            street: 'PRAZA DO INFERNIÑO (Rúa Viveiro)'
        }
    },
    {
        lat: 42.2708587,
        lng: -7.6507411,
        title: 'UM15',
        schedules: [
            {
                day: 'Sábado 21/01/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '32402 MACEDA',
            street: 'RÚA JOAO DE NOVOA (Xardíns de ROSALÍA de CASTRO)'
        }
    }
];
