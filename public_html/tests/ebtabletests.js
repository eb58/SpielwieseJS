/* global basketTestdata */
'use strict';

var opts = {
   head: ["Paket", '', "Datum", "Name", "Fälligkeit", "Auftragspaket", "Frage des AG", "Produkt", "Bearbeiter", "Eingang", "DTA Nummern"]
   , data: basketTestdata
   , rowsPerPage: 25
};
var grid;
$().ready(function () {
   grid = $('#grid').ebtable(opts);
   grid.adjustHeader();
});
$(window).on('resize', function () {
   grid.adjustHeader();
});

