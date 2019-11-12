const valueLists = {
  keywords: ["Schlagwort 1", "Schlagwort 2", "Schlagwort 3", "Schlagwort 4", "Schlagwort 5", "Schlagwort 6"],
  doctabs: [
    {v: null, txt: "Keine Auswahl"},
    {v: 1, txt: "Beauftragungsdokumente"},
    {v: 4, txt: "Fremddokumente"},
    {v: 6, txt: "Neue Dokumente"},
    {v: 3, txt: "weitere Dokumente zum Auftrag"}
  ],
  doctypes: [
    {v: null, txt: "Keine Auswahl"},
    {v: 65, txt: "Aktenvermerk"},
    {v: 53, txt: "ambulante Berichte"},
    {v: -3, txt: "anonymisiertes DMS-Produkt"},
    {v: 69, txt: "ARIS-KH-Übergabedokument"},
    {v: 6, txt: "AU AL"},
    {v: 8, txt: "AU Besuche (mit Begutacht.Vers.und/oder Akteneinsicht)"},
    {v: 7, txt: "AU KU"},
    {v: 3, txt: "AU SFB"},
    {v: 5, txt: "AU SMB"},
    {v: 4, txt: "AU SMS"},
    {v: 51, txt: "Auftragsdokument"},
    {v: 2, txt: "AU-Mitteilungen"},
    {v: 70, txt: "Beurteilung der RV-Pflicht"},
    {v: 61, txt: "DRG-Abrechnung ...."},
    {v: 57, txt: "Einweisungsschein"},
    {v: -2, txt: "externes Gutachten"},
    {v: 75, txt: "Gutachten-Archivprodukt"},
    {v: 1, txt: "Gutachtenprodukt"},
    {v: 68, txt: "Hausbesuchsanschreiben"},
    {v: 67, txt: "Hausbesuchsanschreiben (BP)"},
    {v: 72, txt: "Hilfsmittelempfehlung"},
    {v: 19, txt: "Him_ AL"},
    {v: 21, txt: "Himi Besuche (mit Begutacht. Vers. und/oder Akteneinsicht)"},
    {v: 20, txt: "Himi KU"},
    {v: 16, txt: "Himi Mitteilungen"},
    {v: 17, txt: "Himi SFB"},
    {v: 18, txt: "Himi SMS"},
    {v: 25, txt: "HKP AL"},
    {v: 27, txt: "HKP Besuche (mit Begutacht. Vers. und/oder Akteneinsicht)"},
    {v: 26, txt: "HKP KU"},
    {v: 22, txt: "HKP Mitteilungen"},
    {v: 23, txt: "HKP SFB"},
    {v: 24, txt: "HKP SMS"},
    {v: 31, txt: "KH AL"},
    {v: 33, txt: "KH Besuche (mit Begutacht.Vers. und/oder AE"},
    {v: 32, txt: "KH KU"},
    {v: 28, txt: "KH Mitteilungen"},
    {v: 29, txt: "KH SFB"},
    {v: 30, txt: "KH SMS"},
    {v: 62, txt: "Kopie der KH-Akte"},
    {v: 63, txt: "Koqua-/Kodipausdruck"},
    {v: 59, txt: "Kostenübernahmeerklärung"},
    {v: 58, txt: "Kostenvoranschläge"},
    {v: 52, txt: "Leistungsdatenauszug"},
    {v: 74, txt: "Leistungserbringer Gutachtenprodukt"},
    {v: 73, txt: "Mdk2Mdk Anhang"},
    {v: 55, txt: "med.tech. Befunde (z.B. EKG, CT, MRT, Röntgenbilder,Histologie)"},
    {v: 66, txt: "Nachforderung Unterlagen"},
    {v: 56, txt: "OP-Berichte"},
    {v: 49, txt: "Pflege AL"},
    {v: 50, txt: "Pflege Besuche (mit Begutacht. Vers. und/oder Akteneinsicht)"},
    {v: 46, txt: "Pflege Mitteilungen"},
    {v: 47, txt: "Pflege SFB"},
    {v: 48, txt: "Pflege SMS"},
    {v: 71, txt: "Präventions- und Reha-Empfehlung"},
    {v: 13, txt: "Reha AL"},
    {v: 15, txt: "Reha Besuche (mit Begutacht.Vers. und/oder Akteneinsicht)"},
    {v: 14, txt: "Reha KU"},
    {v: 9, txt: "Reha Mitteilungen"},
    {v: 10, txt: "Reha SFB"},
    {v: 11, txt: "Reha SMB"},
    {v: 12, txt: "Reha SMS"},
    {v: 43, txt: "So AL"},
    {v: 45, txt: "So Besuche (mit Begutacht. des Vers. und/oder Akteneinsicht)"},
    {v: 44, txt: "So KU"},
    {v: 38, txt: "So Mitteilungen"},
    {v: 40, txt: "So Mitteilungen"},
    {v: 41, txt: "So SFB"},
    {v: 42, txt: "So SMS"},
    {v: 54, txt: "stationäre Berichte"},
    {v: 37, txt: "UUB AL"},
    {v: 39, txt: "UUB Besuche (mit Begutacht.Vers. und/oder Akteneinsicht)"},
    {v: 34, txt: "UUB Mitteilungen"},
    {v: 35, txt: "UUB SFB"},
    {v: 36, txt: "UUB SMS"},
    {v: 60, txt: "Verlängerungsantrag"},
    {v: 64, txt: "Zusätzliche Informationen/Notizen"},
    {v: 794, txt: "Zwischennachricht"}
  ],
  caringTimes: [
    {v: null, txt: "Keine Auswahl", },
    {v: 1, txt: "weniger als 14h", },
    {v: 2, txt: "zwischen 14h und weniger als 21h", },
    {v: 3, txt: "zwischen 21h und weniger als 28h", },
    {v: 4, txt: "mehr als 28h", }
  ],
  countryList: [
    {v: null, txt: "Keine Auswahl"},
    {v: "EG", txt: "Ägypten - EG"},
    {v: "GQ", txt: "Äquatorialguinea - GQ"},
    {v: "ET", txt: "Äthiopien - ET"},
    {v: "AF", txt: "Afghanistan - AF"},
    {v: "AX", txt: "Ålandinseln  - AX"},
    {v: "AL", txt: "Albanien - AL"},
    {v: "DZ", txt: "Algerien - DZ"},
    {v: "AD", txt: "Andorra - AD"},
    {v: "AO", txt: "Angola - AO"},
    {v: "AG", txt: "Antigua und Barbuda - AG"},
    {v: "AR", txt: "Argentinien - AR"},
    {v: "AM", txt: "Armenien - AM"},
    {v: "AZ", txt: "Aserbaidschan - AZ"},
    {v: "AU", txt: "Australien - AU"},
    {v: "BS", txt: "Bahamas - BS"},
    {v: "BH", txt: "Bahrain - BH"},
    {v: "BD", txt: "Bangladesch - BD"},
    {v: "BB", txt: "Barbados - BB"},
    {v: "BE", txt: "Belgien - BE"},
    {v: "BZ", txt: "Belize - BZ"},
    {v: "BJ", txt: "Benin - BJ"},
    {v: "BT", txt: "Bhutan - BT"},
    {v: "BO", txt: "Bolivien - BO"},
    {v: "BA", txt: "Bosnien und Herzegowina - BA"},
    {v: "BW", txt: "Botsuana - BW"},
    {v: "BR", txt: "Brasilien - BR"},
    {v: "BN", txt: "Brunei Darussalam - BN"},
    {v: "BG", txt: "Bulgarien - BG"},
    {v: "BF", txt: "Burkina Faso - BF"},
    {v: "BI", txt: "Burundi - BI"},
    {v: "CL", txt: "Chile - CL"},
    {v: "CN", txt: "China - CN"},
    {v: "CK", txt: "Cookinseln - CK"},
    {v: "CR", txt: "Costa Rica - CR"},
    {v: "CI", txt: "Côte d'Ivoire - CI"},
    {v: "DK", txt: "Dänemark - DK"},
    {v: "CD", txt: "Demokratische Republik Kongo - CD"},
    {v: "KP", txt: "Demokratische Volksrepublik Korea - KP"},
    {v: "LA", txt: "Demokratische Volksrepublik Laos - LA"},
    {v: "VA", txt: "Der Heilige Stuhl (Vatikanstadt) - VA"},
    {v: "DE", txt: "Deutschland - DE"},
    {v: "DM", txt: "Dominica - DM"},
    {v: "DO", txt: "Dominikanische Republik - DO"},
    {v: "DJ", txt: "Dschibuti - DJ"},
    {v: "EC", txt: "Ecuador - EC"},
    {v: "MK", txt: "ehemalige jugoslawische Republik Mazedonien - MK"},
    {v: "SV", txt: "El Salvador - SV"},
    {v: "ER", txt: "Eritrea - ER"},
    {v: "EE", txt: "Estland - EE"},
    {v: "FJ", txt: "Fidschi - FJ"},
    {v: "FI", txt: "Finnland - FI"},
    {v: "FM", txt: "Föderierte Staaten von Mikronesien - FM"},
    {v: "FR", txt: "Frankreich - FR"},
    {v: "GA", txt: "Gabun - GA"},
    {v: "GM", txt: "Gambia - GM"},
    {v: "GE", txt: "Georgien - GE"},
    {v: "GH", txt: "Ghana - GH"},
    {v: "GD", txt: "Grenada - GD"},
    {v: "EL", txt: "Griechenland - EL"},
    {v: "UK", txt: "Großbritannien - UK"},
    {v: "GT", txt: "Guatemala - GT"},
    {v: "GN", txt: "Guinea - GN"},
    {v: "GW", txt: "Guinea-Bissau - GW"},
    {v: "GY", txt: "Guyana - GY"},
    {v: "HT", txt: "Haiti - HT"},
    {v: "HN", txt: "Honduras - HN"},
    {v: "IN", txt: "Indien - IN"},
    {v: "ID", txt: "Indonesien - ID"},
    {v: "IQ", txt: "Irak - IQ"},
    {v: "IR", txt: "Iran - IR"},
    {v: "IE", txt: "Irland - IE"},
    {v: "IS", txt: "Island - IS"},
    {v: "IL", txt: "Israel - IL"},
    {v: "IT", txt: "Italien - IT"},
    {v: "JM", txt: "Jamaika - JM"},
    {v: "JP", txt: "Japan - JP"},
    {v: "YE", txt: "Jemen - YE"},
    {v: "JO", txt: "Jordanien - JO"},
    {v: "KH", txt: "Kambodscha - KH"},
    {v: "CM", txt: "Kamerun - CM"},
    {v: "CA", txt: "Kanada - CA"},
    {v: "CV", txt: "Kap Verde - CV"},
    {v: "KZ", txt: "Kasachstan - KZ"},
    {v: "QA", txt: "Katar - QA"},
    {v: "KE", txt: "Kenia - KE"},
    {v: "KG", txt: "Kirgisistan - KG"},
    {v: "KI", txt: "Kiribati - KI"},
    {v: "CO", txt: "Kolumbien - CO"},
    {v: "KM", txt: "Komoren - KM"},
    {v: "CG", txt: "Kongo - CG"},
    {v: "KR", txt: "Korea - KR"},
    {v: "HR", txt: "Kroatien - HR"},
    {v: "CU", txt: "Kuba - CU"},
    {v: "KW", txt: "Kuwait - KW"},
    {v: "PKZ", txt: "Land - PKZ"},
    {v: "LS", txt: "Lesotho - LS"},
    {v: "LV", txt: "Lettland - LV"},
    {v: "LB", txt: "Libanon - LB"},
    {v: "LR", txt: "Liberia - LR"},
    {v: "LY", txt: "Libyen - LY"},
    {v: "LI", txt: "Liechtenstein - LI"},
    {v: "LT", txt: "Litauen - LT"},
    {v: "LU", txt: "Luxemburg - LU"},
    {v: "MG", txt: "Madagaskar - MG"},
    {v: "MW", txt: "Malawi - MW"},
    {v: "MY", txt: "Malaysia - MY"},
    {v: "MV", txt: "Malediven - MV"},
    {v: "ML", txt: "Mali - ML"},
    {v: "MT", txt: "Malta - MT"},
    {v: "MA", txt: "Marokko - MA"},
    {v: "MH", txt: "Marshallinseln - MH"},
    {v: "MR", txt: "Mauretanien - MR"},
    {v: "MU", txt: "Mauritius - MU"},
    {v: "MX", txt: "Mexiko - MX"},
    {v: "MC", txt: "Monaco - MC"},
    {v: "MN", txt: "Mongolei - MN"},
    {v: "MZ", txt: "Mosambik - MZ"},
    {v: "MM", txt: "Myanmar - MM"},
    {v: "NA", txt: "Namibia - NA"},
    {v: "NR", txt: "Nauru - NR"},
    {v: "NP", txt: "Nepal - NP"},
    {v: "NZ", txt: "Neuseeland - NZ"},
    {v: "NI", txt: "Nicaragua - NI"},
    {v: "NL", txt: "Niederlande - NL"},
    {v: "NE", txt: "Niger - NE"},
    {v: "NG", txt: "Nigeria - NG"},
    {v: "NU", txt: "Niue - NU"},
    {v: "NO", txt: "Norwegen - NO"},
    {v: "AT", txt: "Österreich - AT"},
    {v: "OM", txt: "Oman - OM"},
    {v: "TL", txt: "Osttimor - TL"},
    {v: "PK", txt: "Pakistan - PK"},
    {v: "PW", txt: "Palau - PW"},
    {v: "PA", txt: "Panama - PA"},
    {v: "PG", txt: "Papua-Neuguinea - PG"},
    {v: "PY", txt: "Paraguay - PY"},
    {v: "PE", txt: "Peru - PE"},
    {v: "PH", txt: "Philippinen - PH"},
    {v: "PL", txt: "Polen - PL"},
    {v: "PT", txt: "Portugal - PT"},
    {v: "MD", txt: "Republik Moldau - MD"},
    {v: "RW", txt: "Ruanda - RW"},
    {v: "RO", txt: "Rumänien - RO"},
    {v: "RU", txt: "Russland - RU"},
    {v: "SB", txt: "Salomonen - SB"},
    {v: "ZM", txt: "Sambia - ZM"},
    {v: "WS", txt: "Samoa - WS"},
    {v: "SM", txt: "San Marino - SM"},
    {v: "ST", txt: "São Tomé und Príncipe - ST"},
    {v: "SA", txt: "Saudi-Arabien - SA"},
    {v: "SE", txt: "Schweden - SE"},
    {v: "CH", txt: "Schweiz - CH"},
    {v: "SN", txt: "Senegal - SN"},
    {v: "CS", txt: "Serbien und Montenegro - CS"},
    {v: "SC", txt: "Seychellen - SC"},
    {v: "SL", txt: "Sierra Leone - SL"},
    {v: "ZW", txt: "Simbabwe - ZW"},
    {v: "SG", txt: "Singapur - SG"},
    {v: "SK", txt: "Slowakei - SK"},
    {v: "SI", txt: "Slowenien - SI"},
    {v: "SO", txt: "Somalia - SO"},
    {v: "ES", txt: "Spanien - ES"},
    {v: "LK", txt: "Sri Lanka - LK"},
    {v: "KN", txt: "St. Kitts und Nevis - KN"},
    {v: "LC", txt: "St. Lucia - LC"},
    {v: "VC", txt: "St. Vincent und Grenadinen - VC"},
    {v: "SD", txt: "Sudan - SD"},
    {v: "ZA", txt: "Südafrika - ZA"},
    {v: "SR", txt: "Suriname - SR"},
    {v: "SZ", txt: "Swasiland - SZ"},
    {v: "SY", txt: "Syrien - SY"},
    {v: "TJ", txt: "Tadschikistan - TJ"},
    {v: "TW", txt: "Taiwan - TW"},
    {v: "TZ", txt: "Tansania - TZ"},
    {v: "TH", txt: "Thailand - TH"},
    {v: "TG", txt: "Togo - TG"},
    {v: "TO", txt: "Tonga - TO"},
    {v: "TT", txt: "Trinidad und Tobago - TT"},
    {v: "TD", txt: "Tschad - TD"},
    {v: "CZ", txt: "Tschechische Republik - CZ"},
    {v: "TR", txt: "Türkei - TR"},
    {v: "TN", txt: "Tunesien - TN"},
    {v: "TM", txt: "Turkmenistan - TM"},
    {v: "TV", txt: "Tuvalu - TV"},
    {v: "UG", txt: "Uganda - UG"},
    {v: "UA", txt: "Ukraine - UA"},
    {v: "HU", txt: "Ungarn - HU"},
    {v: "UY", txt: "Uruguay - UY"},
    {v: "UZ", txt: "Usbekistan - UZ"},
    {v: "VU", txt: "Vanuatu - VU"},
    {v: "VE", txt: "Venezuela - VE"},
    {v: "AE", txt: "Vereinigte Arabische Emirate - AE"},
    {v: "US", txt: "Vereinigte Staaten von Amerika - US"},
    {v: "VN", txt: "Vietnam - VN"},
    {v: "BY", txt: "Weißrussland (Belarus) - BY"},
    {v: "CF", txt: "Zentralafrikanische Republik - CF"},
    {v: "CY", txt: "Zypern - CY"},
  ]
}
