var express = require('express');
var router = express.Router();
var app = express();

app.use('/api', router);
var Connection = require('tedious').Connection;
var config = {
    userName: 'shobhit',
    password: 'ashosho11!',
    server: 'airassist.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'airassist'}
};

var connection = new Connection(config);
connection.on('connect', function(err) {
    // If no error, then good to proceed.
    console.log("Connected");
});
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function getName(seatID) {
//var matchingID = seatID.toString();
    request = new Request('Exec getName @seatID =' + seatID, function(err) {
        if (err) {
            console.log(err);}
        });
    printTable(request);
    connection.execSql(request);
}


/* GET  */
router.get('/getName', function(req, res) {
    res.JSON(getName(req));
});




//module.exports = router;
