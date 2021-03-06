var auListQuests = [];
auListQuests.push({'question-id': 46, 'question-number': '01', 'question-text': 'Dauer der AU / Besteht Arbeitsunfähigkeit? (Zweifel der Krankenkasse)'})
auListQuests.push({'question-id': 47, 'question-number': '02', 'question-text': 'Sind Maßnahmen zur Sicherung des Behandlungserfolges erforderlich (z.B. ärztliche Behandlung, Rehabilitation)?'})
auListQuests.push({'question-id': 48, 'question-number': '03', 'question-text': 'Liegen die medizinischen Voraussetzungen zur Anwendung des § 51 Abs. 1 SGB V vor?'})
auListQuests.push({'question-id': 49, 'question-number': '04', 'question-text': 'Besteht ein Zusammenhang mit früheren AU-Zeiten? (Gilt nur bei Geschäftsvorfall Begutachtungsauftrag zur/zum Arbeitsunfähigkeit/ Krankengeld – Anfrage Zusammenhängigkeit AU)'})
auListQuests.push({'question-id': 50, 'question-number': '05', 'question-text': 'Fragen zum Leistungsbild'})
auListQuests.push({'question-id': 51, 'question-number': '06', 'question-text': 'Stufenweise Wiedereingliederung nach § 74 SGB V'})
auListQuests.push({'question-id': 52, 'question-number': '07', 'question-text': 'Besteht Arbeitsunfähigkeit? (Zweifel des Arbeitgebers)'})
auListQuests.push({'question-id': 53, 'question-number': '08', 'question-text': 'Besteht Arbeitsunfähigkeit? (Zweifel des Jobcenters)'})
auListQuests.push({'question-id': 54, 'question-number': '93', 'question-text': 'Sonstige Fragestellung 93'})
auListQuests.push({'question-id': 55, 'question-number': '94', 'question-text': 'Sonstige Fragestellung 94'})
auListQuests.push({'question-id': 56, 'question-number': '95', 'question-text': 'Sonstige Fragestellung 95'})
auListQuests.push({'question-id': 57, 'question-number': '96', 'question-text': 'Sonstige Fragestellung 96'})
auListQuests.push({'question-id': 58, 'question-number': '97', 'question-text': 'Sonstige Fragestellung 97'})
auListQuests.push({'question-id': 59, 'question-number': '98', 'question-text': 'Sonstige Fragestellung 98'})
auListQuests.push({'question-id': 60, 'question-number': '99', 'question-text': 'Sonstige Fragestellung 99'})

var auListAnswers = [];
auListAnswers.push({'answer-id': 12, 'answer-number': '3', 'answer-text': 'Andere Antwort / teilweise befürwortet'})
auListAnswers.push({'answer-id': 10, 'answer-number': '1', 'answer-text': 'Ja'})
auListAnswers.push({'answer-id': 11, 'answer-number': '2', 'answer-text': 'Nein'})

var auListEffort = [];
auListEffort.push({'effort-id': 13, 'effort-text': '0 bis unter 3 Stunden'})
auListEffort.push({'effort-id': 14, 'effort-text': '3 bis unter 6 Stunden'})
auListEffort.push({'effort-id': 15, 'effort-text': 'Ab 6 Stunden'})
auListEffort.push({'effort-id': 16, 'effort-text': 'unbekannt'})

var auListReduction = [];
auListReduction.push({'reduction-id': 11, 'reduction-text': 'Minderung der Erwerbsfähigkeit liegt vor'})
auListReduction.push({'reduction-id': 10, 'reduction-text': 'erhebliche Gefährdung der Erwerbsfähigkeit liegt vor'})
auListReduction.push({'reduction-id': 12, 'reduction-text': 'liegt nicht vor'})

var auListStatement = [];
auListStatement.push({'statement-id': 15, 'statement-text': 'der Krankenkasse'})
auListStatement.push({'statement-id': 13, 'statement-text': 'der Versicherten / des Versicherten'})
auListStatement.push({'statement-id': 14, 'statement-text': 'des Arbeitgebers'})
auListStatement.push({'statement-id': 16, 'statement-text': 'einer anderen Person'})

var auListSuggestion = [];
auListSuggestion.push({'suggestion-id': 15, 'suggestion-text': 'Leistungen zur Teilhabe am Arbeitsleben (LTA)'})
auListSuggestion.push({'suggestion-id': 14, 'suggestion-text': 'Leistungen zur medizinischen Rehabilitation'})
auListSuggestion.push({'suggestion-id': 16, 'suggestion-text': 'sonstige'})
auListSuggestion.push({'suggestion-id': 13, 'suggestion-text': 'stufenweise Wiedereingliederung'})

var auListDeliveryConfig = []
auListDeliveryConfig.push({'delivery-config-id': 5, 'delivery-config-text': 'Eingeschränkt (Ohne Anamnese & Befund, mit Erforderliche Angaben über den Befund)', 'flags': 5})
auListDeliveryConfig.push({'delivery-config-id': 6, 'delivery-config-text': 'Eingeschränkt (Ohne Anamnese & Befund, ohne Erforderliche Angaben über den Befund)', 'flags': 1})
auListDeliveryConfig.push({'delivery-config-id': 7, 'delivery-config-text': 'Nichts', 'flags': 5})
auListDeliveryConfig.push({'delivery-config-id': 8, 'delivery-config-text': 'Alles', 'flags': 5})

var result = [];
result.push({id: 25, number: '00', text: 'Keine Pflegebedürftigkeit'})
result.push({id: 100, number: '01', text: 'Nicht weiter arbeitsunfähig'})
result.push({id: 26, number: '01', text: 'Pflegestufe I'})
result.push({id: 101, number: '02', text: 'Aus medizinischer Sicht auf Zeit arbeitsunfähig'})
result.push({id: 27, number: '02', text: 'Pflegestufe II'})
result.push({id: 102, number: '03', text: 'Aus medizinischer Sicht auf Dauer arbeitsunfähig'})
result.push({id: 28, number: '03', text: 'Pflegestufe III'})
result.push({id: 29, number: '04', text: 'Begutachtung erforderlich'})
result.push({id: 103, number: '04', text: 'Andere Antwort'})
result.push({id: 24, number: '10', text: 'Härtefall'})
result.push({id: 30, number: '10', text: 'Aus medizinischer Sicht nicht weiter AU (innerhalb von 14 Tagen)'})
result.push({id: 31, number: '20', text: 'Aus medizinischer Sicht auf Zeit AU'})
result.push({id: 19, number: '30', text: 'Aus medizinischer Sicht auf Dauer AU'})
result.push({id: 20, number: '40', text: 'Aussagen zum Leistungsbild'})
result.push({id: 22, number: '50', text: 'Medizinische Voraussetzungen für die Leistung erfüllt'})
result.push({id: 96, number: '50', text: 'Med. Voraussetzung für Leistungsgewährung erfüllt'})
result.push({id: 21, number: '60', text: 'Medizinische Voraussetzungen für die Leistung nicht erfüllt'})
result.push({id: 34, number: '65', text: 'Voraussetzungen im Sinne der Fragestellung mit Einschränkungen erfüllt'})
result.push({id: 95, number: '77', text: 'Test'})
result.push({id: 17, number: '80', text: 'Weitere Ermittlungen'})
result.push({id: 18, number: '81', text: 'Mitteilung an den Auftraggeber'})
result.push({id: 32, number: '90', text: 'Andere Leistung'})
result.push({id: 94, number: '90', text: 'Andere Antwort'})
result.push({id: 16, number: '90', text: 'Andere Antwort'})

var product2result = [];
product2result.push({productid: 21, resultid: 67})
product2result.push({productid: 28, resultid: 17})
product2result.push({productid: 29, resultid: 17})
product2result.push({productid: 30, resultid: 17})
product2result.push({productid: 31, resultid: 19})
product2result.push({productid: 31, resultid: 30})
product2result.push({productid: 31, resultid: 31})
product2result.push({productid: 31, resultid: 94})
product2result.push({productid: 32, resultid: 16})
product2result.push({productid: 32, resultid: 21})
product2result.push({productid: 32, resultid: 22})
product2result.push({productid: 32, resultid: 32})
product2result.push({productid: 33, resultid: 16})
product2result.push({productid: 33, resultid: 17})
product2result.push({productid: 33, resultid: 21})
product2result.push({productid: 33, resultid: 22})
product2result.push({productid: 33, resultid: 32})
product2result.push({productid: 34, resultid: 16})
product2result.push({productid: 34, resultid: 21})
product2result.push({productid: 34, resultid: 22})
product2result.push({productid: 35, resultid: 16})
product2result.push({productid: 35, resultid: 21})
product2result.push({productid: 35, resultid: 22})
product2result.push({productid: 37, resultid: 17})
product2result.push({productid: 38, resultid: 16})
product2result.push({productid: 38, resultid: 19})
product2result.push({productid: 38, resultid: 20})
product2result.push({productid: 38, resultid: 21})
product2result.push({productid: 38, resultid: 22})
product2result.push({productid: 38, resultid: 24})
product2result.push({productid: 38, resultid: 25})
product2result.push({productid: 38, resultid: 26})
product2result.push({productid: 38, resultid: 27})
product2result.push({productid: 38, resultid: 28})
product2result.push({productid: 38, resultid: 30})
product2result.push({productid: 38, resultid: 31})
product2result.push({productid: 39, resultid: 16})
product2result.push({productid: 39, resultid: 17})
product2result.push({productid: 39, resultid: 21})
product2result.push({productid: 39, resultid: 22})
product2result.push({productid: 39, resultid: 34})
product2result.push({productid: 42, resultid: 16})
product2result.push({productid: 42, resultid: 17})
product2result.push({productid: 42, resultid: 19})
product2result.push({productid: 42, resultid: 20})
product2result.push({productid: 42, resultid: 21})
product2result.push({productid: 42, resultid: 22})
product2result.push({productid: 42, resultid: 29})
product2result.push({productid: 42, resultid: 30})
product2result.push({productid: 42, resultid: 31})
product2result.push({productid: 43, resultid: 17})
product2result.push({productid: 44, resultid: 17})
product2result.push({productid: 45, resultid: 17})
product2result.push({productid: 46, resultid: 17})
product2result.push({productid: 47, resultid: 17})
product2result.push({productid: 48, resultid: 17})
product2result.push({productid: 49, resultid: 17})
product2result.push({productid: 50, resultid: 17})
product2result.push({productid: 58, resultid: 16})
product2result.push({productid: 58, resultid: 17})
product2result.push({productid: 58, resultid: 19})
product2result.push({productid: 58, resultid: 20})
product2result.push({productid: 58, resultid: 21})
product2result.push({productid: 58, resultid: 22})
product2result.push({productid: 58, resultid: 29})
product2result.push({productid: 58, resultid: 30})
product2result.push({productid: 58, resultid: 31})
product2result.push({productid: 59, resultid: 16})
product2result.push({productid: 59, resultid: 17})
product2result.push({productid: 59, resultid: 19})
product2result.push({productid: 59, resultid: 20})
product2result.push({productid: 59, resultid: 21})
product2result.push({productid: 59, resultid: 22})
product2result.push({productid: 59, resultid: 29})
product2result.push({productid: 59, resultid: 30})
product2result.push({productid: 59, resultid: 31})
product2result.push({productid: 63, resultid: 17})
product2result.push({productid: 65, resultid: 17})
product2result.push({productid: 67, resultid: 16})
product2result.push({productid: 67, resultid: 21})
product2result.push({productid: 67, resultid: 22})
product2result.push({productid: 80, resultid: 16})
product2result.push({productid: 81, resultid: 17})
product2result.push({productid: 81, resultid: 18})
product2result.push({productid: 81, resultid: 29})
product2result.push({productid: 82, resultid: 19})
product2result.push({productid: 82, resultid: 30})
product2result.push({productid: 82, resultid: 31})
product2result.push({productid: 83, resultid: 19})
product2result.push({productid: 83, resultid: 22})
product2result.push({productid: 83, resultid: 30})
product2result.push({productid: 83, resultid: 31})
product2result.push({productid: 83, resultid: 94})
product2result.push({productid: 83, resultid: 96})
product2result.push({productid: 84, resultid: 19})
product2result.push({productid: 84, resultid: 22})
product2result.push({productid: 84, resultid: 30})
product2result.push({productid: 84, resultid: 31})
product2result.push({productid: 84, resultid: 94})
product2result.push({productid: 84, resultid: 96})
product2result.push({productid: 85, resultid: 19})
product2result.push({productid: 85, resultid: 22})
product2result.push({productid: 85, resultid: 30})
product2result.push({productid: 85, resultid: 31})
product2result.push({productid: 85, resultid: 94})
product2result.push({productid: 85, resultid: 96})
product2result.push({productid: 86, resultid: 19})
product2result.push({productid: 86, resultid: 22})
product2result.push({productid: 86, resultid: 30})
product2result.push({productid: 86, resultid: 31})
product2result.push({productid: 86, resultid: 94})
product2result.push({productid: 86, resultid: 96})
product2result.push({productid: 87, resultid: 19})
product2result.push({productid: 87, resultid: 22})
product2result.push({productid: 87, resultid: 30})
product2result.push({productid: 87, resultid: 31})
product2result.push({productid: 87, resultid: 94})
product2result.push({productid: 87, resultid: 96})
product2result.push({productid: 88, resultid: 19})
product2result.push({productid: 88, resultid: 22})
product2result.push({productid: 88, resultid: 30})
product2result.push({productid: 88, resultid: 31})
product2result.push({productid: 88, resultid: 94})
product2result.push({productid: 88, resultid: 96})
product2result.push({productid: 102, resultid: 16})
product2result.push({productid: 102, resultid: 19})
product2result.push({productid: 102, resultid: 20})
product2result.push({productid: 102, resultid: 21})
product2result.push({productid: 102, resultid: 22})
product2result.push({productid: 102, resultid: 24})
product2result.push({productid: 102, resultid: 25})
product2result.push({productid: 102, resultid: 26})
product2result.push({productid: 102, resultid: 27})
product2result.push({productid: 102, resultid: 28})
product2result.push({productid: 102, resultid: 30})
product2result.push({productid: 102, resultid: 31})
product2result.push({productid: 104, resultid: 16})
product2result.push({productid: 104, resultid: 17})
product2result.push({productid: 104, resultid: 19})
product2result.push({productid: 104, resultid: 20})
product2result.push({productid: 104, resultid: 21})
product2result.push({productid: 104, resultid: 22})
product2result.push({productid: 104, resultid: 29})
product2result.push({productid: 104, resultid: 30})
product2result.push({productid: 104, resultid: 31})
product2result.push({productid: 105, resultid: 100})
product2result.push({productid: 105, resultid: 101})
product2result.push({productid: 105, resultid: 102})
product2result.push({productid: 105, resultid: 103})
product2result.push({productid: 106, resultid: 100})
product2result.push({productid: 106, resultid: 101})
product2result.push({productid: 106, resultid: 102})
product2result.push({productid: 106, resultid: 103})
product2result.push({productid: 107, resultid: 100})
product2result.push({productid: 107, resultid: 101})
product2result.push({productid: 107, resultid: 102})
product2result.push({productid: 107, resultid: 103})
