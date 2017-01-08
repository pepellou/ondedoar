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
        lat: 43.5014061,
        lng: -8.2025768,
        title: 'UM13',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15218 NARON',
            street: 'SOLAINA, PRAZA DA CONSTITUCIÓN'
        }
    },
    {
        lat: 43.5007891,
        lng: -8.1916668,
        title: 'UM13',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15218 NARON',
            street: 'AO CARÓN DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 43.4058857,
        lng: -8.1691023,
        title: 'UM13',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15264 PONTEDEUME',
            street: 'ALAMEDA DE RAXOI'
        }
    },
    {
        lat: 43.4845637,
        lng: -8.232951,
        title: 'UM13',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
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
        lat: 43.4859425,
        lng: -8.2285717,
        title: 'UM13',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15178 PRAZA DE ESPAÑA (FERROL)',
            street: 'AO CARÓN DO BANCO SANTANDER'
        }
    },
    {
        lat: 43.4931948,
        lng: -8.2006737,
        title: 'UM13',
        schedules: [
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15223 ZONA A GÁNDARA (NARÓN)',
            street: 'PRAZA DA GÁNDARA (Rúa Pintor Sotomaior)'
        }
    },
    {
        lat: 43.0764781,
        lng: -8.4082062,
        title: 'UM18',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15611 ORDES',
            street: 'DETRÁS DO CONCELLO (ENTRE OS PARQUES MUNICIPAIS)'
        }
    },
    {
        lat: 43.3515392,
        lng: -8.2534083,
        title: 'UM18',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15477 SADA',
            street: 'FRONTE AO CONCELLO'
        }
    },
    {
        lat: 43.3504714,
        lng: -8.4178703,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '09:30', to: '14:00' }
                ]
            },
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '09:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15271 I.E.S. URBANO LUGRÍS (A CORUÑA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 43.3686771,
        lng: -8.4022913,
        title: 'UM18',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15272 CANTÓN PEQUENO (A CORUÑA)',
            street: 'OBELISCO'
        }
    },
    {
        lat: 43.1904213,
        lng: -8.4729719,
        title: 'UM18',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15587 CERCEDA',
            street: 'CAMPO DA FEIRA'
        }
    },
    {
        lat: 43.1102658,
        lng: -9.0346962,
        title: 'UM18',
        schedules: [
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15689 VIMIANZO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.2464197,
        lng: -8.2727016,
        title: 'UM10',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '10:00', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15385 CENTRO INVESTIGACIÓN (ABEGONDO)',
            street: 'APARCAMENTO DE PASTOS DO CIAM'
        }
    },
    {
        lat: 43.3625593,
        lng: -8.4153882,
        title: 'UM10',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            },
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15343 CIFP PASEO DAS PONTES (A CORUÑA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 43.3497849,
        lng: -8.4158489,
        title: 'UM10',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '09:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '15355 IES A SARDIÑEIRA (A CORUÑA)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 43.3118419,
        lng: -8.5101223,
        title: 'UM10',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '15393 I.E.S. SABON (ARTEIXO)',
            street: 'DIANTE DO INSTITUTO'
        }
    },
    {
        lat: 42.9697926,
        lng: -8.4408466,
        title: 'UM19',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15625 SIGÜEIRO (OROSO)',
            street: 'DIANTE DO CENTRO MÉDICO'
        }
    },
    {
        lat: 42.8745104,
        lng: -8.5493507,
        title: 'UM19',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
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
        lat: 42.8804041,
        lng: -8.5460469,
        title: 'UM19',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15061 PRAZA DO OBRADOIRO (SANTIAGO)',
            street: 'DIANTE DO PAZO DE RAXOI'
        }
    },
    {
        lat: 42.902878,
        lng: -8.5108928,
        title: 'UM19',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15072 PARQUE EMPRESARIAL COSTA VELLA (SANTIAGO)',
            street: 'APARCADOIRO EXTEROIR DE LEROY MERLIN'
        }
    },
    {
        lat: 42.6472952,
        lng: -8.8829796,
        title: 'UM19',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '15840 BOIRO',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.7313252,
        lng: -8.6711517,
        title: 'UM14',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15821 DODRO',
            street: 'LESTROBE: APARCAMENTO DO CENTRO MÉDICO'
        }
    },
    {
        lat: 42.9616143,
        lng: -8.7589672,
        title: 'UM14',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15755 A BAÑA',
            street: 'DIANTE DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.944389,
        lng: -7.9586713,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '16:30', to: '18:30' }
                ]
            }
        ],
        indications: {
            place: '15677 TOQUES',
            street: 'LUGAR DO SOUTO'
        }
    },
    {
        lat: 42.8461165,
        lng: -8.03852,
        title: 'UM14',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '19:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15668 SANTISO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.9048262,
        lng: -8.3626116,
        title: 'UM14',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15650 O PINO',
            street: 'FRONTE AO CONCELLO'
        }
    },
    {
        lat: 42.6993807,
        lng: -8.6488527,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '36048 VALGA',
            street: 'PONTEVALGA: FRONTE AO CONCELLO (DIANTE DA PASTELERÍA CAPRICHOS)'
        }
    },
    {
        lat: 42.6989761,
        lng: -8.6856821,
        title: 'UM12',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36048 VALGA',
            street: 'CORDEIRO: XUNTO AO AUDITORIO MUNICIPAL'
        }
    },
    {
        lat: 42.4364964,
        lng: -8.6521696,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36250 GUARDIA CIVIL (PONTEVEDRA)',
            street: 'RECINTO DO CUARTEL DA GUARDIA CIVIL DE PONTEVEDRA'
        }
    },
    {
        lat: 42.4312778,
        lng: -8.6440362,
        title: 'UM12',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36244 ZONA HERRERIA (PONTEVEDRA)',
            street: 'HERRERIA (XUNTO Á IGREXA DA PEREGRINA)'
        }
    },
    {
        lat: 42.562639,
        lng: -8.88559,
        title: 'UM12',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '36109 I.GA.F.A. (ILLA AROUSA)',
            street: 'DIANTE DA PORTA DO CENTRO'
        }
    },
    {
        lat: 42.7367599,
        lng: -8.6614012,
        title: 'UM12',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '15828 PADRÓN',
            street: 'DIANTE DA PRAZA DE ABASTOS (AO CARÓN DO PASEO DO ESPOLÓN)'
        }
    },
    {
        lat: 42.6612049,
        lng: -8.1116125,
        title: 'UM12',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '10:30', to: '14:00' },
                    { from: '16:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36083 LALÍN',
            street: 'PRAZA DA IGREXA'
        }
    },
    {
        lat: 42.2359311,
        lng: -8.7204093,
        title: 'UM17',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36463 RÚA PRÍNCIPE (VIGO)',
            street: 'AO CARÓN DA FAROLA DE PRÍNCIPE'
        }
    },
    {
        lat: 41.991536,
        lng: -8.7432665,
        title: 'UM17',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36707 TOMIÑO',
            street: 'PRAZA DO SEIXO'
        }
    },
    {
        lat: 42.3428554,
        lng: -8.6069481,
        title: 'UM17',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36450 ARCADE (SOUTOMAIOR)',
            street: 'RÚA ROGELIO LANDEIRA (DIANTE DO "RECUNCHO DE CRIS")'
        }
    },
    {
        lat: 42.2408419,
        lng: -8.720706,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' }
                ]
            }
        ],
        indications: {
            place: '36554 DELEGACIÓNS DA XUNTA DE GALICIA (VIGO)',
            street: 'DIANTE DA PORTA PRINCIPAL'
        }
    },
    {
        lat: 42.0019977,
        lng: -8.8735356,
        title: 'UM17',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36693 SANTA MARÍA DE OIA',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.0492202,
        lng: -8.6444511,
        title: 'UM17',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '36717 TUI',
            street: 'PRAZA DE GALICIA (DIANTE DO ANTIGO CENTRO DE SAÚDE)'
        }
    },
    {
        lat: 42.0908621,
        lng: -8.421979,
        title: 'UM11',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36594 AS NEVES',
            street: 'FRONTE AO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.238005,
        lng: -8.7036056,
        title: 'UM11',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36497 ZONA TRAVESÍA DE VIGO (VIGO)',
            street: 'DIANTE DA CAFETERÍA "EL CORRALITO" (TRAVESÍA DE VIGO N 99-101)'
        }
    },
    {
        lat: 41.9466559,
        lng: -8.7733539,
        title: 'UM11',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36708 GOIÁN (TOMIÑO)',
            street: 'PRAZA PINTOR ANTONIO FERNÁNDEZ'
        }
    },
    {
        lat: 42.223105,
        lng: -8.6720363,
        title: 'UM11',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36551 CABRAL (VIGO)',
            street: 'DIANTE DA ANTIGA CAIXA GALICIA (RAMÓN NIETO N 412)'
        }
    },
    {
        lat: 42.1747061,
        lng: -8.7217849,
        title: 'UM11',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '36561 PARROQUIA VALLADARES (VIGO)',
            street: 'DIANTE DO NOVO CENTRO CULTURAL'
        }
    },
    {
        lat: 43.5272728,
        lng: -7.4173478,
        title: 'UM16',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '16:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27056 ALFOZ',
            street: 'PRAZA FRONTE Á FARMACIA (A SEARA)'
        }
    },
    {
        lat: 43.6618688,
        lng: -7.5967465,
        title: 'UM16',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '10:30', to: '14:00' },
                    { from: '17:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27036 VIVEIRO',
            street: 'XARDÍNS NORIEGA VARELA'
        }
    },
    {
        lat: 42.8091768,
        lng: -7.1091928,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '10:00', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '27335 AS NOGAIS',
            street: 'AO CARÓN DO CONCELLO'
        }
    },
    {
        lat: 42.7267487,
        lng: -7.021719,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '12:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '27339 PEDRAFITA',
            street: 'AO CARÓN DO CONCELLO'
        }
    },
    {
        lat: 42.5576413,
        lng: -7.3934301,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '16:00', to: '18:00' }
                ]
            }
        ],
        indications: {
            place: '27384 POBRA DE BROLLON',
            street: 'FRONTE AO CUARTEL DA GUARDIA CIVIL'
        }
    },
    {
        lat: 42.4664678,
        lng: -7.287701,
        title: 'UM16',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '18:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27408 SAN CLODIO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 43.2973515,
        lng: -7.6806183,
        title: 'UM16',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '27149 VILALBA',
            street: 'PARTE DE ABAIXO DA ALAMEDA'
        }
    },
    {
        lat: 43.0093032,
        lng: -7.5568118,
        title: 'UM16',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '15:30', to: '21:00' }
                ]
            },
            {
                day: 'Sábado, 14/1/2017',
                hours: [
                    { from: '10:00', to: '15:00' }
                ]
            }
        ],
        indications: {
            place: '27204 PRAZA MAIOR (LUGO)',
            street: 'LATERAL DA PRAZA MAIOR (Fronte ao Círculo das Artes)'
        }
    },
    {
        lat: 42.4115457,
        lng: -7.8395035,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '16:00', to: '18:00' }
                ]
            }
        ],
        indications: {
            place: '32071 COLES',
            street: 'VILARCHAO: AO CARÓN DO CENTRO DE SAÚDE'
        }
    },
    {
        lat: 42.4425325,
        lng: -7.7933797,
        title: 'UM15',
        schedules: [
            {
                day: 'Luns, 9/1/2017',
                hours: [
                    { from: '18:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32056 A PEROXA',
            street: 'XUNTO AO ANTIGO LOCAL DA CRUZ VERMELLA'
        }
    },
    {
        lat: 42.1120899,
        lng: -7.7572964,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '10:00', to: '12:00' }
                ]
            }
        ],
        indications: {
            place: '32461 SANDIÁS',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.0876145,
        lng: -7.6027233,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '12:30', to: '14:00' }
                ]
            }
        ],
        indications: {
            place: '32465 SARREAUS',
            street: 'DIANTE DO ANTIGO CONCELLO'
        }
    },
    {
        lat: 42.2499699,
        lng: -7.0260248,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '17:00', to: '19:00' }
                ]
            }
        ],
        indications: {
            place: '32237 A VEIGA',
            street: 'PRAZA DO CONCELLO'
        }
    },
    {
        lat: 42.3071949,
        lng: -7.0992786,
        title: 'UM15',
        schedules: [
            {
                day: 'Martes, 10/1/2017',
                hours: [
                    { from: '19:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32264 O BOLO',
            street: 'DIANTE DO CONCELLO'
        }
    },
    {
        lat: 42.3408541,
        lng: -7.8646398,
        title: 'UM15',
        schedules: [
            {
                day: 'Mércores, 11/1/2017',
                hours: [
                    { from: '09:30', to: '14:30' },
                    { from: '15:30', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32084 RÚA DO PASEO (OURENSE)',
            street: 'RÚA DO PASEO N 37'
        }
    },
    {
        lat: 42.4315274,
        lng: -8.0774948,
        title: 'UM15',
        schedules: [
            {
                day: 'Xoves, 12/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32027 O CARBALLIÑO',
            street: 'PRAZA DO EMIGRANTE (Pista Roxa)'
        }
    },
    {
        lat: 42.152104,
        lng: -7.9581485,
        title: 'UM15',
        schedules: [
            {
                day: 'Venres, 13/1/2017',
                hours: [
                    { from: '10:00', to: '14:00' },
                    { from: '16:00', to: '21:00' }
                ]
            }
        ],
        indications: {
            place: '32360 CELANOVA',
            street: 'PRAZA MAIOR'
        }
    }
];
